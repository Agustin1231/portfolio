/* Vitrinas de la portada. Monta una de 4 versiones del "Trabajo seleccionado" en #vitrina-mount.
   La versión sale de window.VARIANTE ('a' a 'e'; la portada usa 'e', franjas). Datos en vitrina-data.js. */
(function () {
  var SITE = '/';
  var url = function (id) { return SITE + 'proyectos/' + id + '.html'; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var miles = function (n) { return Math.round(n).toLocaleString('es-CO'); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var IMG = {}, BY = {};
  [].concat(SYSTEMS, PB_CASES, AD_CASES, MAP_PROJECTS).forEach(function (p) { if (p.img && !IMG[p.id]) IMG[p.id] = p.img; });
  SYSTEMS.forEach(function (s) { BY[s.id] = s; });
  var TOTAL_H = SYSTEMS.reduce(function (a, s) { return a + s.h; }, 0);

  function foot(note) {
    return '<div class="vt-foot"><span class="note">' + esc(note) + '</span>' +
      '<a class="vt-btn" href="' + SITE + 'proyectos">Ver los 32 proyectos <span>→</span></a></div>';
  }

  /* ---------- A · Antes y después ---------- */
  function A(root) {
    var st = { i: 0, lens: 'negocio', auto: true }, timer;
    function render() {
      var c = AD_CASES[st.i];
      var tabs = AD_CASES.map(function (k, i) {
        return '<button class="vtA-tab' + (i === st.i ? ' on' : '') + (st.auto ? '' : ' stop') + '" data-i="' + i + '">' +
          '<img src="' + esc(k.img) + '" alt="">' +
          '<span><div class="tt">' + esc(k.tab) + '</div><div class="mm">' + esc(k.proof[0].v + ' ' + k.proof[0].l) + '</div></span>' +
          '<span class="bar"></span></button>';
      }).join('');
      var lista = (st.lens === 'negocio' ? c.negocio : c.tecnica).map(function (x) { return '<li><i>✓</i><span>' + esc(x) + '</span></li>'; }).join('');
      root.innerHTML =
        '<div class="vtA"><div class="vtA-tabs">' + tabs +
        '<div class="vtA-more">' + SYSTEMS.slice(0, 8).filter(function (s) { return !AD_CASES.some(function (k) { return k.id === s.id; }); }).slice(0, 5).map(function (s) {
          return '<a href="' + url(s.id) + '">' + esc(s.t.split(' — ')[0]) + ' →</a>'; }).join('') + '</div></div>' +
        '<article class="vtA-card"><div class="vtA-hero"><img src="' + esc(c.img) + '" alt="' + esc(c.caption) + '"></div>' +
        '<div class="vtA-head"><div class="vt-k">' + esc(c.client) + '</div><h3>' + esc(c.title) + '</h3></div>' +
        '<div class="vtA-body"><div class="vtA-lens"><button data-lens="negocio" class="' + (st.lens === 'negocio' ? 'on' : '') + '">Para tu negocio</button>' +
        '<button data-lens="tecnica" class="' + (st.lens === 'tecnica' ? 'on' : '') + '">Cómo está hecho</button></div>' +
        '<div class="vtA-cols"><div class="vtA-col antes"><div class="vt-k">Antes</div><ul>' +
        c.antes.map(function (x) { return '<li><i>✕</i><span>' + esc(x) + '</span></li>'; }).join('') + '</ul></div>' +
        '<div class="vtA-col desp"><div class="vt-k">' + (st.lens === 'negocio' ? 'Después' : 'Por dentro') + '</div><ul>' + lista + '</ul></div></div>' +
        (st.lens === 'tecnica' ? '<div class="vtA-stack">' + c.stack.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>' : '') +
        '<div class="vtA-proof">' + c.proof.map(function (p, i) {
          return '<div><div class="vt-big' + (i === 0 ? ' acc' : '') + '">' + esc(p.v) + '</div><div class="l">' + esc(p.l) + '</div></div>'; }).join('') + '</div>' +
        '<div style="margin-top:1.1rem"><a class="vt-btn solid" href="' + url(c.id) + '">Ver el caso completo →</a></div>' +
        '</div></article></div>' + foot(c.source);
      root.querySelectorAll('.vtA-tab').forEach(function (b) { b.onclick = function () { st.i = +b.dataset.i; st.auto = false; clearInterval(timer); render(); }; });
      root.querySelectorAll('[data-lens]').forEach(function (b) { b.onclick = function () { st.lens = b.dataset.lens; st.auto = false; clearInterval(timer); render(); }; });
    }
    render();
    if (!reduce) timer = setInterval(function () { if (st.auto) { st.i = (st.i + 1) % AD_CASES.length; render(); } }, 9000);
  }

  /* ---------- B · Replay del flujo ---------- */
  function B(root) {
    var st = { f: 0, step: 0, playing: false, started: false }, timer;
    var strip = SYSTEMS.slice().sort(function (a, b) { return b.h - a.h; }).filter(function (s) {
      return !FLOWS.some(function (f) { return f.id === s.id; }); }).slice(0, 4);
    function hora(i) { var m = 9 * 60 + 12 + i * 2; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2) + ':' + ('0' + ((i * 17) % 60)).slice(-2); }
    function render() {
      var f = FLOWS[st.f], n = f.steps.length;
      var steps = f.steps.map(function (s, i) {
        var cls = i < st.step ? 'done' : (i === st.step && st.started ? 'cur' : '');
        return '<li class="vtB-step ' + cls + '"><div class="vtB-dot">' + (i < st.step ? '✓' : (i + 1)) + '</div><div><div class="t">' + esc(s.t) +
          ' <span class="tool">' + esc(s.tool) + '</span>' + (s.parallel ? '<span class="par">∥ en paralelo</span>' : '') + '</div><div class="d">' + esc(s.d) + '</div></div></li>';
      }).join('');
      var log = f.steps.slice(0, st.step + (st.started ? 1 : 0)).map(function (s, i) {
        return '<div class="ln"><span>' + hora(i) + '</span><b>✓</b><div>' + esc(s.log) + '</div></div>'; }).join('');
      var fin = st.step >= n;
      root.innerHTML =
        '<div class="vtB-top"><div class="vtB-tabs">' + FLOWS.map(function (x, i) {
          return '<button class="vt-chip' + (i === st.f ? ' on' : '') + '" data-f="' + i + '">' + esc(x.label) + '</button>'; }).join('') + '</div>' +
        '<div class="vtB-ctrl"><button class="vt-btn" data-act="play">' + (st.playing ? '❚❚ Pausa' : (fin ? '↺ Repetir' : '▶ Reproducir')) + '</button>' +
        '<a class="vt-btn" href="' + url(f.id) + '">Ver el caso →</a></div></div>' +
        '<div class="vtB"><div class="vtB-rail"><div class="vt-k" style="margin-bottom:1rem">Así corre, paso a paso</div><ul class="vtB-steps"><span class="vtB-fill"></span>' + steps + '</ul></div>' +
        '<div class="vtB-side"><div class="vtB-stats">' + f.stats.map(function (s, i) {
          return '<div><div class="vt-big' + (i === 0 ? ' acc' : '') + '">' + esc(s.v) + '</div><div class="l">' + esc(s.l) + '</div></div>'; }).join('') + '</div>' +
        '<div class="vtB-log"><div class="hd"><i></i>' + esc(f.logTitle) + '</div>' + log + (fin ? '<div class="ln"><span>' + hora(n) + '</span><b>■</b><div>ejecución terminada sin intervención</div></div>' : '<span class="cursor"></span>') + '</div></div></div>' +
        '<div class="vtB-strip">' + strip.map(function (s) {
          return '<a class="vtB-mini" href="' + url(s.id) + '"><img src="' + esc(s.img) + '" alt=""><div class="b"><div class="t">' + esc(s.t.split(' — ')[0]) +
            '</div><div class="m">' + miles(s.h) + ' h ahorradas</div></div></a>'; }).join('') + '</div>' +
        foot('Sistemas en producción. Ejecuciones y horas: tracker de automatizaciones, 11 oct 2026.');
      var ul = root.querySelector('.vtB-steps'), items = ul.querySelectorAll('.vtB-step'), fill = ul.querySelector('.vtB-fill');
      var last = items[Math.min(st.step, n - 1)];
      fill.style.height = st.started ? Math.max(0, (st.step >= n ? items[n - 1].offsetTop : last.offsetTop) + 8) + 'px' : '0px';
      root.querySelectorAll('[data-f]').forEach(function (b) { b.onclick = function () { st.f = +b.dataset.f; st.step = 0; st.started = true; play(true); }; });
      root.querySelector('[data-act="play"]').onclick = function () {
        if (st.playing) { st.playing = false; clearInterval(timer); render(); return; }
        if (st.step >= n) { st.step = 0; }
        st.started = true; play(true);
      };
    }
    function play(on) {
      clearInterval(timer); st.playing = on; render();
      if (!on) return;
      timer = setInterval(function () {
        var n = FLOWS[st.f].steps.length;
        if (st.step >= n) { st.playing = false; clearInterval(timer); render(); return; }
        st.step++; render();
      }, 1600);
    }
    render();
    if ('IntersectionObserver' in window && !reduce) {
      var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting && !st.started) { st.started = true; play(true); io.disconnect(); } }, { threshold: 0.1 });
      io.observe(root);
    }
  }

  /* ---------- C · Empieza por tu problema ---------- */
  function C(root) {
    var st = { key: 'whatsapp', q: '' };
    function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
    function results() {
      if (st.q.trim()) {
        var words = norm(st.q).split(/\s+/).filter(function (w) { return w.length > 2; });
        var keys = PROBLEMS.filter(function (p) { return words.some(function (w) { return norm(p.kw + ' ' + p.label).indexOf(w) >= 0; }); }).map(function (p) { return p.key; });
        return PB_CASES.filter(function (c) {
          return c.tags.some(function (t) { return keys.indexOf(t) >= 0; }) || words.some(function (w) { return norm(c.t + ' ' + c.pain).indexOf(w) >= 0; });
        });
      }
      return PB_CASES.filter(function (c) { return c.tags.indexOf(st.key) >= 0; });
    }
    function render(keepFocus) {
      var r = results();
      var p = PROBLEMS.filter(function (x) { return x.key === st.key; })[0];
      root.innerHTML =
        '<div class="vtC-ask"><div class="vtC-q">¿Qué te está quitando tiempo hoy?</div>' +
        '<label class="vtC-in"><span class="mono" style="color:var(--dim)">⌕</span><input type="text" placeholder="Escríbelo: leads, WhatsApp, reportes, correos…" value="' + esc(st.q) + '"></label>' +
        '<div class="vtC-chips">' + PROBLEMS.map(function (x) {
          return '<button class="vt-chip' + (!st.q && x.key === st.key ? ' on' : '') + '" data-k="' + x.key + '">' + esc(x.label) + '</button>'; }).join('') + '</div></div>' +
        '<div class="vtC-res"><div class="vtC-cnt">' + (r.length ? '<b>' + r.length + (r.length === 1 ? ' sistema' : ' sistemas') + '</b> que ya resuelven ' + (st.q ? '«' + esc(st.q) + '»' : esc(p.label.toLowerCase())) : '') + '</div>' +
        (r.length ? '<div class="vtC-grid">' + r.slice(0, 6).map(function (c) {
          return '<a class="vtC-card" href="' + url(c.id) + '"><img src="' + esc(c.img) + '" alt="" loading="lazy"><div class="b"><div class="pain">' + esc(c.pain) +
            '</div><div class="t">' + esc(c.t) + '</div><div class="proof">' + esc(c.proof) + '</div></div></a>'; }).join('') + '</div>'
          : '<div class="vtC-empty">Todavía no tengo un caso publicado para eso. <a href="#contacto" style="color:var(--accent)">Cuéntame qué necesitas →</a></div>') +
        '</div>' + foot('Cada tarjeta es un sistema que ya está funcionando para alguien.');
      root.querySelectorAll('[data-k]').forEach(function (b) { b.onclick = function () { st.key = b.dataset.k; st.q = ''; render(); }; });
      var inp = root.querySelector('input');
      inp.oninput = function () { st.q = inp.value; render(true); };
      if (keepFocus) { var i2 = root.querySelector('input'); i2.focus(); i2.setSelectionRange(i2.value.length, i2.value.length); }
    }
    render();
  }

  /* ---------- D · Mapa de sistemas ---------- */
  function D(root) {
    var W = 940, H = 560, cx = W / 2, cy = H / 2, rh = 125, rp = 228;
    var st = { hub: null, sel: 'agente-de-ia-que-atiende-y-cobra-por-whatsapp', auto: true };
    // Recorrido automático: cada tecnología y, dentro de ella, dos de sus sistemas. Se pausa si el
    // visitante toca algo y retoma solo a los 12 s.
    var SEQ = [], vistos = {};
    MAP_HUBS.forEach(function (h) {
      var ps = MAP_PROJECTS.filter(function (x) { return x.hubs.indexOf(h.key) >= 0; });
      SEQ.push({ hub: h.key, sel: ps[0] ? ps[0].id : st.sel });
      ps.filter(function (x) { return !vistos[x.id]; }).slice(0, 2).forEach(function (x) { vistos[x.id] = 1; SEQ.push({ hub: null, sel: x.id }); });
    });
    var paso = 0, timer = null, reanudar = null, visible = false, DUR = 3400;
    function avanzar() { if (!st.auto || !visible) return; var x = SEQ[paso % SEQ.length]; paso++; st.hub = x.hub; st.sel = x.sel; render(); }
    function tocar() { st.auto = false; clearTimeout(reanudar); reanudar = setTimeout(function () { st.auto = true; avanzar(); }, 12000); }
    var pos = function (a, r) { var t = a * Math.PI / 180; return [cx + Math.cos(t) * r, cy + Math.sin(t) * r * 0.86]; };
    function render() {
      var p = MAP_PROJECTS.filter(function (x) { return x.id === st.sel; })[0] || MAP_PROJECTS[0];
      var hiHubs = st.hub ? [st.hub] : p.hubs;
      var hiProj = MAP_PROJECTS.filter(function (x) { return st.hub ? x.hubs.indexOf(st.hub) >= 0 : x.id === p.id; }).map(function (x) { return x.id; });
      var edges = '', hubs = '', projs = '';
      MAP_HUBS.forEach(function (h) {
        var a = pos(h.angle, rh);
        edges += '<line class="edge' + (hiHubs.indexOf(h.key) >= 0 ? ' hi' : '') + '" x1="' + cx + '" y1="' + cy + '" x2="' + a[0] + '" y2="' + a[1] + '"/>';
      });
      MAP_PROJECTS.forEach(function (x) {
        var b = pos(x.angle, rp);
        x.hubs.forEach(function (k) {
          var h = MAP_HUBS.filter(function (y) { return y.key === k; })[0]; var a = pos(h.angle, rh);
          var on = hiProj.indexOf(x.id) >= 0 && hiHubs.indexOf(k) >= 0;
          edges += '<line class="edge' + (on ? ' hi' : '') + '" x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '"/>';
        });
        var right = Math.cos(x.angle * Math.PI / 180) >= 0;
        projs += '<g class="proj' + (hiProj.indexOf(x.id) >= 0 ? ' hi' : '') + (x.id === st.sel && !st.hub ? ' sel' : '') + '" data-p="' + x.id + '">' +
          '<circle cx="' + b[0] + '" cy="' + b[1] + '" r="5.5"/><circle cx="' + b[0] + '" cy="' + b[1] + '" r="14" fill="transparent" style="fill:transparent"/>' +
          '<text x="' + (b[0] + (right ? 10 : -10)) + '" y="' + (b[1] + 4) + '" text-anchor="' + (right ? 'start' : 'end') + '">' + esc(x.short) + '</text></g>';
      });
      MAP_HUBS.forEach(function (h) {
        var a = pos(h.angle, rh), w = h.label.length * 7.4 + 22;
        hubs += '<g class="hub' + (hiHubs.indexOf(h.key) >= 0 ? ' hi' : '') + '" data-h="' + h.key + '" style="cursor:pointer"><rect x="' + (a[0] - w / 2) + '" y="' + (a[1] - 14) +
          '" width="' + w + '" height="28" rx="14" style="fill:var(--bg2);stroke:' + (hiHubs.indexOf(h.key) >= 0 ? 'var(--accent)' : 'var(--line)') + '"/>' +
          '<text x="' + a[0] + '" y="' + (a[1] + 4) + '" text-anchor="middle">' + esc(h.label) + '</text></g>';
      });
      var s = BY[p.id];
      root.innerHTML =
        '<div class="vtD"><div class="vtD-map' + (st.hub ? ' focus' : '') + '"><div class="vtD-legend">' +
        '<button class="vt-chip' + (!st.hub ? ' on' : '') + '" data-h="">Todo</button>' +
        MAP_HUBS.map(function (h) { return '<button class="vt-chip' + (st.hub === h.key ? ' on' : '') + '" data-h="' + h.key + '">' + esc(h.label) + '</button>'; }).join('') +
        '</div><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Mapa de proyectos y tecnologías">' + edges +
        '<g class="core"><circle cx="' + cx + '" cy="' + cy + '" r="38"/><text x="' + cx + '" y="' + (cy - 2) + '" text-anchor="middle" style="font-size:18px">20</text><text x="' + cx + '" y="' + (cy + 14) + '" text-anchor="middle" style="font-size:10px">sistemas</text></g>' + hubs + projs + '</svg></div>' +
        '<article class="vtD-card">' + (st.auto ? '<div class="vtD-prog"><i style="animation-duration:' + DUR + 'ms"></i></div>' : '') + (IMG[p.id] ? '<img src="' + esc(IMG[p.id]) + '" alt="">' : '<div class="vtD-noimg"><span>' + esc(p.short) + '</span></div>') +
        '<div class="b"><div class="vt-k">' + (st.hub ? esc(hiProj.length + ' sistemas usan ' + MAP_HUBS.filter(function (h) { return h.key === st.hub; })[0].label) : (st.auto ? 'Recorriendo los sistemas · toca uno para explorarlo' : 'Toca un punto del mapa')) + '</div>' +
        '<h3>' + esc(p.t) + '</h3><p>' + esc(p.s) + '</p>' +
        '<div class="vtD-tags">' + p.hubs.map(function (k) { return '<span>' + esc(MAP_HUBS.filter(function (h) { return h.key === k; })[0].label) + '</span>'; }).join('') + '</div>' +
        (s ? '<div class="vtD-nums"><div><div class="vt-big acc">' + miles(s.h) + ' h</div><div class="l">ahorradas</div></div><div><div class="vt-big">' + miles(s.ej) + '</div><div class="l">ejecuciones</div></div></div>' : '') +
        '<div style="margin-top:auto;padding-top:.4rem"><a class="vt-btn solid" href="' + url(p.id) + '">Ver el caso →</a></div></div></article></div>' +
        foot('Cada línea une un sistema con las piezas que usa. ' + miles(TOTAL_H) + ' h ahorradas entre los sistemas con registro.');
      root.querySelectorAll('[data-h]').forEach(function (b) { b.onclick = function () { tocar(); st.hub = b.dataset.h || null; if (st.hub) { var f = MAP_PROJECTS.filter(function (x) { return x.hubs.indexOf(st.hub) >= 0; })[0]; if (f) st.sel = f.id; } render(); }; });
      root.querySelectorAll('[data-p]').forEach(function (g) { g.onclick = function () { tocar(); st.sel = g.dataset.p; st.hub = null; render(); }; });
    }
    render();
    if (!reduce) {
      timer = setInterval(avanzar, DUR);
      if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }, { threshold: 0.15 }).observe(root);
      else visible = true;
    }
  }


  /* ---------- E · Franjas de proyectos ---------- */
  // Tres franjas que cruzan la pantalla de lado a lado, una por área. Las portadas van en gris y se
  // encienden al pasar el mouse. Cada franja se desplaza sola (en sentidos alternos) y se detiene al
  // pasar el mouse por encima para poder leer y hacer clic.
  function E(root) {
    var FILAS = [
      { k: 'IA y agentes', tags: ['ai'] },
      { k: 'Automatización', tags: ['auto'] },
      { k: 'Producto y herramientas', tags: ['prod', 'tools'] }
    ];
    function cifra(p) {
      var s = BY[p.id], h = s ? s.h : p.h;
      if (h) return miles(h) + ' h ahorradas';
      return p.year + ' · ' + p.company;
    }
    function tarjeta(p) {
      return '<a class="vtE-card" href="' + url(p.id) + '"><img src="' + esc(p.img) + '" alt="" loading="lazy">' +
        '<div class="vtE-info"><div class="vtE-m">' + esc(cifra(p)) + '</div><div class="vtE-t">' + esc(p.t.split(' — ')[0]) + '</div>' +
        '<div class="vtE-s">' + esc(p.s) + '</div><div class="vtE-go">Ver el caso →</div></div></a>';
    }
    root.innerHTML = '<div class="vtE">' + FILAS.map(function (f, i) {
      var ps = HOME_PROJECTS.filter(function (p) { return f.tags.indexOf(p.tag) >= 0; });
      var cards = ps.map(tarjeta).join('');
      var dur = Math.max(28, ps.length * 7);
      return '<div class="vtE-row' + (i % 2 ? ' rev' : '') + '"><div class="vtE-lab"><span>' + esc(f.k) + '</span><b>' + ps.length + '</b></div>' +
        '<div class="vtE-track" style="animation-duration:' + dur + 's">' + cards + cards + '</div></div>';
    }).join('') + '</div>' + foot('Pasa el mouse por una portada para verla en color. ' + HOME_PROJECTS.length + ' proyectos en la portada.');
  }

  var V = { a: A, b: B, c: C, d: D, e: E };
  // La portada la pinta un runtime de React que puede reemplazar el contenedor después de cargar
  // (y al cambiar tema o idioma). Se vigila y se vuelve a montar si aparece uno nuevo y vacío.
  setInterval(function () {
    var el = document.getElementById('vitrina-mount');
    if (!el || el.getAttribute('data-vt') === '1') return;
    el.setAttribute('data-vt', '1');
    el.classList.add('vt');
    V[window.VARIANTE || 'a'](el);
  }, 250);
})();
