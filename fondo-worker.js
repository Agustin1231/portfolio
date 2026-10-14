/* Dibuja los fondos animados (la constelación .bg3d y el campo ASCII del inicio) dentro de un
   Worker, sobre un OffscreenCanvas: los cuadros van directo al compositor y el hilo principal queda
   libre para el scroll y las interacciones. El dibujo es el mismo que tenían startBg3d y startAscii
   en las páginas (mismas constantes y la misma cuenta); lo arranca y lo alimenta fondo.js.
   m.alfa es la opacidad que el canvas tenía en el CSS (0.6): se aplica a cada trazo en vez de a la
   capa entera, porque una capa semitransparente le cuesta al compositor una pasada extra por cuadro. */
var raf = self.requestAnimationFrame ? self.requestAnimationFrame.bind(self) : function (f) { return setTimeout(function () { f(performance.now()); }, 1000 / 30); };
var fondo = null;

self.onmessage = function (e) {
  var m = e.data;
  if (m.t === 'init') { fondo = (m.tipo === 'ascii' ? ascii : constelacion)(m); return; }
  if (!fondo) return;
  if (m.t === 'tam') fondo.tam(m.w, m.h);
  else if (m.t === 'puntero') fondo.puntero(m.x, m.y);
  else if (m.t === 'progreso') fondo.progreso(m.p);
  else if (m.t === 'tema') fondo.tema(m.light);
  else if (m.t === 'visible') fondo.visible(m.v);
};

/* ---------- Constelación (.bg3d): puntos en 3D que se recorren al bajar por la página ---------- */
function constelacion(m) {
  var cv = m.canvas, ctx = cv.getContext('2d'), still = m.still, dpr = m.dpr, light = m.light, alfa = m.alfa;
  var w = 0, h = 0, mx = 0, my = 0, p = m.p || 0, activo = true, id = 0;
  var DEPTH = 15, NEAR = 0.25, FAR = 7, TRAVEL = 24;
  var pts = []; for (var i = 0; i < 300; i++) pts.push({ x: (Math.random() * 2 - 1) * 1.9, y: (Math.random() * 2 - 1) * 1.9, z: Math.random() * DEPTH, r: 0.55 + Math.random() * 0.9 });
  var t = 0, smoothP = 0, last = 0, FRAME = 1000 / 30;
  var accCss = 'rgb(' + m.acc[0] + ',' + m.acc[1] + ',' + m.acc[2] + ')';
  function byZ(a, b) { return a.z - b.z; }
  function tam(W, H) { w = W; h = H; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); if (still) draw(0); }
  function draw(now) {
    // ~30 fps y avance por tiempo real, como en la versión original.
    if (!still) { if (!activo) { id = 0; return; } id = raf(draw); if (now - last < FRAME - 1) return; }
    var k = last ? Math.min(now - last, 100) / 16.667 : 1; last = now;
    ctx.clearRect(0, 0, w, h);
    smoothP = still ? p : smoothP + (p - smoothP) * (1 - Math.pow(0.92, k));
    var camZ = smoothP * TRAVEL + t * 0.05;
    var twist = smoothP * 1.5 + t * 0.02 + mx * 0.35;
    var R = Math.min(w, h) * 0.78, f = 1.35, cx = w * 0.5 + mx * 42, cy = h * 0.5 + my * 30, ct = Math.cos(twist), st = Math.sin(twist);
    var scr = [];
    for (var i = 0; i < pts.length; i++) {
      var pt = pts[i]; var pz = pt.z - camZ;
      while (pz < NEAR) { pt.z += DEPTH; pz = pt.z - camZ; }
      while (pz > DEPTH + NEAR) { pt.z -= DEPTH; pz = pt.z - camZ; }
      if (pz < NEAR || pz > FAR) continue;
      var rx = pt.x * ct - pt.y * st, ry = pt.x * st + pt.y * ct, s = f / pz;
      var depthT = 1 - (pz - NEAR) / (FAR - NEAR); var a = depthT; if (pz < 0.8) a *= Math.max(0, pz / 0.8);
      scr.push({ x: cx + rx * s * R, y: cy + ry * s * R, z: pz, a: a, d: depthT, r: pt.r });
    }
    scr.sort(byZ);
    var thr = R * 0.17, thr2 = thr * thr, la = (light ? 0.34 : 0.52) * alfa; ctx.lineWidth = 1; ctx.strokeStyle = accCss; ctx.fillStyle = accCss;
    for (var i = 0; i < scr.length; i++) {
      var A = scr[i];
      for (var j = i + 1; j < scr.length; j++) {
        var B = scr[j]; if (B.z - A.z > 1.6) break;
        var dx = A.x - B.x, dy = A.y - B.y, dd = dx * dx + dy * dy; if (dd > thr2) continue;
        var prox = 1 - Math.sqrt(dd) / thr; var al = prox * Math.min(A.a, B.a) * la; if (al < 0.012) continue;
        ctx.globalAlpha = al; ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
      }
    }
    for (var i = 0; i < scr.length; i++) { var A = scr[i]; ctx.globalAlpha = A.a * (light ? 0.55 : 0.85) * alfa; var sz = A.r * (0.5 + A.d * 2.6); ctx.beginPath(); ctx.arc(A.x, A.y, sz, 0, 6.2832); ctx.fill(); }
    ctx.globalAlpha = 1;
    t += 0.016 * k;
  }
  tam(m.w, m.h);
  if (!still) id = raf(draw);
  return {
    tam: tam,
    puntero: function (x, y) { mx = x; my = y; },
    progreso: function (v) { p = v; },
    tema: function (l) { light = l; if (still) draw(0); },
    visible: function (v) { activo = v; if (v && !id && !still) { last = 0; id = raf(draw); } }
  };
}

