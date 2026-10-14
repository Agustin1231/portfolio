// Piezas compartidas por los scripts de build (build-guides.js y build-projects.js).
// Las fuentes se sirven desde /fonts (Space Grotesk y JetBrains Mono, variables, subconjuntos
// latin y latin-ext bajados de Google Fonts, licencia OFL en fonts/). Las páginas hechas a mano
// (index.html, proyectos.html, ...) llevan este mismo bloque en el <head>.
const FONT_FACES = "@font-face{font-family:'JetBrains Mono';font-style:normal;font-weight:400 700;font-display:swap;src:url(/fonts/jetbrains-mono-v24-latin-ext.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'JetBrains Mono';font-style:normal;font-weight:400 700;font-display:swap;src:url(/fonts/jetbrains-mono-v24-latin.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:400 700;font-display:swap;src:url(/fonts/space-grotesk-v22-latin-ext.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:400 700;font-display:swap;src:url(/fonts/space-grotesk-v22-latin.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}";

const FONT_HEAD = `<link rel="preload" href="/fonts/space-grotesk-v22-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/jetbrains-mono-v24-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>${FONT_FACES}</style>`;

// Microinteracciones de todo el sitio (motion.js marca los elementos antes de que se pinten, por eso
// va sin defer). Las páginas hechas a mano llevan esta misma línea en el <head>.
const MOTION_HEAD = `<link rel="stylesheet" href="/motion.css?v=20261014"><script src="/motion.js?v=20261014"></script>`;

module.exports = { FONT_FACES, FONT_HEAD, MOTION_HEAD };
