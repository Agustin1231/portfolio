// ==========================================
// build-guides.js — genera páginas estáticas de guías con SEO real.
// Lee guides-data.js (fuente única) y escribe guias/<id>.html con el
// contenido y el JSON-LD ya renderizados en el HTML (no por JS), para que
// Google y los buscadores con IA lo indexen sin ejecutar JavaScript.
// Reusa el CSS del shell Guia.dc.html para conservar el diseño.
// Uso: node build-guides.js   (regenera todas las guías + sitemap.xml)
// ==========================================
const fs = require("fs");
const path = require("path");

const BASE = "https://agustin.agustinynatalia.site/";
const OG = BASE + "og-image.png";
const ACCENT = "#ff5c35";
const MONTHS = { enero:"01", febrero:"02", marzo:"03", abril:"04", mayo:"05", junio:"06", julio:"07", agosto:"08", septiembre:"09", octubre:"10", noviembre:"11", diciembre:"12" };

// ---- cargar datos ----
eval(fs.readFileSync(path.join(__dirname, "guides-data.js"), "utf8"));
const guides = GUIDES_DATA.filter(g => g.visible && !g.externalUrl);

// ---- extraer el bloque <style> del shell para conservar el diseño ----
const shell = fs.readFileSync(path.join(__dirname, "guia.html"), "utf8");
const styleMatch = shell.match(/<helmet>[\s\S]*?<style>([\s\S]*?)<\/style>/);
const CSS = styleMatch ? styleMatch[1].trim() : "";

// ---- helpers ----
const esc = s => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");
const attr = s => esc(s);

function isoDate(date) {
  if (!date) return null;
  const m = String(date).toLowerCase().match(/([a-záéíóú]+)\s+(\d{4})/);
  if (m && MONTHS[m[1]]) return m[2] + "-" + MONTHS[m[1]] + "-01";
  return null;
}

function jsonld(g, url, published) {
  const graph = [];
  const blog = {
    "@type": "BlogPosting",
    "headline": g.title,
    "description": g.description || g.subtitle || "",
    "inLanguage": "es",
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "url": url,
    "author": { "@type": "Person", "name": "Agustin Peralta", "url": BASE, "@id": BASE + "#person" },
    "publisher": { "@type": "Person", "name": "Agustin Peralta", "@id": BASE + "#person" },
    "image": g.image ? (g.image.startsWith("http") ? g.image : BASE + g.image) : OG
  };
  if (g.category) blog.articleSection = g.category;
  if (Array.isArray(g.tools) && g.tools.length) blog.keywords = g.tools.join(", ");
  if (published) { blog.datePublished = published; blog.dateModified = published; }
  graph.push(blog);
  graph.push({
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Guías", "item": BASE + "index.html#guias" },
      { "@type": "ListItem", "position": 3, "name": g.title, "item": url }
    ]
  });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

function sectionsHtml(g) {
  let html = "";
  (g.sections || []).forEach(s => {
    let items = "";
    (s.content || []).forEach(c => {
      const cls = c.type === "lead" ? "dlead" : "dp";
      items += `\n<p class="${cls}">${esc(c.text)}</p>`;
    });
    html += `\n<section class="dsec"><div class="rd"><div class="dsech mono">${esc(s.title)}</div>${items}\n</div></section>`;
  });
  if (g.requirements && g.requirements.length) {
    const lis = g.requirements.map(r => `<li>${esc(r)}</li>`).join("");
    html += `\n<section class="dsec"><div class="rd"><div class="dsech mono">Requisitos</div><ul class="reqlist">${lis}</ul></div></section>`;
  }
  const hasPros = (g.pros && g.pros.length) || (g.cons && g.cons.length);
  if (hasPros) {
    const pros = (g.pros || []).map(p => `<li><span class="mk">+</span><span>${esc(p)}</span></li>`).join("");
    const cons = (g.cons || []).map(c => `<li><span class="mk">−</span><span>${esc(c)}</span></li>`).join("");
    html += `\n<section class="dsec"><div class="rd"><div class="dsech mono">Pros y contras</div><div class="pcgrid">` +
      `<div class="pccard pros"><h4>A favor</h4><ul class="pclist">${pros}</ul></div>` +
      `<div class="pccard cons"><h4>En contra</h4><ul class="pclist">${cons}</ul></div>` +
      `</div></div></section>`;
  }
  if (g.tools && g.tools.length) {
    const tags = g.tools.map(t => `<span class="tag mono">${esc(t)}</span>`).join("");
    html += `\n<section class="dsec"><div class="rd"><div class="dsech mono">Herramientas</div><div class="stackTags">${tags}</div></div></section>`;
  }
  return html;
}

