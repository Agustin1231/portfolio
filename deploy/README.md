# Despliegue y servicios externos

Lo que vive fuera del repo (Coolify, Cloudflare, n8n y el bot de la imagen OG). Nada de esto se
aplica solo al hacer push.

**Estado al 11 de octubre de 2026:** todo lo de abajo quedó aplicado salvo la verificación de
Search Console (punto 6), que es manual. Cada punto dice qué se hizo y cómo se comprobó.

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

### Compresión (hecho el 11-oct-2026)

La opción **Gzip compression** de la app en Coolify (Traefik) está **apagada**: recomprimía también
PNG, JPG, WebP y PDF, que ya vienen comprimidos. Ahora comprime nginx, solo el texto (bloque `gzip`
de `nginx.conf`, ya activo y pegado en Coolify). Hacia el navegador comprime Cloudflare con brotli
(punto 2). La config se probó con `nginx -t` dentro del contenedor antes de aplicarla.

Si se vuelve a cambiar `nginx.conf`, además de pegarla en la interfaz se puede aplicar por la API
de Coolify: `PATCH /api/v1/applications/<uuid>` con `custom_nginx_configuration` en base64.

## 2. Cloudflare delante del portafolio (hecho el 11-oct-2026)

El registro `agustin` está en **Proxied** (nube naranja): imágenes, JS y fuentes salen del borde de
Cloudflare respetando el `Cache-Control` de `nginx.conf` (`vendor/` ya da `cf-cache-status: HIT`),
el HTML va con brotli y se gana HTTP/3. Se comprobó por el borde de Cloudflare que `/`, `/proyectos`,
`/api/metricas` y `/aviso-privacidad` responden 200, que `/proyecto?id=` sigue haciendo 301 y que
no hay bucle de redirecciones.

- El modo SSL de la zona no se tocó: ya funcionaba con los demás subdominios con proxy (n8n, umami),
  así que no es "Flexible". Si alguna vez aparece un bucle de redirecciones, revisar que esté en
  **Full (strict)**.
- **Ojo con el caché del navegador:** la zona tiene "Browser Cache TTL" en 4 horas, así que Cloudflare
  le cambia a los `.js` el `no-cache` de nginx por `max-age=14400` (el HTML sí queda en `no-cache`).
  Un cambio en `support.js`, `upwork-pop.js` o `guides-data.js` puede tardar hasta 4 horas en verse
  para quien ya visitó el sitio. Los estilos van dentro del HTML, así que no les afecta. Arreglos:
  versionar el `<script src>` (como ya hace `projects-data.js?v=...`) o poner Browser Cache TTL en
  "Respect Existing Headers" en Cloudflare (afecta a toda la zona).
- El token de Cloudflare que usa Rocky (`CLOUDFLARE_API_TOKEN`) solo tiene permiso de DNS. Para
  cambiar el modo SSL, reglas de caché o de WAF por API hace falta sumarle `Zone Settings: Edit` y
  `Zone WAF: Edit` (o hacerlo a mano en el panel).

## 3. Webhook de métricas (n8n) — resuelto en nginx

`/webhook/metricas-automatizaciones` tarda ~2 s, responde `Cache-Control: no-store` y cada visita
a `/` o `/metricas` ejecutaba el flujo completo. Ahora el sitio pide `/api/metricas`: nginx llama al
webhook como mucho una vez cada 10 minutos y sirve esa copia a todas las visitas (responde en
menos de 1 ms; la cabecera `X-Cache-Status` dice si fue `HIT` o `MISS`). Al vencer la sigue
sirviendo mientras la renueva por detrás, y si n8n falla sigue con la última buena. Si `/api/metricas`
no responde, el navegador va directo al webhook como antes. Además el navegador guarda la respuesta
5 minutos.

No hace falta tocar n8n ni Cloudflare para esto. Ya estaba aplicado antes del 11-oct.

## 4. Webhook de los cuestionarios

Los tres cuestionarios (`clinica10`, `innaltech`, `levantamiento`) envían archivos y audios a
`/webhook/levantamiento-proceso` (flujo "Levantamiento de Proceso" del n8n personal, id
`2oxrcqb56zR7dQ5e`). El navegador frena los envíos de más de 90 MB, porque Cloudflare corta en 100 MB.

- **Adjuntos en disco (verificado el 11-oct-2026):** n8n 2.x ya guarda los binarios en el sistema
  de archivos por defecto (aparecen en `/home/node/.n8n/binaryData/workflows/.../executions`), así
  que no hizo falta poner `N8N_DEFAULT_BINARY_DATA_MODE` ni reiniciar.
- **Filtro contra abuso (hecho el 11-oct-2026):** nodo **"Filtrar envios validos"** entre el Webhook
  y "Empaquetar envio". Deja pasar solo lo que trae `_meta` con `origen` en
  `https://agustin.agustinynatalia.site/` y, si trae `formulario`, que sea `clinica10` o `innaltech`
  (el cuestionario `levantamiento` no manda `formulario`). Lo demás se descarta sin llegar al servicio
  de levantamiento (Outline, PDF y Telegram). Probado con un POST sin `_meta`: la ejecución terminó en
  el filtro con 0 elementos y el servicio no recibió nada.
- **Ojo al agregar un cuestionario nuevo:** si manda un `formulario` distinto o se sirve desde otro
  dominio, hay que sumarlo en ese nodo o sus envíos se descartan en silencio.
- Pendiente opcional: regla de Rate limiting en Cloudflare para POST a esa ruta (necesita el permiso
  de WAF del punto 2).

## 5. Bot diario de la imagen OG ("Rocky") — aplicado el 11-oct-2026 en `scripts/og_metricas_update.py`, salvo el JPEG

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

- **Google Search Console (pendiente, lo hace Agustin):** se quitó Google Analytics del sitio
  (quedó solo Umami). Si la propiedad estaba verificada con la etiqueta de GA, volver a verificarla
  por DNS en Cloudflare. En la zona ya hay un TXT `google-site-verification` en la raíz del dominio.
- **Privacidad (hecho):** `aviso-privacidad.html` cubre el sitio y los cuestionarios (RGPD por los
  clientes de España); `privacidad.html` sigue siendo la de la herramienta de TikTok.
