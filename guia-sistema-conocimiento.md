# Sistema de conocimiento self-hosted conectado a IA

Guía técnica para montar un "segundo cerebro" propio con **Outline** (open source,
self-hosted) y conectarlo a tus agentes de IA para que capturen, organicen y
consulten información por ti.

Está escrita para que la siga una persona con criterio técnico o, directamente,
un agente de IA. Todos los valores sensibles van como marcadores (`TU_...`):
reemplázalos por los tuyos y nunca los compartas.

---

## Qué vas a montar

- **Outline**: gestor de notas/wiki open source, corriendo en tu propio servidor.
- Una base de datos **PostgreSQL** y una cache **Redis** (las usa Outline).
- Almacenamiento de archivos (local o compatible con S3).
- Un **proveedor de autenticación** para iniciar sesión.
- Un **agente de IA** que lee y escribe en Outline vía su API.

---

## Requisitos

Antes de empezar, ten (o genera) esto:

1. **Un servidor o VPS** propio donde puedas correr contenedores (1 vCPU y 2 GB de RAM alcanzan para empezar).
2. **Docker y Docker Compose** instalados en ese servidor.
3. **Un dominio o subdominio** apuntando al servidor (ejemplo: `notas.tudominio.com`).
4. **Un certificado HTTPS** (lo más fácil: un proxy inverso como Caddy, Traefik o Nginx + Let's Encrypt).
5. **Un proveedor de autenticación**: Outline exige al menos uno (Google, Microsoft, OIDC genérico o correo). Necesitarás sus credenciales (`client id` / `client secret`).
6. **Almacenamiento para archivos**: local en el servidor, o un bucket compatible con S3 (Cloudflare R2, MinIO, AWS S3).
7. **Un agente de IA** con capacidad de hacer peticiones HTTP, para conectarlo a la API de Outline.

---

## 1. Preparar el servidor

```bash
# Crea una carpeta de trabajo
mkdir -p ~/outline && cd ~/outline
```

Genera dos secretos (se usan en la configuración):

```bash
openssl rand -hex 32   # úsalo como SECRET_KEY
openssl rand -hex 32   # úsalo como UTILS_SECRET
```

---

## 2. Desplegar con Docker Compose

Crea un archivo `docker-compose.yml`:

```yaml
services:
  outline:
    image: outlinewiki/outline:latest
    env_file: .env
    ports:
      - "3000:3000"
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:16
    environment:
      POSTGRES_USER: outline
      POSTGRES_PASSWORD: TU_PASSWORD_DB
      POSTGRES_DB: outline
    volumes:
      - ./data/postgres:/var/lib/postgresql/data

  redis:
    image: redis:7
    volumes:
      - ./data/redis:/data
```

---

## 3. Variables de entorno

Crea un archivo `.env` (no lo subas a ningún repositorio):

```bash
# Secretos generados en el paso 1
SECRET_KEY=TU_SECRET_KEY
UTILS_SECRET=TU_UTILS_SECRET

# URL pública y base de datos
URL=https://notas.tudominio.com
DATABASE_URL=postgres://outline:TU_PASSWORD_DB@postgres:5432/outline
REDIS_URL=redis://redis:6379

# Almacenamiento (local o s3)
FILE_STORAGE=local
# Si usas S3/R2/MinIO, configura las claves correspondientes
# AWS_ACCESS_KEY_ID=TU_ACCESS_KEY
# AWS_SECRET_ACCESS_KEY=TU_SECRET_KEY
# AWS_S3_UPLOAD_BUCKET_URL=https://TU_BUCKET
```

---

## 4. Autenticación

Outline no arranca con login si no configuras al menos un proveedor. Elige uno
y agrega sus variables al `.env`. Ejemplo con OIDC genérico:

```bash
OIDC_CLIENT_ID=TU_CLIENT_ID
OIDC_CLIENT_SECRET=TU_CLIENT_SECRET
OIDC_AUTH_URI=https://TU_PROVEEDOR/authorize
OIDC_TOKEN_URI=https://TU_PROVEEDOR/token
OIDC_USERINFO_URI=https://TU_PROVEEDOR/userinfo
```

En tu proveedor, registra como URL de retorno (callback):
`https://notas.tudominio.com/auth/oidc.callback`

---

## 5. Arranque

```bash
docker compose up -d
docker compose logs -f outline   # revisa que levante sin errores
```

Apunta tu proxy inverso (Caddy/Traefik/Nginx) al puerto `3000` y sirve el dominio
por HTTPS. Entra a `https://notas.tudominio.com` e inicia sesión.

---

## 6. Conectar tus agentes de IA

1. En Outline, ve a **Settings → API Tokens** y crea un token. Guárdalo como `TU_API_TOKEN` (es sensible, trátalo como una contraseña).
2. Tu agente usa la **API REST** de Outline para leer y escribir. Endpoints útiles:

```bash
# Buscar en todo el conocimiento
curl -X POST https://notas.tudominio.com/api/documents.search \
  -H "Authorization: Bearer TU_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"query": "lo que el agente necesita encontrar"}'

# Crear un documento (ej. la transcripción de una reunión)
curl -X POST https://notas.tudominio.com/api/documents.create \
  -H "Authorization: Bearer TU_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"collectionId": "TU_COLLECTION_ID", "title": "Reunión 2026-01-01", "text": "## Resumen\n..."}'
```

Con esto, tus automatizaciones pueden: guardar transcripciones de reuniones,
archivar ideas de contenido en la colección que corresponda, y responder
preguntas buscando en lo ya guardado.

---

## Estructura recomendada

Dos decisiones marcan la diferencia entre que esto funcione o se vuelva un cajón
desordenado:

- **Separa capturar de organizar.** Capturar debe ser inmediato y sin fricción.
  Organizar es un paso aparte que hace el sistema (o el agente), no tú en el momento.
- **Pocos espacios, no veinte carpetas.** Crea pocas colecciones claras
  (por ejemplo: Reuniones, Contenido, Notas, Proyectos). Menos lugares y más
  obvios significa que siempre sabes dónde va cada cosa.

---

## Mantenimiento

- **Backups**: respalda periódicamente la base de datos (`postgres`) y la carpeta
  de almacenamiento de archivos.
- **Actualizaciones**: `docker compose pull && docker compose up -d` para subir de versión.
- **Monitoreo**: revisa los logs si algo falla (`docker compose logs outline`).

---

> La herramienta importa, pero lo que la vuelve poderosa es conectarla a algo que
> trabaje por ti. Un gestor de notas solo es un cajón; conectado a agentes, se
> convierte en un sistema que crece sin que lo empujes.
