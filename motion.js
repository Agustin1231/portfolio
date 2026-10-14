/* Microinteracciones de todo el sitio: los títulos entran palabra por palabra, los textos mono se
   escriben, los párrafos y las tarjetas suben de a uno, las imágenes se descubren, las cifras de
   los proyectos cuentan desde cero y las páginas se funden entre sí al navegar (View Transitions,
   en motion.css). Va en el <head> de cada página, sin defer: marca los elementos apenas aparecen
   en el DOM (los del HTML y los que pinta React), antes de que se vean, así nada aparece y después
   se esconde. Con movimiento reducido no hace nada. Las vitrinas de la portada (.vt) tienen su
   propio movimiento y quedan fuera. */
(function () {
  var d = document, html = d.documentElement;
  if (!('IntersectionObserver' in window) || !('MutationObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  html.classList.add('mx');

  // Qué le pasa a cada elemento; gana la primera regla que coincide.
  var REGLAS = [
    ['palabras', '.heroName,.heroRole,.sectitle,.dtitle,.ptitle,.mtitle,.certModalTitle,.yearNum,main>h1,.band h1'],
    ['escribe', '.heroHi,.eyebrow,.dcat,.meyebrow,.dsech,.skHead,.certsHead,main>.k'],
    ['img', '.pCardImg,.certImg,.gstage'],
    ['grupo', '.heroCtas,.socials,.stackTags,.telemetry,.certGrid,.guideGrid,.cMethods,.upSvcs,.filterBar,.pGrid,.statgrid,.mpanels,' +
      '.dmeta,.dmetrics,.fgrid,.psteps,.rgrid,.lgrid,.relList,.hubList,.pcgrid,.pclist,.reqlist,.dctaRow,.footIn,main>.row'],
    // Párrafos de lectura (proyectos, guías, legales): entrada corta, para no frenar a quien lee rápido.
    ['lee', '.dp,.dlead,main>p,main>ul'],
    // Bloques grandes: suben sin desenfoque (desenfocar un área grande le cuesta mucho al compositor).
    ['bloque', '.panel,.expRow,.contactGrid>div,.moreWrap,.rtable,.certModalBox'],
    ['sube', '.status,.heroDesc,.secsub,.lead,.aboutP,.back,.dsub,.psub,.mintro,.mupdated,.mstate,' +
      '.dcta>h2,.dcta>h3,.dcta>p,.yearCount,main>h2,.band .sub']
  ];
  var TODO = REGLAS.map(function (r) { return r[1]; }).join(',');
  var FUERA = '.vt,.vtG-salida,.mx-copia,.nav';
  var PASO = 85, PASO_HIJO = 70, TOPE = 9;
  // En las páginas de React (.dc) el texto lo maneja React; en las estáticas se puede reescribir.
  var esReact = function () { return !!d.querySelector('script[data-dc-script]'); };

  // Llegada desde la salida de una tarjeta de la portada (vitrina G): el encabezado ya se vio armado,
  // así que no se vuelve a animar.
  var llegada = false;
  try { llegada = sessionStorage.getItem('mx-llegada') === location.pathname; sessionStorage.removeItem('mx-llegada'); } catch (e) {}
  var YA_VISTO = '.dhero .back,.dhero .dcat,.dhero .dtitle,.dhero .dsub';

  var io = new IntersectionObserver(function (es) {
    var nuevos = es.filter(function (e) { return e.isIntersecting && !e.target.hasAttribute('data-mx-on'); }).map(function (e) { return e.target; });
    nuevos.sort(function (a, b) { return a.compareDocumentPosition(b) & 4 ? -1 : 1; });
    nuevos.forEach(function (el, k) { io.unobserve(el); revelar(el, Math.min(k, TOPE) * PASO); });
  }, { rootMargin: '0px 0px -8% 0px' });
  var pendientes = [];

  // Lo que ya se vigila va aparte de los atributos: el runtime de las páginas .dc clona nodos de su
  // plantilla y los clones copian los atributos. La plantilla cruda (<x-dc>) no se toca.
  var vistos = new WeakSet();
  function marcar(el, tipo) {
    if (vistos.has(el) || el.closest(FUERA) || el.closest('x-dc')) return;
    if (/\{\{/.test(el.textContent)) return;
    vistos.add(el);
    el.setAttribute('data-mx', tipo);
    io.observe(el);
    pendientes.push(el);
  }
  function tipoDe(el) {
    for (var i = 0; i < REGLAS.length; i++) if (el.matches(REGLAS[i][1])) return REGLAS[i][0];
    return null;
  }
  function revisar(raiz) {
    if (raiz.nodeType !== 1) return;
    // Hijo nuevo de un grupo que ya entró (React agregó o cambió tarjetas): entra solo.
    var p = raiz.parentElement;
    if (p && p.getAttribute('data-mx') === 'grupo' && p.hasAttribute('data-mx-on')) marcar(raiz, 'hijo');
    if (raiz.matches(TODO)) marcar(raiz, tipoDe(raiz));
    var lista = raiz.querySelectorAll(TODO);
    for (var i = 0; i < lista.length; i++) marcar(lista[i], tipoDe(lista[i]));
  }
  new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      if (m.type === 'childList') { for (var i = 0; i < m.addedNodes.length; i++) revisar(m.addedNodes[i]); return; }
      // El runtime de las páginas .dc limpia, una vez al cargar, los atributos que no conoce de los
      // nodos fijos de su plantilla. Este código nunca los quita, así que se reponen en el acto
      // (antes de pintar, por eso la animación no se corta).
      if (m.oldValue !== null && !m.target.hasAttribute(m.attributeName)) m.target.setAttribute(m.attributeName, m.oldValue);
    });
  }).observe(html, { childList: true, subtree: true, attributes: true, attributeOldValue: true, attributeFilter: ['data-mx', 'data-mx-on', 'data-mx-fin'] });

  function revelar(el, demora) {
    var tipo = el.getAttribute('data-mx');
    el.style.setProperty('--mx-d', demora + 'ms');
    if (tipo === 'palabras' && !partir(el)) el.setAttribute('data-mx', tipo = 'sube');
    if (tipo === 'escribe') {
      el.style.setProperty('--mx-n', Math.max(4, Math.min(60, el.textContent.trim().length + (el.matches('.dsech') ? 3 : 0))));
      if (getComputedStyle(el.parentElement).textAlign === 'center') el.setAttribute('data-mx-centro', '');
    }
    if (tipo === 'grupo') {
      var hijos = [].filter.call(el.children, function (c) { return !c.hasAttribute('data-mx') && !/^(SCRIPT|TEMPLATE|STYLE)$/.test(c.tagName); });
      hijos.forEach(function (c, j) {
        c.setAttribute('data-mx', 'hijo');
        c.style.setProperty('--mx-d', (demora + Math.min(j, 12) * PASO_HIJO) + 'ms');
        c.setAttribute('data-mx-on', '');
        contarEn(c, demora + Math.min(j, 12) * PASO_HIJO);
      });
    }
    if (llegada && el.matches(YA_VISTO)) el.setAttribute('data-mx-fin', '');
    el.setAttribute('data-mx-on', '');
    contarEn(el, demora);
  }

  // Títulos palabra por palabra. Cada palabra va en una máscara (.mx-w) y sube desde abajo.
  function palabrasDe(texto) {
    var f = d.createDocumentFragment(), n = 0;
    texto.trim().split(/\s+/).forEach(function (w, i) {
      if (i) f.appendChild(d.createTextNode(' '));
      var m = d.createElement('span'), s = d.createElement('span');
      m.className = 'mx-w'; s.textContent = w; s.style.setProperty('--i', n++);
      m.appendChild(s); f.appendChild(m);
    });
    return f;
  }
  function partir(el) {
    // Solo texto: un nodo de texto, o (en las páginas .dc) un <sc-interp> que solo tiene texto.
    var nodo = el.childNodes.length === 1 ? el.firstChild : null;
    var soloTexto = nodo && (nodo.nodeType === 3 || (nodo.nodeType === 1 && !nodo.children.length));
    if (!soloTexto || !nodo.textContent.trim()) return false;
    if (!esReact()) { el.textContent = ''; el.appendChild(palabrasDe(nodo.textContent)); return true; }
    // Con React: su nodo queda en el DOM (oculto a la vista, legible para lectores de pantalla) y se
    // muestra una copia en palabras. Si React cambia el texto (idioma), la copia se rehace.
    var src = d.createElement('span'), copia = d.createElement('span');
    src.className = 'mx-src'; copia.className = 'mx-copia'; copia.setAttribute('aria-hidden', 'true');
    el.insertBefore(src, nodo); src.appendChild(nodo);
    copia.appendChild(palabrasDe(nodo.textContent)); el.appendChild(copia);
    new MutationObserver(function () { copia.textContent = ''; copia.appendChild(palabrasDe(src.textContent)); })
      .observe(src, { characterData: true, childList: true, subtree: true });
    return true;
  }

  // Cifras de las páginas estáticas ("-91%", "8.790", "592 h") que cuentan desde cero al aparecer.
  function contarEn(el, demora) {
    if (esReact()) return;
    var lista = el.matches('.dmval,.rnum') ? [el] : [].slice.call(el.querySelectorAll('.dmval,.rnum'));
    lista.forEach(function (n) {
      var m = /^([^\d]*?)(\d{1,3}(?:([.,])\d{3})+|\d+)(\D*)$/.exec(n.textContent.trim());
      if (!m || n.hasAttribute('data-mx-cuenta')) return;
      n.setAttribute('data-mx-cuenta', '');
      var fin = +m[2].replace(/[.,]/g, ''), sep = m[3], t0 = 0;
      var fmt = function (v) { var s = String(Math.round(v)); return sep ? s.replace(/\B(?=(\d{3})+(?!\d))/g, sep) : s; };
      n.textContent = m[1] + fmt(0) + m[4];
      setTimeout(function () {
        requestAnimationFrame(function paso(ts) {
          if (!t0) t0 = ts;
          var k = Math.min(1, (ts - t0) / 1300);
          n.textContent = m[1] + fmt(fin * (k === 1 ? 1 : 1 - Math.pow(2, -10 * k))) + m[4];
          if (k < 1) requestAnimationFrame(paso);
        });
      }, demora + 250);
    });
  }

  // Al terminar su entrada, el elemento vuelve a sus propios estilos (hover, transiciones) y deja de
  // ser una animación viva: si no, cada uno sigue siendo una capa que el navegador actualiza por cuadro.
  // Un título se da por terminado cuando termina su última palabra.
  var palabrasListas = new WeakMap();
  d.addEventListener('animationend', function (e) {
    var t = e.target;
    if (!/^mx-/.test(e.animationName) || !t.getAttribute) return;
    if (e.animationName === 'mx-palabra') {
      var c = t.closest('[data-mx=palabras]');
      if (!c || c.hasAttribute('data-mx-fin')) return;
      var n = (palabrasListas.get(c) || 0) + 1; palabrasListas.set(c, n);
      if (n >= c.querySelectorAll('.mx-w > span').length) c.setAttribute('data-mx-fin', '');
      return;
    }
    if (t.hasAttribute('data-mx')) t.setAttribute('data-mx-fin', '');
  }, true);

  // Barra de progreso de lectura y botones que se dejan atraer por el cursor.
  function alCargar() {
    var barra = d.createElement('div'), pend = false, alto = 0;
    barra.className = 'mx-progreso'; barra.setAttribute('aria-hidden', 'true');
    d.body.appendChild(barra);
    // El alto de la página se guarda (ResizeObserver) en vez de medirlo en cada cuadro de scroll.
    var medirAlto = function () { alto = html.scrollHeight - window.innerHeight; barra.classList.toggle('on', alto > window.innerHeight * 0.6); };
    function medir(ts) {
      pend = false;
      // El scroll se lee una sola vez por cuadro y se comparte (fondo.js lo usa en el mismo cuadro):
      // cada lectura de scrollY obliga al navegador a terminar el diseño pendiente.
      var sy = window.scrollY; window.mxScroll = { y: sy, ts: ts };
      // Al fondo de la página, lo que queda a la vista y no llegó a cruzar la línea de disparo
      // (un pie corto, una página que no alcanza a hacer scroll) entra igual.
      if (sy >= alto - 4) {
        pendientes = pendientes.filter(function (el) { return !el.hasAttribute('data-mx-on'); });
        pendientes.filter(function (el) { return el.isConnected && el.getBoundingClientRect().top < window.innerHeight; })
          .forEach(function (el, k) { io.unobserve(el); revelar(el, Math.min(k, TOPE) * PASO); });
      }
      barra.style.transform = 'scaleX(' + (alto > 0 ? Math.min(1, sy / alto).toFixed(4) : 0) + ')';
    }
    var pedir = function () { if (!pend) { pend = true; requestAnimationFrame(medir); } };
    window.addEventListener('scroll', pedir, { passive: true });
    window.addEventListener('resize', function () { medirAlto(); pedir(); });
    if ('ResizeObserver' in window) new ResizeObserver(function () { medirAlto(); pedir(); }).observe(html);
    medirAlto(); medir();
    window.addEventListener('load', function () { setTimeout(pedir, 300); });
    if (window.matchMedia('(hover: hover)').matches) {
      var iman = null;
      d.addEventListener('mousemove', function (e) {
        var b = e.target.closest ? e.target.closest('.btn') : null;
        if (b && b.closest(FUERA)) b = null;
        if (b !== iman) { if (iman) iman.style.removeProperty('translate'); iman = b; }
        if (!b) return;
        var r = b.getBoundingClientRect();
        b.style.translate = ((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1) + 'px ' + ((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1) + 'px';
      }, { passive: true });
    }
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', alCargar); else alCargar();

  // La salida de una tarjeta de la portada ya hace su propia transición: ahí no se suma la de la página.
  window.addEventListener('pageswap', function (e) { if (e.viewTransition && window.mxSinTransicion) e.viewTransition.skipTransition(); });
  window.addEventListener('pagereveal', function (e) { if (e.viewTransition && llegada) e.viewTransition.skipTransition(); });
})();
