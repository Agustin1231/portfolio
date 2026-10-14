/* Fondos animados en un hilo aparte. startBg3d (constelación) y startAscii (campo ASCII del inicio)
   llaman a Fondo.iniciar(canvas, tipo, {accent}); si el navegador soporta OffscreenCanvas, el canvas
   pasa a fondo-worker.js, que lo dibuja fuera del hilo principal, y esto solo le avisa el puntero,
   el avance del scroll, el tamaño, el tema y si se ve. Devuelve false si no hay soporte, y la página
   sigue con su dibujo de siempre. Todo se manda como mucho una vez por cuadro y sin medir el diseño
   en medio del scroll (los altos y posiciones se guardan con ResizeObserver). */
(function () {
  var ok = typeof OffscreenCanvas !== 'undefined' && typeof Worker !== 'undefined' &&
    'transferControlToOffscreen' in HTMLCanvasElement.prototype && 'ResizeObserver' in window;
  var rgb = function (hex) {
    var h = (hex || '#ff5c35').replace('#', ''); if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };

  function iniciar(cv, tipo, op) {
    if (!ok) return false;
    var wk;
    try { wk = new Worker('/fondo-worker.js?v=20261014'); } catch (e) { return false; }
    var off;
    try { off = cv.transferControlToOffscreen(); } catch (e) { wk.terminate(); return false; }
    var still = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    var site = cv.closest('.site') || document.querySelector('.site');
    var claro = function () { return site ? site.classList.contains('light') : true; };
    var host = cv.parentElement, ascii = tipo === 'ascii';
    var w = ascii ? host.clientWidth : window.innerWidth, h = ascii ? host.clientHeight : window.innerHeight;
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    // La opacidad del CSS (.6) pasa al dibujo y la capa queda opaca: ver fondo-worker.js.
    var alfa = parseFloat(getComputedStyle(cv).opacity); if (!(alfa >= 0 && alfa <= 1)) alfa = 1;
    cv.style.width = w + 'px'; cv.style.height = h + 'px'; cv.style.opacity = '1';
    wk.postMessage({ t: 'init', tipo: tipo, canvas: off, w: w, h: h, dpr: dpr, acc: rgb(op && op.accent), light: claro(), still: still,
      cell: window.innerWidth < 760 ? 20 : 16, p: 0, alfa: alfa }, [off]);

    // Lo que cambia se junta y se manda en el próximo cuadro (si es una función, se arma recién ahí).
    var cola = {}, pedido = false;
    var mandar = function (ts) { pedido = false; for (var k in cola) wk.postMessage(typeof cola[k] === 'function' ? cola[k](ts) : cola[k]); cola = {}; };
    var poner = function (m) { cola[m.t] = m; if (!pedido) { pedido = true; requestAnimationFrame(mandar); } };

    // Tamaño: la constelación ocupa la ventana; el ASCII, el inicio (que cambia si el inicio cambia).
    var izq = 0, arriba = 0;
    var medirCaja = function () { var r = cv.getBoundingClientRect(); izq = r.left; arriba = r.top + window.scrollY; };
    if (ascii) {
      new ResizeObserver(function () {
        var W = host.clientWidth, H = host.clientHeight;
        cv.style.width = W + 'px'; cv.style.height = H + 'px'; medirCaja();
        poner({ t: 'tam', w: W, h: H });
      }).observe(host);
      medirCaja();
    } else {
      window.addEventListener('resize', function () {
        cv.style.width = window.innerWidth + 'px'; cv.style.height = window.innerHeight + 'px';
        poner({ t: 'tam', w: window.innerWidth, h: window.innerHeight });
      });
    }

    if (!still) {
      window.addEventListener('pointermove', function (e) {
        if (ascii) poner({ t: 'puntero', x: e.clientX - izq, y: e.clientY - (arriba - window.scrollY) });
        else poner({ t: 'puntero', x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
      }, { passive: true });
    }

    // Avance del scroll (la constelación se recorre al bajar). El alto se guarda, no se mide por cuadro.
    if (!ascii) {
      var alto = 0;
      // scrollY se lee una vez por cuadro, no en cada evento (leerlo fuerza el diseño si está pendiente).
      var progreso = function (ts) {
        var c = window.mxScroll, y = c && c.ts === ts ? c.y : window.scrollY; // motion.js ya lo leyó en este cuadro
        return { t: 'progreso', p: alto > 0 ? Math.min(1, Math.max(0, y / alto)) : 0 };
      };
      var avance = function () { cola.progreso = progreso; if (!pedido) { pedido = true; requestAnimationFrame(mandar); } };
      new ResizeObserver(function () { alto = document.documentElement.scrollHeight - window.innerHeight; avance(); }).observe(document.documentElement);
      window.addEventListener('scroll', avance, { passive: true });
      window.addEventListener('resize', function () { alto = document.documentElement.scrollHeight - window.innerHeight; avance(); });
    }

    // Tema claro/oscuro: se lee de la clase de .site, que React cambia al tocar el botón.
    if (site) new MutationObserver(function () { poner({ t: 'tema', light: claro() }); }).observe(site, { attributes: true, attributeFilter: ['class'] });

    // Pausa cuando no se ve: el ASCII al salir del inicio, los dos con la pestaña oculta.
    var enVista = true, pestana = !document.hidden;
    var avisar = function () { wk.postMessage({ t: 'visible', v: enVista && pestana }); };
    if (ascii) new IntersectionObserver(function (es) { enVista = es[0].isIntersecting; avisar(); }).observe(cv);
    document.addEventListener('visibilitychange', function () { pestana = !document.hidden; avisar(); });
    return true;
  }

  window.Fondo = { iniciar: iniciar };
})();
