# Portfolio — Agustin Peralta Guarin

Sitio web personal — live en https://agustin.agustinynatalia.site

## Features

- Sitio estático sin build step — se sirve tal cual desde el repo
- Páginas `.dc.html`: template `<x-dc>` + componente React renderizado en cliente por `support.js`
- React/ReactDOM self-hosteados en `vendor/` (sin dependencia de CDN, con SRI)
- Modo oscuro y multi-idioma (ES / EN) con persistencia en `localStorage`
- Datos de proyectos y guías como fuente única editable (`projects-data.js`, `guides-data.js`)
- Métricas en vivo vía webhook de n8n; analytics con Umami

## Estructura

```
index.html              landing (página canónica, /)
proyectos.html          todos los proyectos agrupados por año (/proyectos)
proyecto.html           detalle de proyecto (/proyecto?id=..., datos de projects-data.js)
guia.html               detalle de guía (/guia?id=..., datos de guides-data.js)
metricas.html           métricas en vivo (/metricas, webhook n8n)
*.dc.html               stubs de redirect 301 de las URLs viejas a las limpias
privacidad.html         política de privacidad
terminos.html           términos de servicio
projects-data.js        datos de proyectos (array PROJECTS_DATA, fuente única)
guides-data.js          datos de guías (array GUIDES_DATA, fuente única)
support.js              runtime dc (generado y minificado — no editar a mano)
vendor/                 React 18.3.1 + ReactDOM UMD (self-hosted, pineados)
```

## Notas

- `support.js` está minificado; se genera desde `dc-runtime/src/*.ts` (fuera de este repo).
- El `<head>` real de cada página lleva title/meta/preconnects y carga `vendor/react*.js`
  + `support.js` con `defer`; el runtime detecta `window.React` y no vuelve a pedirlo a unpkg.
- Para publicar cambios de contenido: editar `projects-data.js` / `guides-data.js`, push a main y redeploy en Coolify.
- URLs limpias (`/proyectos`, `/metricas`, ...): dependen del `try_files $uri $uri.html ...` del nginx de Coolify, que sirve `proyectos.html` en `/proyectos`. Los `*.dc.html` viejos quedan como stubs de redirect para no perder SEO.
