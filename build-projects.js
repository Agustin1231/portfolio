// ==========================================
// build-projects.js — genera páginas estáticas de proyectos con SEO real.
// Lee projects-data.js (fuente única) y escribe proyectos/<id>.html con el
// contenido y el JSON-LD ya renderizados en el HTML (no por JS), para que
// Google y los buscadores con IA los indexen sin ejecutar JavaScript.
// Reusa el CSS del shell proyecto.html para conservar el diseño.
// Además mantiene la lista <noscript> de enlaces en proyectos.html y revisa
// que las listas cortas de index.html y proyectos.html no se desfasen de los datos.
// Uso: node build-projects.js   (build-guides.js también lo corre)
// ==========================================
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const BASE = "https://agustin.agustinynatalia.site/";
const ACCENT = "#ff5c35";
const HOUR_USD = 8;
const { FONT_HEAD, MOTION_HEAD } = require("./build-shared.js");

// ---- cargar datos ----
function loadData(file, name) {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), "utf8") + "\n;this.__out = " + name + ";", ctx);
  return ctx.__out;
}
const ALL = loadData("projects-data.js", "PROJECTS_DATA");
const projects = ALL.filter(p => p.visible !== false);

// ---- extraer el bloque <style> del shell para conservar el diseño ----
const shell = fs.readFileSync(path.join(ROOT, "proyecto.html"), "utf8");
const styleMatch = shell.match(/<helmet>[\s\S]*?<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error("build-projects: no encontré el <style> del <helmet> en proyecto.html");
const CSS = styleMatch[1].trim();

// ---- textos de la interfaz (el contenido de cada proyecto está en español) ----
const I18N = {
  es: { navAbout: "sobre-mí", navExp: "experiencia", navWork: "proyectos", navGuides: "guías", navMetrics: "métricas", navContact: "contacto",
    back: "volver a proyectos", backL: "← volver a proyectos", mYear: "Año", mDuration: "Duración", mSaved: "Tiempo ahorrado", mMoney: "Ahorro estimado",
    secMetrics: "En números", secFeatures: "Qué hace", secProcess: "Proceso", secResults: "Resultados", secLearnings: "Aprendizajes", secStack: "Stack técnico",
    secGallery: "Por dentro", zoomIn: "Ampliar captura", secRelated: "Otros proyectos", allProjects: "Ver todos los proyectos →",
    ctaTitle: "¿Tienes un proyecto en mente?", ctaBtn: "Ver mi perfil en Upwork →", ctaMsg: "Contrátame por Upwork con un servicio de precio fijo o mira mi perfil con reseñas.",
    upFrom: "desde", upN: "Automatización con n8n", upW: "Agente de IA para WhatsApp", upA: "Auditoría de procesos", liveDefault: "Ver en vivo ↗",
    prev: "anterior", next: "siguiente", close: "cerrar", theme: "Cambiar tema",
    footerText: "Diseñado y desarrollado por Agustin Peralta" },
  en: { navAbout: "about", navExp: "experience", navWork: "work", navGuides: "guides", navMetrics: "metrics", navContact: "contact",
    back: "back to work", backL: "← back to work", mYear: "Year", mDuration: "Duration", mSaved: "Time saved", mMoney: "Estimated savings",
    secMetrics: "By the numbers", secFeatures: "What it does", secProcess: "Process", secResults: "Results", secLearnings: "Learnings", secStack: "Tech stack",
    secGallery: "Inside the product", zoomIn: "Enlarge screenshot", secRelated: "More projects", allProjects: "View all projects →",
    ctaTitle: "Have a project in mind?", ctaBtn: "View my Upwork profile →", ctaMsg: "Hire me on Upwork with a fixed-price service or check my profile and reviews.",
    upFrom: "from", upN: "n8n workflow automation", upW: "AI agent for WhatsApp", upA: "Process automation audit", liveDefault: "View live ↗",
    prev: "previous", next: "next", close: "close", theme: "Toggle theme",
    footerText: "Designed & built by Agustin Peralta" }
};
const T = I18N.es;

// ---- helpers ----
const esc = s => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");
const attr = s => esc(s);
const tr = (key, tag = "span", cls = "") => `<${tag}${cls ? ` class="${cls}"` : ""} data-i18n="${key}">${esc(T[key])}</${tag}>`;
const abs = src => /^https?:/.test(src) ? src : "/" + String(src).replace(/^\.?\//, "");
const fmtNum = n => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// Tamaño real de la portada JPG (og:image:width/height) leyendo el marcador SOF.
function jpegSize(file) {
  try {
    const d = fs.readFileSync(file);
    let i = 2;
    while (i < d.length) {
      if (d[i] !== 0xff) { i++; continue; }
      const m = d[i + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { w: d.readUInt16BE(i + 7), h: d.readUInt16BE(i + 5) };
      i += 2 + d.readUInt16BE(i + 2);
    }
  } catch (e) {}
  return null;
}

function jsonld(p, url, image) {
  const graph = [];
  const work = {
    "@type": "CreativeWork",
    "name": p.title,
    "headline": p.title,
    "description": p.description || p.subtitle || "",
    "inLanguage": "es",
    "url": url,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "author": { "@type": "Person", "name": "Agustin Peralta", "url": BASE, "@id": BASE + "#person" },
    "creator": { "@id": BASE + "#person" }
  };
  if (image) work.image = image;
  if (p.category) work.genre = p.category;
  if (p.year) work.dateCreated = String(p.year);
  const tech = p.techFull || p.techCard || [];
  if (tech.length) work.keywords = tech.join(", ");
  graph.push(work);
  graph.push({
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Proyectos", "item": BASE + "proyectos" },
      { "@type": "ListItem", "position": 3, "name": p.title, "item": url }
    ]
  });
  // "</" dentro de un <script> cerraría la etiqueta antes de tiempo
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/<\//g, "<\\/");
}

// ---- secciones del cuerpo (mismo markup y clases que el template de proyecto.html) ----
const sec = (head, body) => `\n<section class="dsec"><div class="wrap">${head}${body}</div></section>`;
const headKey = key => `<h2 class="dsech mono" data-i18n="${key}">${esc(T[key])}</h2>`;
const headTxt = txt => `<h2 class="dsech mono">${esc(txt)}</h2>`;

function galleryHtml(p) {
  const gal = p.gallery || [];
  if (!gal.length) return "";
  const g0 = gal[0];
  const thumbs = gal.map((g, i) =>
    `<button type="button" class="gthumb${i === 0 ? " on" : ""}" data-src="${attr(abs(g.src))}" data-title="${attr(g.title || "")}" data-cap="${attr(g.caption || "")}" aria-label="${attr(g.title || "")}"><img src="${attr(abs(g.src))}" alt="${attr(g.title || "")}" loading="lazy" decoding="async"></button>`).join("");
  return sec(headKey("secGallery"),
    `<div class="gstage">` +
    `<div class="gbar"><span class="gdot"></span><span class="gdot"></span><span class="gdot"></span><span class="gttl mono" id="gttl">${esc(g0.title || "")}</span></div>` +
    `<button type="button" class="gshot" id="gshot" aria-label="${attr(T.zoomIn)}" data-i18n-aria="zoomIn"><img id="gimg" src="${attr(abs(g0.src))}" alt="${attr(g0.title || "")}" decoding="async"></button>` +
    `</div>` +
    `<p class="gcap" id="gcap">${esc(g0.caption || "")}</p>` +
    `<div class="gthumbs" id="gthumbs">${thumbs}</div>` +
    (p.galleryNote ? `<div class="gnote mono">${esc(p.galleryNote)}</div>` : ""));
}

function bodyHtml(p) {
  let html = galleryHtml(p);
  if (p.metrics && p.metrics.length) {
    html += sec(headKey("secMetrics"), `<div class="dmetrics">` +
      p.metrics.map(m => `<div class="dmcell"><div class="dmval mono">${esc(m.value)}</div><div class="dmlbl mono">${esc(m.label)}</div></div>`).join("") + `</div>`);
  }
  (p.sections || []).forEach(s => {
    const items = (s.content || []).map(c => `<p class="${c.type === "lead" ? "dlead" : "dp"}">${esc(c.text)}</p>`).join("");
    html += sec(headTxt(s.title), items);
  });
  if (p.features && p.features.length) {
    html += sec(headKey("secFeatures"), `<div class="fgrid">` +
      p.features.map(f => `<div class="fcard"><h4>${esc(f.title)}</h4><p>${esc(f.description)}</p></div>`).join("") + `</div>`);
  }
  if (p.process && p.process.length) {
    html += sec(headKey("secProcess"), `<div class="psteps">` +
      p.process.map(s => `<div class="pstep"><div class="pphase mono">${esc(s.phase)}</div><h4>${esc(s.title)}</h4><p>${esc(s.description)}</p></div>`).join("") + `</div>`);
  }
  if (p.results && p.results.length) {
    html += sec(headKey("secResults"), `<div class="rgrid">` +
      p.results.map(r => `<div><div class="rnum mono">${esc(r.number)}</div><div class="rlbl">${esc(r.label)}</div></div>`).join("") + `</div>`);
  }
  if (p.learnings && p.learnings.length) {
    html += sec(headKey("secLearnings"), `<div class="lgrid">` +
      p.learnings.map(l => `<div class="lcard"><h4>${esc(l.title)}</h4><p>${esc(l.text)}</p></div>`).join("") + `</div>`);
  }
  const tech = p.techFull || p.techCard || [];
  html += sec(headKey("secStack"), `<div class="stackTags">` + tech.map(t => `<span class="tag mono">${esc(t)}</span>`).join("") + `</div>`);
  return html;
}

// ---- otros proyectos: los 3 que más comparten tema y stack, para que ninguno quede huérfano ----
const STOP = new Set("de la el en y a un una que con para por tu tus los las del se no es o al lo mi como sin ia".split(" "));
function tokens(p) {
  const txt = [p.category, p.title].concat(p.techFull || p.techCard || []).join(" ").toLowerCase();
  return new Set(txt.normalize("NFD").replace(/[̀-ͯ]/g, "").split(/[^a-z0-9]+/).filter(w => w.length > 2 && !STOP.has(w)));
}
function relatedHtml(p) {
  const mine = tokens(p);
  const otros = projects.filter(o => o.id !== p.id).map(o => {
    let s = 0; tokens(o).forEach(w => { if (mine.has(w)) s++; });
    return { o, s, y: parseInt(o.year, 10) || 0, n: parseInt(o.number, 10) || 0 };
  }).sort((a, b) => b.s - a.s || b.y - a.y || b.n - a.n).slice(0, 3);
  const items = otros.map(({ o }) =>
    `<li><a href="/proyectos/${attr(o.id)}.html"><span class="relCat mono">${esc(o.category)}</span><span class="relT">${esc(o.title)}</span></a></li>`).join("");
  return sec(headKey("secRelated"), `<ul class="relList">${items}</ul><a class="back mono" href="/proyectos" data-i18n="allProjects">${esc(T.allProjects)}</a>`);
}

const EXTRA_CSS = `
h2.dsech{font-weight:400}
.lbox[hidden]{display:none}
.relList{list-style:none;padding:0;margin:0 0 1.4rem;display:grid;grid-template-columns:repeat(3,1fr);gap:.9rem}
.relList a{display:flex;flex-direction:column;gap:.35rem;height:100%;padding:1.1rem 1.2rem;border:1px solid var(--line);border-radius:12px;background:color-mix(in srgb,var(--panel) 65%,transparent);transition:border-color .2s,transform .2s}
.relList a:hover{border-color:var(--accent);transform:translateY(-2px)}
.relCat{font-size:.72rem;color:var(--accent);text-transform:uppercase;letter-spacing:.04em}
.relT{font-weight:600;line-height:1.35}
@media(max-width:920px){.relList{grid-template-columns:1fr}}
`;

// Script de la página: tema, menú, idioma de la interfaz y galería con visor.
function pageScript() {
  return `<script>
(function(){
  var I18N=${JSON.stringify(I18N)};
  var site=document.querySelector(".site");
  try{if(localStorage.getItem("ap-theme")==="dark")site.classList.remove("light");}catch(e){}
  var tgl=document.getElementById("tgl");
  function icon(){tgl.textContent=site.classList.contains("light")?"\\u263E":"\\u2600";}
  icon();
  tgl.addEventListener("click",function(){
    site.classList.toggle("light");
    try{localStorage.setItem("ap-theme",site.classList.contains("light")?"light":"dark");}catch(e){}
    icon();
  });
  var nav=document.getElementById("nav");
  document.getElementById("burger").addEventListener("click",function(){nav.classList.toggle("open");});
  nav.addEventListener("click",function(e){if(e.target.closest("a"))nav.classList.remove("open");});
  // Idioma de la interfaz: el contenido del proyecto está en español, como en la versión dinámica.
  function setLang(l,save){
    var d=I18N[l]||I18N.es;
    document.querySelectorAll("[data-i18n]").forEach(function(el){var k=el.getAttribute("data-i18n");if(d[k]!=null)el.textContent=d[k];});
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){var k=el.getAttribute("data-i18n-aria");if(d[k]!=null)el.setAttribute("aria-label",d[k]);});
    document.querySelectorAll(".lang button").forEach(function(b){b.classList.toggle("on",b.getAttribute("data-lang")===l);});
    if(save){try{localStorage.setItem("ap-lang",l);}catch(e){}}
  }
  var lang="es";
  try{var s=localStorage.getItem("ap-lang");if(s==="es"||s==="en")lang=s;else{var n=((navigator.languages&&navigator.languages[0])||navigator.language||"es").toLowerCase();lang=n.indexOf("es")===0?"es":"en";}}catch(e){}
  if(lang!=="es")setLang(lang,false);
  document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.getAttribute("data-lang"),true);});});
  // Galería: miniaturas, captura principal y visor a pantalla completa.
  var thumbs=[].slice.call(document.querySelectorAll("#gthumbs .gthumb"));
  if(!thumbs.length)return;
  var cur=0,gimg=document.getElementById("gimg"),gttl=document.getElementById("gttl"),gcap=document.getElementById("gcap");
  var lbox=document.getElementById("lbox"),limg=document.getElementById("limg"),lcap=document.getElementById("lcap");
  function show(i){
    cur=(i+thumbs.length)%thumbs.length;var t=thumbs[cur];
    var src=t.getAttribute("data-src"),ttl=t.getAttribute("data-title"),cap=t.getAttribute("data-cap");
    gimg.src=src;gimg.alt=ttl;gttl.textContent=ttl;gcap.textContent=cap;
    thumbs.forEach(function(b,j){b.classList.toggle("on",j===cur);});
    if(!lbox.hidden){limg.src=src;limg.alt=ttl;lcap.textContent=ttl+" \\u2014 "+cap;}
  }
  function open(){var t=thumbs[cur];limg.src=t.getAttribute("data-src");limg.alt=t.getAttribute("data-title");lcap.textContent=t.getAttribute("data-title")+" \\u2014 "+t.getAttribute("data-cap");lbox.hidden=false;}
  function close(){lbox.hidden=true;}
  thumbs.forEach(function(b,i){b.addEventListener("click",function(){show(i);});});
  document.getElementById("gshot").addEventListener("click",open);
  lbox.addEventListener("click",close);
  document.getElementById("lprev").addEventListener("click",function(e){e.stopPropagation();show(cur-1);});
  document.getElementById("lnext").addEventListener("click",function(e){e.stopPropagation();show(cur+1);});
  document.getElementById("lclose").addEventListener("click",function(e){e.stopPropagation();close();});
  window.addEventListener("keydown",function(e){
    if(lbox.hidden)return;
    if(e.key==="Escape")close();else if(e.key==="ArrowRight")show(cur+1);else if(e.key==="ArrowLeft")show(cur-1);
  });
})();
</script>`;
}

function page(p) {
  const url = BASE + "proyectos/" + p.id + ".html";
  const fullTitle = p.title + " — Agustin Peralta";
  // Lo que ve Google en resultados: los títulos largos van solos para que no se corten.
  const seoTitle = p.seoTitle || (p.title.length <= 42 ? p.title + " | Agustin Peralta" : p.title);
  const desc = p.subtitle || p.description || "";
  const seoDesc = p.seoDescription || desc;
  const tech = p.techFull || p.techCard || [];
  const keywords = tech.concat([p.category]).filter(Boolean).join(", ");
  const cover = p.image ? abs(p.image) : "";
  const coverUrl = cover ? BASE + cover.slice(1) : BASE + "og-image.png";
  const size = cover ? jpegSize(path.join(ROOT, cover.slice(1))) : null;
  const hasSaved = typeof p.hoursSaved === "number" && p.hoursSaved > 0;
  const saved = hasSaved
    ? `<div><div class="k mono" data-i18n="mSaved">${esc(T.mSaved)}</div><div class="v">${fmtNum(p.hoursSaved)} h</div></div>` +
      `<div><div class="k mono" data-i18n="mMoney">${esc(T.mMoney)}</div><div class="v vacc">$${fmtNum(p.hoursSaved * HOUR_USD)} USD</div></div>`
    : "";
  const live = p.liveUrl
    ? `\n<a class="btn btnP" href="${attr(p.liveUrl)}" target="_blank" rel="noopener"${p.liveLabel ? "" : ' data-i18n="liveDefault"'}>${p.liveLabel ? esc(p.liveLabel) + " ↗" : esc(T.liveDefault)}</a>`
    : "";
  const lightbox = (p.gallery && p.gallery.length) ? `
<div class="lbox" id="lbox" hidden>
<button type="button" class="lbtn lprev" id="lprev" aria-label="${attr(T.prev)}" data-i18n-aria="prev">←</button>
<img id="limg" alt="">
<button type="button" class="lbtn lnext" id="lnext" aria-label="${attr(T.next)}" data-i18n-aria="next">→</button>
<button type="button" class="lbtn lclose" id="lclose" aria-label="${attr(T.close)}" data-i18n-aria="close">✕</button>
<div class="lcap" id="lcap"></div>
</div>` : "";
  const up = (href, key, price) => `<a class="upSvc" href="${href}" target="_blank" rel="noopener" data-umami-event="upwork-servicio-proyecto">${tr(key)}<b>${tr("upFrom")} ${price}</b></a>`;
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(seoTitle)}</title>
<meta name="description" content="${attr(seoDesc)}">
<meta name="keywords" content="${attr(keywords)}">
<meta name="author" content="Agustin Peralta">
<link rel="canonical" href="${attr(url)}">
<link rel="alternate" hreflang="es" href="${attr(url)}">
<meta property="og:type" content="article">
<meta property="og:title" content="${attr(fullTitle)}">
<meta property="og:description" content="${attr(desc)}">
<meta property="og:url" content="${attr(url)}">
<meta property="og:image" content="${attr(coverUrl)}">${size ? `
<meta property="og:image:width" content="${size.w}">
<meta property="og:image:height" content="${size.h}">` : ""}${p.imageCaption ? `
<meta property="og:image:alt" content="${attr(p.imageCaption)}">` : ""}
<meta property="og:site_name" content="Agustin Peralta">
<meta property="og:locale" content="es_CO">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(fullTitle)}">
<meta name="twitter:description" content="${attr(desc)}">
<meta name="twitter:image" content="${attr(coverUrl)}">
<meta name="theme-color" content="#f1efe9">
<script>try{if(localStorage.getItem("ap-theme")==="dark")document.documentElement.style.background="#0b0b0d"}catch(e){}</script>
${FONT_HEAD}
<script type="application/ld+json">${jsonld(p, url, cover ? coverUrl : null)}</script>
<script defer src="https://umami.agustinynatalia.site/script.js" data-website-id="1edc5673-c0ea-4380-9e9a-1c5dce95f938"></script>
<style>
${CSS}
${EXTRA_CSS}
</style>
${MOTION_HEAD}
</head>
<body>
<div class="site light" id="top" style="--accent:${ACCENT};--accent-soft:rgba(255,92,53,0.13)">
<nav class="nav"><div class="wrap navbar">
<a class="brand" href="/">agustin.peralta<span class="curs">▮</span></a>
<ul class="navlinks" id="nav">
<li><a href="/#sobre" data-i18n="navAbout">${esc(T.navAbout)}</a></li>
<li><a href="/#experiencia" data-i18n="navExp">${esc(T.navExp)}</a></li>
<li><a href="/#proyectos" data-i18n="navWork">${esc(T.navWork)}</a></li>
<li><a href="/#guias" data-i18n="navGuides">${esc(T.navGuides)}</a></li>
<li><a href="/metricas" data-i18n="navMetrics">${esc(T.navMetrics)}</a></li>
<li><a href="/#contacto" data-i18n="navContact">${esc(T.navContact)}</a></li>
</ul>
<div class="navtools">
<div class="lang mono"><button type="button" class="on" data-lang="es">ES</button><button type="button" data-lang="en">EN</button></div>
<button type="button" class="tgl" id="tgl" aria-label="${attr(T.theme)}" data-i18n-aria="theme">☾</button>
<button type="button" class="burger" id="burger" aria-label="menu"><span></span><span></span><span></span></button>
</div>
</div></nav>

<header class="dhero"><div class="wrap">
<a class="back mono" href="/proyectos" data-i18n="backL">${esc(T.backL)}</a>
<div class="dcat mono">${esc(p.category)}</div>
<h1 class="dtitle">${esc(p.title)}</h1>
<p class="dsub">${esc(p.subtitle)}</p>
<div class="dmeta">
<div><div class="k mono" data-i18n="mYear">${esc(T.mYear)}</div><div class="v">${esc(p.year)}</div></div>
<div><div class="k mono" data-i18n="mDuration">${esc(T.mDuration)}</div><div class="v">${esc(p.duration || "—")}</div></div>
${saved}
</div>${live}
</div></header>
${bodyHtml(p)}${relatedHtml(p)}
<section class="dsec"><div class="wrap"><div class="dcta"><h3 data-i18n="ctaTitle">${esc(T.ctaTitle)}</h3><p class="dctaP" data-i18n="ctaMsg">${esc(T.ctaMsg)}</p><div class="upSvcs">${
  up("https://www.upwork.com/services/product/development-it-an-n8n-workflow-automation-for-your-crm-forms-email-and-sheets-2104901857369884325", "upN", "$190")}${
  up("https://www.upwork.com/services/product/development-it-an-ai-whatsapp-agent-for-customer-service-with-the-official-cloud-api-2104903909913353811", "upW", "$460")}${
  up("https://www.upwork.com/services/product/consulting-hr-a-business-process-automation-audit-with-a-prioritized-action-plan-2104904529895557158", "upA", "$115")
}</div><div class="dctaRow"><a class="btn btnP" href="https://www.upwork.com/freelancers/agustinperalta" target="_blank" rel="noopener" data-umami-event="upwork-proyecto" data-i18n="ctaBtn">${esc(T.ctaBtn)}</a><a class="btn btnO" href="/proyectos" data-i18n="back">${esc(T.back)}</a></div></div></div></section>
${lightbox}
<footer class="footer"><div class="wrap footIn">
<span data-i18n="footerText">${esc(T.footerText)}</span>
<span class="y">© 2026 · <span class="acc">Bogotá</span></span>
</div></footer>
</div>
${pageScript()}
<script defer src="/upwork-pop.js?v=20261014"></script>
</body>
</html>
`;
}

// ---- índice para quien no ejecuta JavaScript: lista de enlaces dentro de proyectos.html ----
function noscriptList() {
  const items = projects.slice()
    .sort((a, b) => (parseInt(b.year, 10) || 0) - (parseInt(a.year, 10) || 0) || (parseInt(a.number, 10) || 0) - (parseInt(b.number, 10) || 0))
    .map(p => `<li><a href="/proyectos/${attr(p.id)}.html">${esc(p.title)}</a> — ${esc(p.subtitle || "")}</li>`).join("\n");
  return `<noscript><nav aria-label="Proyectos"><h2>Proyectos</h2><ul>\n${items}\n</ul></nav></noscript>`;
}
function updateNoscript() {
  const file = path.join(ROOT, "proyectos.html");
  const html = fs.readFileSync(file, "utf8");
  const re = /<!-- proyectos-estaticos -->[\s\S]*?<!-- \/proyectos-estaticos -->/;
  if (!re.test(html)) { console.warn("aviso: proyectos.html no tiene los marcadores <!-- proyectos-estaticos -->; no actualicé la lista"); return; }
  const next = html.replace(re, `<!-- proyectos-estaticos -->\n${noscriptList()}\n<!-- /proyectos-estaticos -->`);
  if (next !== html) { fs.writeFileSync(file, next); console.log("actualizada la lista <noscript> de proyectos.html"); }
}

// ---- control de desfase: las listas cortas de index.html y proyectos.html copian datos de projects-data.js ----
function inlineList(file) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const i = src.indexOf("  PROJECTS = [");
  if (i < 0) return null;
  let d = 0;
  const j = src.indexOf("[", i);
  for (let k = j; k < src.length; k++) {
    if (src[k] === "[") d++;
    else if (src[k] === "]" && --d === 0) return vm.runInNewContext("(" + src.slice(j, k + 1) + ")");
  }
  return null;
}
function checkDrift() {
  const byId = new Map(ALL.map(p => [p.id, p]));
  const base = s => String(s || "").replace(/^.*\//, "").replace(/\.[a-z0-9]+$/i, "");
  let warnings = 0;
  ["index.html", "proyectos.html"].forEach(file => {
    const list = inlineList(file);
    if (!list) { console.warn("aviso: no encontré PROJECTS en " + file); warnings++; return; }
    list.forEach(q => {
      const p = byId.get(q.id);
      if (!p) { console.warn(`aviso: ${file} lista "${q.id}", que no existe en projects-data.js`); warnings++; return; }
      if (base(q.img) !== base(p.image)) { console.warn(`aviso: ${file} "${q.id}" usa la imagen ${q.img} y los datos ${p.image}`); warnings++; }
      if ((q.hoursSaved || 0) !== (p.hoursSaved || 0)) { console.warn(`aviso: ${file} "${q.id}" tiene ${q.hoursSaved || 0} h ahorradas y los datos ${p.hoursSaved || 0}`); warnings++; }
      if (String(q.year) !== String(p.year)) { console.warn(`aviso: ${file} "${q.id}" dice año ${q.year} y los datos ${p.year}`); warnings++; }
    });
  });
  const listed = new Set((inlineList("proyectos.html") || []).map(q => q.id));
  projects.forEach(p => { if (!listed.has(p.id)) { console.warn(`aviso: "${p.id}" está en projects-data.js pero no aparece en proyectos.html`); warnings++; } });
  return warnings;
}

function build() {
  const outDir = path.join(ROOT, "proyectos");
  fs.mkdirSync(outDir, { recursive: true });
  const keep = new Set(projects.map(p => p.id + ".html"));
  projects.forEach(p => {
    const file = path.join(outDir, p.id + ".html");
    const html = page(p);
    let prev = null;
    try { prev = fs.readFileSync(file, "utf8"); } catch (e) {}
    if (prev !== html) { fs.writeFileSync(file, html); console.log("escrita proyectos/" + p.id + ".html"); }
  });
  // Páginas de proyectos que ya no están en los datos (o se ocultaron)
  fs.readdirSync(outDir).filter(f => f.endsWith(".html") && !keep.has(f)).forEach(f => {
    fs.unlinkSync(path.join(outDir, f));
    console.log("borrada proyectos/" + f + " (ya no está visible en projects-data.js)");
  });
  updateNoscript();
  const w = checkDrift();
  console.log(projects.length + " proyectos" + (w ? " · " + w + " avisos de desfase" : " · listas de index.html y proyectos.html en orden"));
  return projects;
}

module.exports = { build, projects };
if (require.main === module) build();
