# Portfolio — Agustin Peralta Guarin

Sitio web personal — live en https://agustin.agustinynatalia.site

## Features

- Sitio estático: se sirve tal cual desde el repo. Las guías y los proyectos tienen además páginas
  estáticas generadas con `node build-guides.js`, para que se indexen sin ejecutar JavaScript
- Páginas `.dc.html`: template `<x-dc>` + componente React renderizado en cliente por `support.js`
- React/ReactDOM y las fuentes (Space Grotesk y JetBrains Mono) self-hosteados, sin CDN
- Modo oscuro y multi-idioma (ES / EN) con persistencia en `localStorage`
- Datos de proyectos y guías como fuente única editable (`projects-data.js`, `guides-data.js`)
- Métricas en vivo vía webhook de n8n, servidas por nginx desde una copia en `/api/metricas` que se
  renueva cada 10 minutos; analytics con Umami
- Microinteracciones en todo el sitio (títulos palabra por palabra, textos mono que se escriben,
  entradas en cascada, transición entre páginas) y fondos animados dibujados en un Worker

## Estructura

```
index.html              landing (página canónica, /)
proyectos.html          todos los proyectos agrupados por año (/proyectos)
proyectos/<id>.html     página estática de cada proyecto (generada, no editar a mano)
guias/<id>.html         página estática de cada guía + guias/index.html (generadas)
proyecto.html           versión dinámica del detalle; /proyecto?id=x redirige a proyectos/x.html
                        (con &preview=1 se ve la dinámica, sirve para revisar antes de publicar)
guia.html               ídem para guías; además build-guides.js toma de aquí el CSS
metricas.html           métricas en vivo (/metricas, webhook n8n)
*.dc.html               stubs de redirect de las URLs viejas (301 reales con deploy/nginx.conf)
404.html                página de error propia
privacidad.html         política de privacidad (de la herramienta de TikTok)
terminos.html           términos de servicio
projects-data.js        datos de proyectos (array PROJECTS_DATA, fuente única)
guides-data.js          datos de guías (array GUIDES_DATA, fuente única)
build-guides.js         genera guías, proyectos (vía build-projects.js) y sitemap.xml
build-projects.js       genera proyectos/<id>.html y la lista <noscript> de proyectos.html
build-shared.js         piezas comunes de los builds (bloques de fuentes y de motion del <head>)
motion.js, motion.css   microinteracciones de todo el sitio; van en el <head> de cada página
fondo.js                arranca los fondos animados (.bg3d y el ASCII del inicio) en un Worker
fondo-worker.js         el dibujo de esos fondos, sobre OffscreenCanvas
vitrina.js, vitrina.css "Trabajo seleccionado" de la portada (casos apilados); datos en vitrina-data.js
upwork-pop.js           aviso de Upwork al 20 % de lectura
support.js              runtime dc (generado y minificado — no editar a mano)
vendor/                 React 18.3.1 + ReactDOM UMD, con la versión en el nombre
fonts/                  woff2 variables (latin y latin-ext) + licencias OFL
scripts/                utilidades (optimize-images.py)
deploy/                 nginx.conf para Coolify y notas de servicios externos
```

## Agregar o editar contenido

1. Editar `projects-data.js` / `guides-data.js`. Los proyectos además tienen una ficha corta en
   `PROJECTS` de `proyectos.html` (y de `index.html` si van en la portada), con el título en inglés.
2. Imágenes nuevas: guardarlas en `img/proyectos/` (portada en `.jpg`, galería en
   `img/proyectos/galeria/<proyecto>/`) y correr `python3 scripts/optimize-images.py`, que las pasa
   a WebP. La portada `.jpg` se queda: es la imagen para redes de la página del proyecto.
   Las tarjetas usan la `.webp`.
3. `node build-guides.js` regenera guías, proyectos y sitemap. Avisa si las fichas de `index.html` o
   `proyectos.html` no coinciden con `projects-data.js` (imagen, año, horas) o si falta alguna.
4. Push a main → Coolify redespliega.

## Notas

- `support.js` está minificado; se genera desde `dc-runtime/src/*.ts` (fuera de este repo).
- El `<head>` de cada página carga `vendor/react*-18.3.1*.js` + `support.js` con `defer`; el
  runtime detecta `window.React` y no lo vuelve a pedir a unpkg. Si se actualiza React, el archivo
  nuevo lleva otro nombre: nginx los cachea un año como inmutables.
- Las fuentes se declaran con el mismo bloque en todas las páginas (`FONT_HEAD` de `build-shared.js`);
  las páginas hechas a mano lo llevan copiado en el `<head>`. Lo mismo con `MOTION_HEAD`
  (motion.css + motion.js, sin `defer`: marca los elementos antes de que se pinten).
- Rendimiento: las animaciones de entrada tienen que terminar (motion.js les pone `data-mx-fin` y les
  saca la animación); si quedan "llenando" su último cuadro, cada elemento sigue siendo una capa que
  el navegador actualiza en cada cuadro. En el scroll no se mide el diseño a mano: el scroll se lee
  una vez por cuadro (`window.mxScroll`) y los altos se guardan con ResizeObserver.
- Cloudflare guarda 4 h en el navegador los `.js` y `.css` (ver `deploy/README.md`), por eso los
  archivos propios van con `?v=AAAAMMDD` en el `src`/`href`. Al cambiar uno, subir la versión en las
  páginas (y en `build-shared.js`/`build-*.js` si es de las generadas, y correr el build). El Worker
  se pide desde `fondo.js` con su propio `?v=`.
- URLs limpias (`/proyectos`, `/metricas`, ...): dependen del `try_files $uri $uri.html ...` de nginx.
  `deploy/nginx.conf` es la config completa para pegar en Coolify; `deploy/README.md` explica eso y
  los ajustes de Cloudflare, n8n y el bot de la imagen OG.
- Los fondos animados (`.bg3d` y el ASCII del inicio) corren a ~30 fps, avanzan por tiempo real y
  con "reducir movimiento" del sistema muestran un solo cuadro quieto.
