# Portfolio — Agustin Peralta Guarin

Sitio web personal — live en https://agustin.agustinynatalia.site

## Features

- HTML / CSS / JavaScript vanilla — zero build step
- Modo oscuro con persistencia en `localStorage`
- Multi-idioma (ES / EN) vía `translate.js`
- Renderizado dinámico de proyectos desde `projects-data.js`
- Email obfuscation para evitar scraping de bots

## Stack

- HTML5 / CSS3 / JavaScript (sin frameworks)
- Apache (`.htaccess` para rewrites y redirecciones)

## Estructura

```
index.html              landing
proyecto.html           template detalle de proyecto
projects-data.js        datos de proyectos (array PROJECTS_DATA, fuente única)
project-renderer.js     render dinámico de cards y detalle
style.css               tema base
dark-mode.css           tema oscuro
dark-mode.js            toggle persistente
translate.js            switcher i18n
email-decode.js         obfuscation de correo
```
