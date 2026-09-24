/* Renderizador de la maqueta. Lee window.FORM (definido en data-*.js) y pinta el
   formulario por páginas, como lo haría Formstack. No envía ni guarda nada. */
(function () {
  var F = window.FORM;
  var uid = 0;
  var vals = {};

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function nid() { return 'f' + (++uid); }
  function qtag(it) { return it.q ? '<span class="qtag">Solo Quasar</span>' : ''; }
  function req(it) { return it.req ? '<span class="req">*</span>' : ''; }
  function help(it) { return it.help ? '<div class="help">' + esc(it.help) + '</div>' : ''; }

  function logicText(s) {
    var v = s.in ? s.in.join(' o ') : s.eq;
    return 'Lógica condicional: aparece si "' + s.label + '" es ' + v;
  }

  function showAttr(it) {
    return it.show ? ' data-show=\'' + JSON.stringify(it.show).replace(/'/g, '&#39;') + '\'' : '';
  }

  function wrapField(it, inner) {
    var cls = 'field' + (it.q ? ' qonly' : '');
    var attrs = showAttr(it);
    var lg = it.show ? '<div class="logic">' + esc(logicText(it.show)) + '</div>' : '';
    return '<div class="' + cls + '"' + attrs + '>' + lg + inner + '</div>';
  }

  function input(it, type) {
    var id = nid();
    var track = it.id ? ' data-id="' + it.id + '"' : '';
    var ph = it.ph ? ' placeholder="' + esc(it.ph) + '"' : '';
    var ctl;
    if (type === 'textarea') ctl = '<textarea id="' + id + '"' + ph + track + '></textarea>';
    else if (type === 'money') ctl = '<div class="money"><span>USD $</span><input type="number" step="0.01" id="' + id + '"' + ph + '></div>';
    else ctl = '<input type="' + type + '" id="' + id + '"' + ph + track + '>';
    return wrapField(it, '<label for="' + id + '">' + esc(it.label) + req(it) + qtag(it) + '</label>' + ctl + help(it));
  }

  function choice(it, kind) {
    var name = nid();
    var track = it.id ? ' data-id="' + it.id + '"' : '';
    var h = '<span class="lbl">' + esc(it.label) + req(it) + qtag(it) + '</span>';
    if (kind === 'select') {
      h += '<select' + track + '><option value="">Seleccione una opción</option>' +
        it.opts.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('') + '</select>';
    } else {
      var t = kind === 'radio' ? 'radio' : 'checkbox';
      h += '<div class="opts' + (it.inline ? ' inline' : '') + (it.cols ? ' cols2' : '') + '">' +
        it.opts.map(function (o) {
          return '<label><input type="' + t + '" name="' + name + '" value="' + esc(o) + '"' + track + '> ' + esc(o) + '</label>';
        }).join('') + '</div>';
    }
    return wrapField(it, h + help(it));
  }

  function fileBox(multi) {
    return '<div class="file"><span class="btn">Elegir archivo' + (multi ? 's' : '') + '</span>' +
      '<span class="fs">PDF, JPG o PNG' + (multi ? ', hasta 5 archivos' : '') + '</span></div>';
  }

  function matrix(it) {
    var cols = it.cols || ['Sí', 'No', 'N/A'];
    var check = it.check !== false;
    var head = '<tr><th>' + (it.head || 'Ítem') + '</th>' + cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') +
      (check ? '<th class="qonly">Check Quasar</th>' : '') + '</tr>';
    var body = it.rows.map(function (r) {
      if (r.charAt(0) === '#') return '<tr class="grp"><td colspan="' + (cols.length + 2) + '">' + esc(r.slice(1)) + '</td></tr>';
      var sub = r.charAt(0) === '>';
      var txt = sub ? r.slice(1) : r;
      var name = nid();
      return '<tr' + (sub ? ' class="sub"' : '') + '><td>' + esc(txt) + '</td>' +
        cols.map(function () { return '<td><input type="radio" name="' + name + '"></td>'; }).join('') +
        (check ? '<td class="qonly"><select><option></option><option>Sí</option><option>No</option><option>N/A</option></select></td>' : '') +
        '</tr>';
    }).join('');
    return wrapField(it, (it.label ? '<span class="lbl">' + esc(it.label) + qtag(it) + '</span>' : '') +
      '<div class="scroll"><table class="matrix">' + head + body + '</table></div>' + help(it));
  }

  function cell(c) {
    if (c.type === 'select') return '<select><option></option>' + c.opts.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('') + '</select>';
    if (c.type === 'date') return '<input type="date">';
    if (c.type === 'number') return '<input type="number">';
    if (c.type === 'check') return '<input type="checkbox">';
    return '<input type="text">';
  }

  function table(it) {
    var head = '<tr>' + (it.rows ? '<th>' + esc(it.rowHead || '') + '</th>' : '') +
      it.cols.map(function (c) { return '<th' + (c.q ? ' class="qonly"' : '') + '>' + esc(c.h) + '</th>'; }).join('') + '</tr>';
    var rows = it.rows || new Array(it.blank || 3).join('.').split('.');
    var body = rows.map(function (r) {
      return '<tr>' + (it.rows ? '<td class="rl">' + esc(r) + '</td>' : '') +
        it.cols.map(function (c) { return '<td' + (c.q ? ' class="qonly"' : '') + '>' + cell(c) + '</td>'; }).join('') + '</tr>';
    }).join('');
    return wrapField(it, '<span class="lbl">' + esc(it.label) + req(it) + qtag(it) + '</span>' +
      '<div class="scroll"><table class="ftable">' + head + body + '</table></div>' + help(it));
  }

  function doc(it) {
    var date = it.date ? '<div><span class="sm">' + esc(it.date) + '</span><input type="date"></div>' : '';
    var inner = '<div class="doc"><div class="dt">' + esc(it.label) + req(it) + qtag(it) + '</div>' +
      (it.help ? '<div class="dh">' + esc(it.help) + '</div>' : '') +
      '<div class="dgrid' + (date ? '' : ' one') + '">' + fileBox(it.multi) + date + '</div></div>';
    return wrapField(it, inner);
  }

  function render(it) {
    switch (it.t) {
      case 'section':
        return '<div class="section' + (it.q ? ' qonly' : '') + '"' + showAttr(it) + '><h3>' + esc(it.title) + qtag(it) + '</h3>' +
          (it.desc ? '<p>' + esc(it.desc) + '</p>' : '') + '</div>';
      case 'note': return '<div class="note' + (it.q ? ' qonly' : '') + '">' + esc(it.text) + '</div>';
      case 'text': case 'email': case 'tel': case 'date': case 'number': case 'url': case 'textarea': case 'money':
        return input(it, it.t);
      case 'select': case 'radio': case 'checks': return choice(it, it.t);
      case 'file': return wrapField(it, '<span class="lbl">' + esc(it.label) + req(it) + qtag(it) + '</span>' + fileBox(it.multi) + help(it));
      case 'doc': return doc(it);
      case 'matrix': return matrix(it);
      case 'table': return table(it);
      case 'consent':
        return wrapField(it, '<div class="opts"><label><input type="checkbox"> ' + esc(it.label) + req(it) + '</label></div>');
      case 'signature':
        return wrapField(it, '<span class="lbl">' + esc(it.label) + req(it) + qtag(it) + '</span><div class="sig"><span></span><em>Firme aquí</em></div>' + help(it));
      case 'row':
        return '<div class="row' + (it.items.length === 3 ? ' row3' : '') + '">' + it.items.map(render).join('') + '</div>';
      case 'group':
        return '<div class="qwrap' + (it.q ? ' qonly' : '') + '">' + it.items.map(render).join('') + '</div>';
    }
    return '';
  }

  /* Pintado */
  document.title = F.title + ' · Maqueta Formstack';
  var n = F.pages.length;
  var html = '';
  html += '<div class="fhead"><div class="org">' + esc(F.org) + '</div><h1>' + esc(F.title) + '</h1><p>' + esc(F.intro) + '</p></div>';
  html += '<div class="progress"><div class="txt"><span id="ptxt"></span><span id="ppct"></span></div><div class="bar"><div class="fill" id="pfill"></div></div></div>';
  html += '<div class="steps" id="steps">' + F.pages.map(function (p, i) {
    return '<button data-go="' + i + '">' + esc(p.short || p.title) + '</button>';
  }).join('') + '</div>';
  F.pages.forEach(function (p, i) {
    html += '<div class="page' + (p.q ? ' qonly' : '') + '" data-p="' + i + '"><h2 class="ptitle">' + esc(p.title) + (p.q ? '<span class="qtag">Solo Quasar</span>' : '') + '</h2>' +
      p.items.map(function (it) {
        if (it.t === 'section' && it.title === p.title) return it.desc ? '<p class="pdesc">' + esc(it.desc) + '</p>' : '';
        return render(it);
      }).join('') + '</div>';
  });
  html += '<div class="nav"><button class="b prev" id="prev">Página anterior</button><button class="save" id="save">Guardar y continuar después</button>' +
    '<button class="b next" id="next">Página siguiente</button><button class="b submit" id="submit">Enviar formulario</button></div>';
  html += '<div class="thanks" id="thanks"><h2>Gracias, recibimos su expediente.</h2><p>Operaciones de Quasar Expeditions revisará la información y coordinará la visita de verificación.</p></div>';
  document.getElementById('form').innerHTML = html;

  var cur = 0;
  function visiblePages() {
    var vq = document.body.classList.contains('vq');
    return F.pages.map(function (p, i) { return (!p.q || vq) ? i : -1; }).filter(function (i) { return i >= 0; });
  }
  function go(i) {
    var vis = visiblePages();
    if (vis.indexOf(i) < 0) i = vis[Math.min(vis.length - 1, Math.max(0, vis.indexOf(cur)))];
    cur = i;
    var pos = vis.indexOf(i);
    document.querySelectorAll('.page').forEach(function (el) { el.classList.toggle('on', +el.dataset.p === i); });
    document.querySelectorAll('#steps button').forEach(function (b) {
      var k = +b.dataset.go;
      b.classList.toggle('on', k === i);
      b.style.display = vis.indexOf(k) < 0 ? 'none' : '';
    });
    document.getElementById('ptxt').textContent = 'Página ' + (pos + 1) + ' de ' + vis.length;
    document.getElementById('ppct').textContent = Math.round((pos + 1) / vis.length * 100) + '%';
    document.getElementById('pfill').style.width = ((pos + 1) / vis.length * 100) + '%';
    document.getElementById('prev').style.visibility = pos === 0 ? 'hidden' : 'visible';
    document.getElementById('next').style.display = pos === vis.length - 1 ? 'none' : '';
    document.getElementById('submit').style.display = pos === vis.length - 1 ? '' : 'none';
  }
  function step(d) {
    var vis = visiblePages();
    var pos = vis.indexOf(cur) + d;
    if (pos >= 0 && pos < vis.length) { go(vis[pos]); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  }
  document.getElementById('prev').onclick = function () { step(-1); };
  document.getElementById('next').onclick = function () { step(1); };
  document.getElementById('steps').onclick = function (e) { var b = e.target.closest('button'); if (b) go(+b.dataset.go); };

  var toastT;
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('on'); }, 2600);
  }
  document.getElementById('save').onclick = function () {
    toast('En Formstack esto genera un enlace para seguir después (30 días). En la maqueta no se guarda nada.');
  };
  document.getElementById('submit').onclick = function () {
    document.querySelectorAll('.page,.progress,.steps,.nav').forEach(function (el) { el.style.display = 'none'; });
    document.getElementById('thanks').style.display = 'block';
    window.scrollTo({ top: 0 });
  };

  /* Lógica condicional */
  function readVals() {
    vals = {};
    document.querySelectorAll('[data-id]').forEach(function (el) {
      var k = el.dataset.id;
      if (el.type === 'radio' || el.type === 'checkbox') { if (el.checked) vals[k] = el.value; }
      else vals[k] = el.value;
    });
  }
  function applyLogic() {
    readVals();
    document.querySelectorAll('[data-show]').forEach(function (el) {
      var s = JSON.parse(el.dataset.show);
      var v = vals[s.id];
      var ok = s.in ? s.in.indexOf(v) >= 0 : v === s.eq;
      el.style.display = ok ? '' : 'none';
    });
  }
  document.getElementById('form').addEventListener('change', applyLogic);

  /* Vistas */
  function setView(v) {
    document.body.classList.toggle('vq', v === 'q');
    document.querySelectorAll('.views button').forEach(function (b) { b.classList.toggle('on', b.dataset.v === v); });
    go(cur);
  }
  document.querySelectorAll('.views button').forEach(function (b) { b.onclick = function () { setView(b.dataset.v); }; });

  applyLogic();
  setView(location.hash === '#quasar' ? 'q' : 'p');
})();
