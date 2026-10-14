/* Vitrina de la portada: el "Trabajo seleccionado" como casos apilados (vitrina G). Se monta en
   #vitrina-mount; los datos están en vitrina-data.js. Cada caso tiene que estar en SYSTEMS o en
   AD_CASES (de ahí salen el nombre, las cifras, el stack y la imagen). */
(function () {
  var SITE = '/';
  var url = function (id) { return SITE + 'proyectos/' + id + '.html'; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var NF = window.Intl ? new Intl.NumberFormat('es-CO') : null; // un solo formateador: las cifras cuentan cuadro a cuadro
  var miles = function (n) { return NF ? NF.format(Math.round(n)) : Math.round(n).toLocaleString('es-CO'); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var BY = {};
  SYSTEMS.forEach(function (s) { BY[s.id] = s; });
  var corto = function (t) { return t.split(' — ')[0]; };
  var buscar = function (lista, id) { return lista.filter(function (x) { return x.id === id; })[0]; };

  function foot(note) {
    return '<div class="vt-foot"><span class="note">' + esc(note) + '</span>' +
      '<a class="vt-btn" href="' + SITE + 'proyectos">Ver los 32 proyectos <span>→</span></a></div>';
  }

  /* ---------- G · Casos apilados ---------- */
  // Cinco casos grandes que se apilan al bajar. El titular de cada uno es el resultado; debajo van
  // el antes y el ahora, dos o tres cifras y el stack. En pantallas chicas van uno tras otro.
  // Movimiento: la tarjeta que queda atrás se achica y se funde con el fondo; la imagen de la que
  // llega se acerca con un zoom; el contenido entra escalonado y las cifras cuentan desde cero; una
  // burbuja "Ver caso" sigue al cursor por la tarjeta; y al entrar a un caso la tarjeta crece hasta
  // llenar la pantalla y deja armado el encabezado de su página. Con movimiento reducido no se anima nada.
  function G(root) {
    var CS = RESULT_CASES.map(function (rc) {
      var s = BY[rc.id], ad = buscar(AD_CASES, rc.id), pb = buscar(PB_CASES, rc.id), hp = {};
      return {
        id: rc.id, r: rc.r, t: ad ? ad.title : (s || hp).t,
        k: ad ? ad.client : (s ? s.co + ' · ' + s.y : hp.company + ' · ' + hp.year),
        antes: pb ? pb.pain : ad.antes[0],
        ahora: ad ? ad.negocio[0] : s.s,
        nums: rc.nums || ad.proof.slice(0, 3),
        tech: (ad ? ad.stack : (s ? s.tech : hp.tech)).slice(0, 5),
        img: ad ? ad.img : (s ? s.img : hp.img)
      };
    });
    var TOP = 84, PASO = 14; // igual que el top de .vtG-card en el CSS
    var dos = function (n) { return ('0' + n).slice(-2); };
    // fx(d): el elemento entra con un retraso proporcional a d cuando la tarjeta aparece.
    var fx = function (d, cls) { return 'class="vtG-fx' + (cls ? ' ' + cls : '') + '" style="--d:' + d + '"'; };
    // Las portadas WebP son de 800 px; la JPG de al lado es de 1408 px y se usa en pantallas de alta densidad.
    var imagen = function (src) {
      var jpg = /^img\/proyectos\/[^\/]+\.webp$/.test(src) ? src.replace(/\.webp$/, '.jpg') : '';
      return '<img src="' + esc(src) + '"' + (jpg ? ' srcset="' + esc(src) + ' 800w, ' + esc(jpg) + ' 1408w" sizes="(max-width: 900px) 88vw, 36vw"' : '') + ' alt="" loading="lazy">';
    };
    var palabras = function (t) { return t.split(' ').map(function (w, k) { return '<span class="w"><span style="--d:' + k + '">' + esc(w) + '</span></span>'; }).join(' '); };
    root.innerHTML = '<div class="vtG">' + CS.map(function (c, i) {
      return '<article class="vtG-card" data-k="' + i + '" style="--i:' + i + '"><div class="vtG-txt">' +
        '<div ' + fx(0, 'vtG-top') + '><span class="vtG-n mono">' + dos(i + 1) + ' / ' + dos(CS.length) + '</span><span class="vt-k">' + esc(c.k) + '</span></div>' +
        '<h3 class="vtG-r">' + palabras(c.r) + '</h3><div ' + fx(3, 'vtG-name mono') + '>' + esc(c.t) + '</div>' +
        '<div class="vtG-ab"><div ' + fx(4) + '><b>Antes</b><span>' + esc(c.antes) + '</span></div><div ' + fx(5, 'now') + '><b>Ahora</b><span>' + esc(c.ahora) + '</span></div></div>' +
        '<div ' + fx(6, 'vtG-nums') + '>' + c.nums.map(function (n, j) {
          return '<div><div class="vt-big' + (j === 0 ? ' acc' : '') + '">' + esc(n.v) + '</div><div class="l">' + esc(n.l) + '</div></div>'; }).join('') + '</div>' +
        '<div class="vtG-tech">' + c.tech.map(function (x, j) { return '<span ' + fx(7 + j * 0.4) + '>' + esc(x) + '</span>'; }).join('') + '</div>' +
        '<div ' + fx(9) + '><a class="vt-btn solid vtG-go" href="' + url(c.id) + '">Ver el caso completo <span>→</span></a></div></div>' +
        '<a class="vtG-img vtG-go" href="' + url(c.id) + '" tabindex="-1" aria-hidden="true">' + imagen(c.img) + '</a><div class="vtG-velo" aria-hidden="true"></div></article>';
    }).join('') + '</div>' +
      '<nav class="vtG-rail" aria-label="Casos">' + CS.map(function (c, i) {
        return '<button type="button" data-k="' + i + '"><b class="mono">' + dos(i + 1) + '</b><span>' + esc(corto(c.t)) + '</span><i></i></button>'; }).join('') + '</nav>' +
      '<div class="vtG-cur mono" aria-hidden="true">Ver caso</div>' +
      foot('Cinco casos, con el resultado primero. Cifras del tracker (11 oct 2026) y de cada caso publicado.');

    var lista = root.querySelector('.vtG'), cards = [].slice.call(root.querySelectorAll('.vtG-card'));
    var rail = root.querySelector('.vtG-rail'), cur = root.querySelector('.vtG-cur');

    // Cifras que cuentan desde cero ("22.290 h", "−91 %", "8.790"); las que no son número ("24/7") quedan igual.
    function contar(el) {
      var m = /^([−-]?)(\d{1,3}(?:\.\d{3})+|\d+)(\s?[^\d\/][^\/]*)?$/.exec(el.textContent.trim());
      if (!m) return;
      var fin = +m[2].replace(/\./g, ''), t0 = 0;
      function paso(ts) {
        if (!t0) t0 = ts;
        var k = Math.min(1, (ts - t0) / 1400), e = k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        el.textContent = m[1] + miles(fin * e) + (m[3] || '');
        if (k < 1) requestAnimationFrame(paso);
      }
      el.textContent = m[1] + '0' + (m[3] || '');
      setTimeout(function () { requestAnimationFrame(paso); }, 650);
    }
    function entra(c) { c.classList.add('in'); c.querySelectorAll('.vt-big').forEach(contar); precargar(c.querySelector('.vt-btn').href); }

    // Encabezado de cada caso (volver, categoría, título y bajada), leído de su propia página para que
    // la salida termine igual a como empieza esa página. De paso la página queda en caché.
    var HERO = {};
    function precargar(href) {
      if (HERO[href] || !window.fetch || !window.DOMParser) return;
      HERO[href] = 'cargando';
      // Se lee cuando el navegador está libre, para no sumar trabajo en medio del scroll.
      var libre = window.requestIdleCallback || function (f) { return setTimeout(f, 200); };
      fetch(href).then(function (r) { return r.ok ? r.text() : Promise.reject(); }).then(function (html) {
        libre(function () {
          var d = new DOMParser().parseFromString(html, 'text/html');
          var q = function (sel) { var e = d.querySelector('.dhero ' + sel); return e ? e.textContent.trim() : ''; };
          HERO[href] = { back: q('.back'), cat: q('.dcat'), t: q('.dtitle'), sub: q('.dsub') };
        }, { timeout: 4000 });
      }).catch(function () { delete HERO[href]; });
    }
    if (reduce || !('IntersectionObserver' in window)) cards.forEach(function (c) { c.classList.add('in'); });
    else {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { entra(e.target); io.unobserve(e.target); } });
      }, { threshold: 0.3 });
      cards.forEach(function (c) { io.observe(c); });
    }

    // Por cuadro: zoom de cada imagen según cuánto falta para que su tarjeta llegue a su lugar,
    // profundidad de la tarjeta que va quedando tapada y caso actual en el riel. Para no forzar el
    // diseño en medio del scroll se lee una sola posición (la de la lista); la de cada tarjeta sale
    // de los altos guardados con la misma regla del sticky, y solo se escribe lo que cambió.
    var pegado = false, vh = 0, pend = false, altos = [], gap = 0;
    var imgs = cards.map(function (c) { return c.querySelector('.vtG-img img'); });
    var velos = cards.map(function (c) { return c.querySelector('.vtG-velo'); });
    var ult = cards.map(function () { return { z: -1, s: -1, o: -1, c: '' }; }), ultActual = -1, ultRiel = null;
    var botones = [].slice.call(rail.querySelectorAll('button'));
    function medir() {
      vh = window.innerHeight; pegado = getComputedStyle(cards[0]).position === 'sticky';
      altos = cards.map(function (c) { return c.offsetHeight; }); gap = parseFloat(getComputedStyle(lista).rowGap) || 0;
    }
    function cuadro() {
      pend = false;
      if (!root.isConnected) { window.removeEventListener('scroll', pedir); window.removeEventListener('resize', alto); return; }
      var lr = lista.getBoundingClientRect(), y = lr.top, tops = [];
      cards.forEach(function (c, i) {
        var meta = TOP + i * PASO;
        tops.push(pegado ? Math.min(Math.max(y, meta), lr.bottom - altos[i]) : y);
        y += altos[i] + gap;
      });
      var actual = 0;
      cards.forEach(function (c, i) {
        var top = tops[i], meta = pegado ? TOP + i * PASO : vh * 0.2;
        var t = Math.min(1, Math.max(0, (vh - top) / (vh - meta)));
        var z = Math.round((1.1 - 0.1 * (1 - Math.pow(1 - t, 3))) * 1000) / 1000;
        if (z !== ult[i].z) { ult[i].z = z; imgs[i].style.transform = z === 1 ? '' : 'scale(' + z + ')'; }
        if (top <= meta + 60) actual = i;
        if (pegado && i < cards.length - 1) {
          var ms = TOP + (i + 1) * PASO, p = Math.min(1, Math.max(0, (vh - tops[i + 1]) / (vh - ms)));
          var sc = Math.round((1 - 0.06 * p) * 10000) / 10000, o = Math.round(0.55 * p * 1000) / 1000;
          if (sc !== ult[i].s) { ult[i].s = sc; c.style.transform = sc === 1 ? '' : 'scale(' + sc + ')'; }
          if (o !== ult[i].o) { ult[i].o = o; velos[i].style.opacity = o; }
          // Ya tapada del todo por la siguiente, solo se ve su franja de arriba: el resto se recorta
          // para que el compositor no dibuje cinco tarjetas enteras encimadas (la sombra hacia arriba queda).
          var franja = p === 1 ? Math.ceil((tops[i + 1] - top) / sc) + 48 : 0;
          var clip = franja && franja < altos[i] - 24 ? 'inset(-80px -80px ' + (altos[i] - franja) + 'px -80px)' : '';
          if (clip !== ult[i].c) { ult[i].c = clip; c.style.clipPath = clip; }
        } else if (ult[i].s !== 1) { ult[i].s = 1; ult[i].o = 0; ult[i].c = ''; c.style.transform = ''; c.style.clipPath = ''; velos[i].style.opacity = 0; }
      });
      var riel = lr.top < vh * 0.6 && lr.bottom > vh * 0.4;
      if (riel !== ultRiel) { ultRiel = riel; rail.classList.toggle('on', riel); }
      if (actual !== ultActual) { ultActual = actual; botones.forEach(function (b, i) { b.classList.toggle('cur', i === actual); }); }
    }
    function pedir() { if (!pend) { pend = true; requestAnimationFrame(cuadro); } }
    function alto() { medir(); pedir(); }
    if (!reduce) {
      medir(); window.addEventListener('scroll', pedir, { passive: true }); window.addEventListener('resize', alto); cuadro();
      // Los altos cambian si cargan las fuentes o cambia el ancho: se vuelven a guardar.
      if ('ResizeObserver' in window) { var ro = new ResizeObserver(alto); cards.forEach(function (c) { ro.observe(c); }); }
    }

    // Riel: lleva al punto exacto donde esa tarjeta queda en su lugar.
    rail.querySelectorAll('button').forEach(function (b) {
      b.onclick = function () {
        var i = +b.dataset.k, y = lista.getBoundingClientRect().top + window.scrollY, gap = parseFloat(getComputedStyle(lista).rowGap) || 0;
        for (var j = 0; j < i; j++) y += cards[j].offsetHeight + gap;
        window.scrollTo({ top: y - (pegado ? TOP + i * PASO : TOP), behavior: 'smooth' });
      };
    });

    // Con mouse: la burbuja "Ver caso" sigue al cursor por toda la tarjeta (sobre el botón se achica
    // a un punto), la imagen se inclina hacia el cursor y el botón se deja atraer un poco.
    if (!reduce && window.matchMedia('(hover: hover)').matches) {
      var cx = 0, cy = 0, kx = 0, ky = 0, mov = 0;
      var poner = function () { cur.style.transform = 'translate3d(' + kx + 'px,' + ky + 'px,0)'; };
      var seguir = function () {
        kx += (cx - kx) * 0.22; ky += (cy - ky) * 0.22; poner();
        mov = Math.abs(cx - kx) + Math.abs(cy - ky) > 0.3 ? requestAnimationFrame(seguir) : 0;
      };
      cards.forEach(function (c) {
        c.addEventListener('mouseenter', function (e) { kx = cx = e.clientX; ky = cy = e.clientY; poner(); cur.classList.add('on'); });
        c.addEventListener('mousemove', function (e) {
          cx = e.clientX; cy = e.clientY;
          cur.classList.toggle('chico', !!e.target.closest('.vt-btn'));
          if (!mov) mov = requestAnimationFrame(seguir);
        });
        c.addEventListener('mouseleave', function () { cur.classList.remove('on', 'chico'); });
      });
      root.querySelectorAll('.vtG-img').forEach(function (a) {
        var quitar = 0;
        a.addEventListener('mouseenter', function () { clearTimeout(quitar); a.classList.add('tilt'); });
        a.addEventListener('mousemove', function (e) {
          var r = a.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          a.style.setProperty('--ry', (x * 6).toFixed(2) + 'deg');
          a.style.setProperty('--rx', (-y * 5).toFixed(2) + 'deg');
        });
        // Quieta, la imagen vuelve a transform: none para verse nítida.
        a.addEventListener('mouseleave', function () {
          a.style.setProperty('--ry', '0deg'); a.style.setProperty('--rx', '0deg');
          quitar = setTimeout(function () { a.classList.remove('tilt'); }, 500);
        });
      });
      root.querySelectorAll('.vtG-txt .vt-btn').forEach(function (b) {
        b.onmousemove = function (e) {
          var r = b.getBoundingClientRect();
          b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.25).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.35).toFixed(1) + 'px)';
        };
        b.onmouseleave = function () { b.style.transform = ''; };
      });
    }

    // Entrar a un caso: la tarjeta (un panel de color; no se estira ninguna imagen) crece hasta llenar
    // la pantalla y toma el color de fondo, la imagen se achica y se desvanece, y aparece el
    // encabezado del caso en el mismo lugar y tamaño que en su página. El navegador mantiene esta
    // pantalla hasta pintar la nueva, que empieza igual, así que no se nota el cambio.
    function entrar(e, card, href) {
      var site = document.querySelector('.site');
      if (!site || document.querySelector('.vtG-salida')) return;
      e.preventDefault();
      var h = HERO[href];
      if (!h || typeof h === 'string') h = { back: '← volver a proyectos', cat: '', t: CS[+card.dataset.k].t, sub: '' };
      var marco = card.querySelector('.vtG-img'), foto = marco.querySelector('img');
      var caja = function (r) { return 'left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px'; };
      var capa = document.createElement('div');
      capa.className = 'vtG-salida';
      capa.innerHTML = '<div class="vtG-panel" style="' + caja(card.getBoundingClientRect()) + '"></div>' +
        '<img class="vtG-foto" src="' + esc(foto.currentSrc || foto.src) + '" alt="" style="' + caja(marco.getBoundingClientRect()) + '">' +
        '<div class="vtG-hero"><div class="vh-wrap">' + (h.back ? '<span class="vh-back">' + esc(h.back) + '</span>' : '') +
        (h.cat ? '<div class="vh-cat">' + esc(h.cat) + '</div>' : '') + '<div class="vh-t">' + palabras(h.t) + '</div>' +
        (h.sub ? '<p class="vh-sub">' + esc(h.sub) + '</p>' : '') + '</div></div>';
      site.appendChild(capa);
      document.documentElement.classList.add('vtG-saliendo');
      cur.classList.remove('on');
      capa.getBoundingClientRect();
      capa.classList.add('go');
      // motion.js: la página del caso no vuelve a animar el encabezado que ya se vio armado y
      // tampoco se suma la transición entre páginas.
      try { sessionStorage.setItem('mx-llegada', new URL(href, location.href).pathname); } catch (err) {}
      window.mxSinTransicion = true;
      // Se navega cuando termina de subir la última palabra del título.
      setTimeout(function () { location.href = href; },Math.max(1100, 460 + (h.t.split(' ').length - 1) * 24 + 520));
    }
    var normal = function (e) { return reduce || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey; };
    root.querySelectorAll('.vtG-go').forEach(function (a) {
      a.addEventListener('click', function (e) { if (!normal(e)) entrar(e, a.closest('.vtG-card'), a.href); });
    });
    // Toda la tarjeta lleva al caso (salvo que se esté seleccionando texto).
    cards.forEach(function (c) {
      c.addEventListener('click', function (e) {
        if (e.target.closest('a') || String(window.getSelection ? window.getSelection() : '')) return;
        var href = c.querySelector('.vt-btn').href;
        if (e.metaKey || e.ctrlKey) window.open(href, '_blank');
        else if (normal(e)) location.href = href;
        else entrar(e, c, href);
      });
    });
  }
  // Al volver con "atrás", el navegador puede restaurar la portada con la capa de salida puesta.
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    document.documentElement.classList.remove('vtG-saliendo');
    [].forEach.call(document.querySelectorAll('.vtG-salida'), function (z) { z.parentNode.removeChild(z); });
  });

  // La portada la pinta un runtime de React que puede reemplazar el contenedor después de cargar
  // (y al cambiar tema o idioma). Se vigila y se vuelve a montar si aparece uno nuevo y vacío.
  setInterval(function () {
    var el = document.getElementById('vitrina-mount');
    if (!el || el.getAttribute('data-vt') === '1') return;
    el.setAttribute('data-vt', '1');
    el.classList.add('vt');
    G(el);
  }, 250);
})();