function page(g) {
  const url = BASE + "guias/" + g.id + ".html";
  const title = g.title + " — Agustin Peralta";
  const desc = g.description || g.subtitle || "";
  const published = isoDate(g.date);
  const keywords = (g.tools || []).concat([g.category]).filter(Boolean).join(", ");
  const dl = g.downloadFile
    ? `\n<div class="dllink"><a class="btn btnO" href="../${attr(g.downloadFile)}" download>↓ ${esc(g.downloadLabel || "Descargar guía")}</a></div>`
    : "";
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${attr(desc)}">
<meta name="keywords" content="${attr(keywords)}">
<meta name="author" content="Agustin Peralta">
<link rel="canonical" href="${attr(url)}">
<link rel="alternate" hreflang="es" href="${attr(url)}">
<meta property="og:type" content="article">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(desc)}">
<meta property="og:url" content="${attr(url)}">
<meta property="og:image" content="${OG}">
<meta property="og:site_name" content="Agustin Peralta">
<meta property="og:locale" content="es_CO">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(title)}">
<meta name="twitter:description" content="${attr(desc)}">
<meta name="twitter:image" content="${OG}">
<meta name="theme-color" content="#f1efe9">
<script>try{if(localStorage.getItem("ap-theme")==="dark")document.documentElement.style.background="#0b0b0d"}catch(e){}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">${jsonld(g, url, published)}</script>
<script defer src="https://umami.agustinynatalia.site/script.js" data-website-id="1edc5673-c0ea-4380-9e9a-1c5dce95f938"></script>
<style>
${CSS}
</style>
</head>
<body>
<div class="site light" id="top" style="--accent:${ACCENT}">
<nav class="nav"><div class="wrap navbar">
<a class="brand" href="../index.html">agustin.peralta<span class="curs">▮</span></a>
<ul class="navlinks" id="nav">
<li><a href="../index.html#sobre">sobre-mí</a></li>
<li><a href="../index.html#experiencia">experiencia</a></li>
<li><a href="../index.html#proyectos">proyectos</a></li>
<li><a class="on" href="../index.html#guias">guías</a></li>
<li><a href="/metricas">métricas</a></li>
<li><a href="../index.html#contacto">contacto</a></li>
</ul>
<div class="navtools">
<button class="tgl" id="tgl" aria-label="Cambiar tema">☾</button>
<button class="burger" id="burger" aria-label="menu"><span></span><span></span><span></span></button>
</div>
</div></nav>

<header class="dhero"><div class="rd">
<a class="back mono" href="../index.html#guias">← volver a guías</a>
<div class="dcat mono">${esc(g.category)}</div>
<h1 class="dtitle">${esc(g.title)}</h1>
<p class="dsub">${esc(g.subtitle)}</p>
<div class="dmeta">
<div><div class="k mono">Publicado</div><div class="v">${esc(g.date || "—")}</div></div>
<div><div class="k mono">Lectura</div><div class="v">${esc(g.readingTime || "—")}</div></div>
</div>${dl}
</div></header>
${sectionsHtml(g)}
<section class="dsec"><div class="rd"><div class="dcta"><h3>¿Te sirvió esta guía?</h3><div class="dctaRow"><a class="btn btnP" href="../index.html#contacto">Hablemos →</a><a class="btn btnO" href="../index.html#guias">volver a guías</a></div></div></div></section>

<footer class="footer"><div class="wrap footIn">
<span>Diseñado y desarrollado por Agustin Peralta</span>
<span class="y">© 2026 · <span class="acc">Bogotá</span></span>
</div></footer>
</div>
<script>
(function(){
  var site=document.querySelector(".site");
  try{if(localStorage.getItem("ap-theme")==="dark")site.classList.remove("light");}catch(e){}
  var tgl=document.getElementById("tgl");
  function icon(){tgl.textContent=site.classList.contains("light")?"☾":"☀";}
  icon();
  tgl.addEventListener("click",function(){
    site.classList.toggle("light");
    try{localStorage.setItem("ap-theme",site.classList.contains("light")?"light":"dark");}catch(e){}
    icon();
  });
  document.getElementById("burger").addEventListener("click",function(){
    document.getElementById("nav").classList.toggle("open");
  });
})();
</script>
</body>
</html>
`;
}

// ---- generar ----
const outDir = path.join(__dirname, "guias");
fs.mkdirSync(outDir, { recursive: true });
guides.forEach(g => {
  fs.writeFileSync(path.join(outDir, g.id + ".html"), page(g));
  console.log("escrita guias/" + g.id + ".html");
});

// ---- regenerar sitemap.xml ----
const today = new Date().toISOString().slice(0, 10);
const staticUrls = [
  { loc: BASE, changefreq: "weekly", priority: "1.0", lastmod: today },
  { loc: BASE + "proyectos", changefreq: "weekly", priority: "0.8", lastmod: today },
  { loc: BASE + "metricas", changefreq: "daily", priority: "0.6", lastmod: today }
];
const guideUrls = guides.map(g => ({
  loc: BASE + "guias/" + g.id + ".html", changefreq: "monthly", priority: "0.9",
  lastmod: isoDate(g.date) || today
}));
const tailUrls = [
  { loc: BASE + "privacidad.html", changefreq: "yearly", priority: "0.2", lastmod: today },
  { loc: BASE + "terminos.html", changefreq: "yearly", priority: "0.2", lastmod: today }
];
const all = staticUrls.concat(guideUrls, tailUrls);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap);
console.log("sitemap.xml regenerado con " + all.length + " URLs");