/* ---------- Campo ASCII del inicio: ondas de caracteres que se encienden cerca del puntero ---------- */
function ascii(m) {
  var cv = m.canvas, ctx = cv.getContext('2d'), still = m.still, dpr = m.dpr, light = m.light, alfa = m.alfa;
  var ramp = ' .·:-=+*#%@', cell = m.cell, w = 0, h = 0, cols = 0, rows = 0;
  var mx = -999, my = -999, t = 0, last = 0, FRAME = 1000 / 30, colS = [], rowS = [], diagS = [];
  var accCss = 'rgb(' + m.acc[0] + ',' + m.acc[1] + ',' + m.acc[2] + ')', vis = true, id = 0;
  var FUENTE = "'JetBrains Mono',monospace";
  function tam(W, H) { w = W; h = H; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); cols = Math.ceil(w / cell); rows = Math.ceil(h / cell); ctx.font = cell + 'px ' + FUENTE; ctx.textBaseline = 'top'; if (still) draw(0); }
  function draw(now) {
    if (!vis) { id = 0; return; }
    // ~30 fps y avance por tiempo real, como en la versión original.
    if (!still) { id = raf(draw); if (now - last < FRAME - 1) return; }
    var k = last ? Math.min(now - last, 100) / 16.667 : 1; last = now;
    var baseCss = light ? 'rgb(20,18,15)' : 'rgb(236,234,228)';
    var baseA = light ? 0.06 : 0.09, baseM = light ? 0.14 : 0.20;
    ctx.clearRect(0, 0, w, h);
    var cx, cy, top = ramp.length - 1;
    for (cx = 0; cx < cols; cx++) colS[cx] = Math.sin(cx * cell * 0.018 + t * 0.6);
    for (cy = 0; cy < rows; cy++) rowS[cy] = Math.sin(cy * cell * 0.026 - t * 0.45);
    for (cx = 0; cx < cols + rows; cx++) diagS[cx] = Math.sin(cx * cell * 0.013 + t * 0.9);
    var mode = 0; ctx.fillStyle = baseCss;
    for (cy = 0; cy < rows; cy++) {
      var y = cy * cell, dy = y - my, dy2 = dy * dy, rs = rowS[cy];
      for (cx = 0; cx < cols; cx++) {
        var x = cx * cell;
        var v = (colS[cx] + rs + diagS[cx + cy] + 3) / 6;
        var dx = x - mx, dd = dx * dx + dy2;
        var infl = dd < 40000 ? 1 - Math.sqrt(dd) / 200 : 0;
        var val = Math.min(1, v * (0.7 + infl * 0.9) + infl * 0.35);
        var idx = Math.floor(val * top);
        if (idx === 0) continue;
        if (infl > 0.12) { if (mode !== 1) { ctx.fillStyle = accCss; mode = 1; } ctx.globalAlpha = Math.min(0.95, 0.25 + infl * 0.75) * alfa; }
        else { if (mode !== 0) { ctx.fillStyle = baseCss; mode = 0; } ctx.globalAlpha = (baseA + val * baseM) * alfa; }
        ctx.fillText(ramp[idx], x, y);
      }
    }
    ctx.globalAlpha = 1;
    t += 0.008 * k;
  }
  // El Worker no ve las fuentes de la página: carga la misma JetBrains Mono (hasta entonces, monospace).
  if (self.FontFace && self.fonts) {
    var fuente = new FontFace('JetBrains Mono', 'url(/fonts/jetbrains-mono-v24-latin.woff2)', { weight: '400 700' });
    self.fonts.add(fuente);
    fuente.load().then(function () { ctx.font = cell + 'px ' + FUENTE; if (still) draw(0); }).catch(function () {});
  }
  tam(m.w, m.h);
  if (!still) id = raf(draw);
  return {
    tam: tam,
    puntero: function (x, y) { mx = x; my = y; },
    progreso: function () {},
    tema: function (l) { light = l; if (still) draw(0); },
    visible: function (v) { vis = v; if (v && !id && !still) { last = 0; id = raf(draw); } }
  };
}
