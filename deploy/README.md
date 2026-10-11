# Despliegue y servicios externos

Lo que vive fuera del repo (Coolify, Cloudflare, n8n y el bot de la imagen OG) y conviene
ajustar para que los cambios del repo rindan del todo. Nada de esto se aplica solo al hacer push.

## 1. nginx en Coolify

`nginx.conf` reemplaza la config por defecto del build pack estático. Está aplicada en Coolify
(aplicación `portfolio`, Configuration → General → **Custom Nginx Configuration**) desde el
11 de octubre de 2026. Coolify no la lee del repo: si se cambia este archivo, hay que volver a
pegarla ahí y redesplegar.

Qué agrega: la copia de las métricas en `/api/metricas` (punto 3), caché de un año para `vendor/` y `fonts/` (llevan la versión en el nombre), 7 días para
imágenes, cabeceras de seguridad (HSTS, nosniff, Referrer-Policy, frame-ancestors), 301 de verdad
para las URLs viejas (`/proyecto?id=`, `/guia?id=`, `*.dc.html`), la 404 propia, `X-Robots-Tag: noindex`
para el material de clientes (incluido el PDF) y 404 para los archivos internos del repo
(`build-*.js`, `README.md`, `deploy/`, `scripts/`).

**Importante si no se pega:** la carpeta nueva `proyectos/` funciona con la config por defecto de
Coolify porque su `try_files` prueba `$uri.html` antes que los directorios (`/proyectos` sigue
sirviendo `proyectos.html`). Si alguna vez se cambia ese orden, `/proyectos` daría 403.

Para probarla en local antes de pegarla (misma imagen que usa Coolify):

```bash
docker run --rm -p 8790:80 \
  -v "$PWD":/usr/share/nginx/html:ro \
  -v "$PWD/deploy/nginx.conf":/etc/nginx/conf.d/default.conf:ro nginx:alpine
curl -sI "http://localhost:8790/proyecto?id=flowdeck-gestor-n8n"   # 301 a /proyectos/flowdeck-gestor-n8n.html
curl -sI http://localhost:8790/vendor/react-18.3.1.production.min.js   # Cache-Control: ... immutable
```

### Compresión de imágenes

Hoy Traefik (la opción **Gzip compression** de la app en Coolify) recomprime también PNG, JPG,
WebP y PDF, que ya vienen comprimidos: gasta CPU y no ahorra nada. Para evitarlo, apagar esa opción
en Coolify y descomentar el bloque `gzip` de `nginx.conf`, que comprime solo el texto. Se pierde
brotli/zstd para el HTML y el JS; si el dominio pasa por Cloudflare (punto 2), Cloudflare ya
comprime hacia el navegador con brotli, así que no se nota.

## 2. Cloudflare delante del portafolio

`n8n` y `umami` ya pasan por Cloudflare, pero `agustin.agustinynatalia.site` apunta directo al
VPS (nube gris). Con la nube naranja, imágenes, JS y fuentes se sirven desde el borde respetando
el `Cache-Control` de `nginx.conf`, y se gana HTTP/3 y protección contra picos.

- DNS → registro `agustin` → Proxied.
- SSL/TLS → modo **Full (strict)**. Con "Flexible" se forma un bucle de redirecciones con Traefik.

## 3. Webhook de métricas (n8n) — resuelto en nginx

`/webhook/metricas-automatizaciones` tarda ~2 s, responde `Cache-Control: no-store` y cada visita
a `/` o `/metricas` ejecutaba el flujo completo. Ahora el sitio pide `/api/metricas`: nginx llama al
webhook como mucho una vez cada 10 minutos y sirve esa copia a todas las visitas (responde en
menos de 1 ms; la cabecera `X-Cache-Status` dice si fue `HIT` o `MISS`). Al vencer la sigue
sirviendo mientras la renueva por detrás, y si n8n falla sigue con la última buena. Si `/api/metricas`
no responde, el navegador va directo al webhook como antes. Además el navegador guarda la respuesta
5 minutos.

No hace falta tocar n8n ni Cloudflare para esto.

## 4. Webhook de los cuestionarios

Los tres cuestionarios (`clinica10`, `innaltech`, `levantamiento`) envían archivos y audios a
`/webhook/levantamiento-proceso`. El navegador ya frena los envíos de más de 90 MB, porque Cloudflare
corta en 100 MB. Del lado del servidor falta:

- **n8n:** `N8N_DEFAULT_BINARY_DATA_MODE=filesystem` para que los adjuntos no queden en memoria.
- **Abuso:** la URL del webhook es pública. Lo más simple es un nodo IF al inicio del flujo que
  descarte lo que no traiga `_meta` con un `formulario` conocido. También sirve una regla de
  Rate limiting en Cloudflare (WAF) para POST a esa ruta, aunque en el plan gratis la ventana es corta.

## 5. Bot diario de la imagen OG ("Rocky")

Cada día hace un commit con la imagen OG y las cifras, y eso dispara un redespliegue. Como nginx
arma el ETag con la fecha del archivo, cada despliegue obliga a bajar de nuevo el HTML y el JS a
quien vuelve (React y las fuentes ya no, porque tienen caché de un año). Además, cada commit
guarda una PNG nueva de ~225 KB en el historial de git.

- Redondear las ejecuciones a 10.000 (como hace el sitio) y **no hacer commit si nada cambió**.
  Hoy suben unas 4.000 por día, así que los commits pasan de diarios a uno cada 2 o 3 días.
  Si además el bot corre una vez por semana, queda en uno semanal.
- Seguir corriendo `node build-guides.js`: ahora también regenera las páginas de `proyectos/` y el
  sitemap, y ya no escribe la fecha del día en el sitemap, así que no produce cambios si nada cambió.
- Opcional: generar la imagen como JPEG (~50 KB en vez de ~225 KB). Hay que cambiar el nombre del
  archivo en el bot y en todas las referencias `og-image.png?v=`.

## 6. Pendientes que no son de código

- **Google Search Console:** se quitó Google Analytics del sitio (quedó solo Umami). Si la
  propiedad estaba verificada con la etiqueta de GA, volver a verificarla por DNS en Cloudflare.
- **Privacidad:** `privacidad.html` describe la herramienta de TikTok, no el sitio ni los
  cuestionarios, que recogen audios y archivos de clientes (Clínica 10 e Innaltech están en España,
  así que aplica el RGPD). Conviene un aviso propio para los cuestionarios.
