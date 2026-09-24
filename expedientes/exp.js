/* Renderizador de la maqueta. Lee window.FORM (data-*.js) y lo pinta usando solo los tipos de
   campo que existen en Formstack: Short/Long Answer, Email, Phone, Number, Date, Dropdown, Radio,
   Checkbox, File Upload, Matrix, Fillable Table, Signature, Section y Description Area.
   Lo que no existe en Formstack se traduce a su equivalente real:
   - la columna "Check Quasar" pasa a ser un Matrix oculto aparte (un Matrix tiene un solo tipo de columna)
   - los grupos dentro de una lista pasan a ser Matrix separados (el Matrix no tiene filas de título)
   - las fechas dentro de tablas van como texto (la Fillable Table no acepta columnas de fecha)
   No envía ni guarda nada. */
(function () {
  var F = window.FORM;
  var uid = 0;
  var HID = '<span class="hidTag">Campo oculto</span>';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function nid() { return 'f' + (++uid); }
  function req(it) { return it.req ? '<span class="fsReq">*</span>' : ''; }
  function help(it) { return it.help ? '<span class="fsHelp">' + esc(it.help) + '</span>' : ''; }
  function showAttr(it) {
    return it.show ? ' data-show=\'' + JSON.stringify(it.show).replace(/'/g, '&#39;') + '\'' : '';
  }
  function label(it, forId) {
    var tag = forId ? 'label for="' + forId + '"' : 'span';
    return '<' + tag + ' class="fsLabel">' + esc(it.label) + req(it) + (it.q ? HID : '') + '</' + (forId ? 'label' : 'span') + '>';
  }
  function wrap(it, inner) {
    return '<div class="fsField' + (it.q ? ' hid' : '') + '"' + showAttr(it) + '>' + inner + '</div>';
  }

  function input(it) {
    var id = nid();
    var track = it.id ? ' data-id="' + it.id + '"' : '';
    var ph = it.ph ? ' placeholder="' + esc(it.ph) + '"' : '';
    var ctl;
    switch (it.t) {
      case 'textarea': ctl = '<textarea id="' + id + '"' + ph + track + '></textarea>'; break;
      case 'money': ctl = '<div class="fsCur"><span>$</span><input type="number" step="0.01" id="' + id + '"></div>'; break;
      case 'date': ctl = '<input type="text" id="' + id + '" placeholder="dd/mm/aaaa">'; break;
      default: ctl = '<input type="' + it.t + '" id="' + id + '"' + ph + track + '>';
    }
    return wrap(it, label(it, id) + ctl + help(it));
  }

  function choice(it) {
    var name = nid();
    var track = it.id ? ' data-id="' + it.id + '"' : '';
    var h = label(it);
    if (it.t === 'select') {
      h += '<select' + track + '><option value=""></option>' +
        it.opts.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('') + '</select>';
    } else {
      var type = it.t === 'radio' ? 'radio' : 'checkbox';
      h += '<div class="fsOpts' + (it.inline ? ' h' : '') + '">' + it.opts.map(function (o) {
        return '<label><input type="' + type + '" name="' + name + '" value="' + esc(o) + '"' + track + '>' + esc(o) + '</label>';
      }).join('') + '</div>';
    }
    return wrap(it, h + help(it));
  }

  function fileField(it) {
    return wrap(it, label(it) + '<div class="fsFile">Arrastre el archivo aquí o <u>búsquelo en su equipo</u>' +
      '<small>PDF, JPG o PNG' + (it.multi ? ' · varios archivos' : '') + '</small></div>' + help(it));
  }

  function matrixOne(lbl, rows, cols, base) {
    var head = '<thead><tr><th></th>' + cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead>';
    var body = rows.map(function (r) {
      var name = nid();
      return '<tr><td>' + esc(r) + '</td>' + cols.map(function () {
        return '<td><input type="radio" name="' + name + '"></td>';
      }).join('') + '</tr>';
    }).join('');
    var it = { label: lbl, q: base.q, show: base.show, help: base.help, req: base.req };
    return wrap(it, (lbl ? label(it) : '') + '<div class="scroll"><table class="fsMatrix">' + head + '<tbody>' + body + '</tbody></table></div>' + help(it));
  }

  /* Un Matrix por grupo; si lleva verificación, un Matrix oculto gemelo después de cada uno */
  function matrix(it) {
    var cols = it.cols || ['Sí', 'No', 'N/A'];
    var chunks = [];
    var cur = { label: it.label || '', rows: [] };
    it.rows.forEach(function (r) {
      if (r.charAt(0) === '#') {
        if (cur.rows.length) chunks.push(cur);
        cur = { label: r.slice(1), rows: [] };
      } else cur.rows.push(r.charAt(0) === '>' ? r.slice(1) : r);
    });
    if (cur.rows.length) chunks.push(cur);
    var check = it.check !== false && !it.q;
    return chunks.map(function (c) {
      var out = matrixOne(c.label, c.rows, cols, it);
      if (check) {
        out += matrixOne('Verificación Quasar' + (c.label ? ', ' + c.label.toLowerCase() : ''), c.rows, ['Sí', 'No', 'N/A'], { q: true, show: it.show });
      }
      return out;
    }).join('');
  }

  function cell(c) {
    if (c.type === 'select') return '<select><option></option>' + c.opts.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('') + '</select>';
    if (c.type === 'check') return '<select><option></option><option>Sí</option><option>No</option></select>';
    if (c.type === 'date') return '<input type="text" placeholder="dd/mm/aaaa">';
    if (c.type === 'number') return '<input type="number">';
    return '<input type="text">';
  }
  function tableOne(it, cols) {
    var head = '<tr>' + (it.rows ? '<th>' + esc(it.rowHead || '') + '</th>' : '') +
      cols.map(function (c) { return '<th>' + esc(c.h) + '</th>'; }).join('') + '</tr>';
    var rows = it.rows || Array.apply(null, Array(it.blank || 3)).map(function () { return ''; });
    var body = rows.map(function (r) {
      return '<tr>' + (it.rows ? '<td class="rl">' + esc(r) + '</td>' : '') +
        cols.map(function (c) { return '<td>' + cell(c) + '</td>'; }).join('') + '</tr>';
    }).join('');
    return wrap(it, label(it) + '<div class="scroll"><table class="fsTable">' + head + body + '</table></div>' + help(it));
  }
  /* Las columnas de Quasar salen a una Fillable Table oculta aparte */
  function table(it) {
    var pub = it.cols.filter(function (c) { return !c.q; });
    var priv = it.cols.filter(function (c) { return c.q; });
    var out = tableOne(it, pub);
    if (priv.length) out += tableOne({ label: 'Verificación Quasar, ' + it.label.toLowerCase(), rows: it.rows, rowHead: it.rowHead, q: true }, priv);
    return out;
  }

  function withQ(list, q) { return q ? list.map(function (x) { var y = Object.assign({}, x); y.q = true; return y; }) : list; }

  function render(it) {
    switch (it.t) {
      case 'section':
        return '<div class="fsSection' + (it.q ? ' hid' : '') + '"' + showAttr(it) + '><h2>' + esc(it.title) + (it.q ? HID : '') + '</h2>' +
          (it.desc ? '<div class="fsSectionText">' + esc(it.desc) + '</div>' : '') + '</div>';
      case 'note': return '<div class="fsDesc' + (it.q ? ' hid' : '') + '">' + esc(it.text) + (it.q ? HID : '') + '</div>';
      case 'text': case 'email': case 'tel': case 'date': case 'number': case 'url': case 'textarea': case 'money':
        return input(it);
      case 'select': case 'radio': case 'checks': return choice(it);
      case 'file': return fileField(it);
      case 'doc':
        var f = { t: 'file', label: it.label, req: it.req, help: it.help, q: it.q, show: it.show, multi: it.multi };
        if (!it.date) return fileField(f);
        return '<div' + showAttr(it) + '>' + fileField(f) + input({ t: 'date', label: it.date, req: it.req, q: it.q }) + '</div>';
      case 'matrix': return matrix(it);
      case 'table': return table(it);
      case 'consent':
        return wrap(it, '<div class="fsOpts"><label><input type="checkbox">' + esc(it.label) + req(it) + '</label></div>');
      case 'signature':
        return wrap(it, label(it) + '<div class="fsSig"><i></i><a>Borrar</a></div>' + help(it));
      case 'row':
        return '<div class="fsCols">' + it.items.map(render).join('') + '</div>';
      case 'group':
        return withQ(it.items, it.q).map(render).join('');
    }
    return '';
  }

  /* Pintado */
  document.title = F.title + ' · Maqueta Formstack';
  var html = '';
  F.pages.forEach(function (p, i) {
    html += '<div class="fsPage' + (p.q ? ' hid' : '') + '" data-p="' + i + '">';
    if (i === 0) html += '<div class="fsHeader"><h1>' + esc(F.title) + '</h1><p>' + esc(F.intro) + '</p></div>';
    html += '<div class="fsProgress"><div class="txt"></div><div class="bar"><div class="fill"></div></div></div>';
    var first = p.items[0];
    if (!(first && first.t === 'section')) {
      html += render({ t: 'section', title: p.title, q: p.q });
    }
    html += withQ(p.items, p.q).map(render).join('') + '</div>';
  });
  html += '<div class="fsFooter" id="footer"><button type="button" class="fsBtn" id="prev">Página anterior</button>' +
    '<button type="button" class="fsBtn" id="next">Página siguiente</button><button type="button" class="fsBtn" id="submit">Enviar formulario</button>' +
    '<div class="fsSave"><button type="button" id="save">Guardar y continuar después</button></div></div>';
  html += '<div class="fsThanks" id="thanks"><h2>Gracias, recibimos su expediente.</h2><p>Operaciones de Quasar Expeditions revisará la información y coordinará la visita de verificación.</p></div>';
  document.getElementById('form').innerHTML = html;

  var cur = 0;
  function visible() {
    var all = document.body.classList.contains('showhid');
    return F.pages.map(function (p, i) { return (!p.q || all) ? i : -1; }).filter(function (i) { return i >= 0; });
  }
  function go(i) {
    var vis = visible();
    if (vis.indexOf(i) < 0) i = vis[vis.length - 1];
    cur = i;
    var pos = vis.indexOf(i);
    var pct = Math.round((pos + 1) / vis.length * 100);
    document.querySelectorAll('.fsPage').forEach(function (el) {
      var on = +el.dataset.p === i;
      el.classList.toggle('on', on);
      if (on) {
        el.querySelector('.fsProgress .txt').textContent = 'Página ' + (pos + 1) + ' de ' + vis.length;
        el.querySelector('.fsProgress .fill').style.width = pct + '%';
      }
    });
    document.getElementById('prev').style.display = pos === 0 ? 'none' : '';
    document.getElementById('next').style.display = pos === vis.length - 1 ? 'none' : '';
    document.getElementById('submit').style.display = pos === vis.length - 1 ? '' : 'none';
  }
  function step(d) {
    var vis = visible();
    var pos = vis.indexOf(cur) + d;
    if (pos >= 0 && pos < vis.length) { go(vis[pos]); window.scrollTo({ top: 0 }); }
  }
  document.getElementById('prev').onclick = function () { step(-1); };
  document.getElementById('next').onclick = function () { step(1); };

  var toastT;
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('on'); }, 2800);
  }
  document.getElementById('save').onclick = function () {
    toast('En Formstack esto genera un enlace para seguir después (30 días). En la maqueta no se guarda nada.');
  };
  document.getElementById('submit').onclick = function () {
    document.querySelectorAll('.fsPage,#footer').forEach(function (el) { el.style.display = 'none'; });
    document.getElementById('thanks').style.display = 'block';
    window.scrollTo({ top: 0 });
  };

  /* Lógica condicional, como la de Formstack */
  function applyLogic() {
    var vals = {};
    document.querySelectorAll('[data-id]').forEach(function (el) {
      if (el.type === 'radio' || el.type === 'checkbox') { if (el.checked) vals[el.dataset.id] = el.value; }
      else vals[el.dataset.id] = el.value;
    });
    document.querySelectorAll('[data-show]').forEach(function (el) {
      var s = JSON.parse(el.dataset.show);
      var ok = s.in ? s.in.indexOf(vals[s.id]) >= 0 : vals[s.id] === s.eq;
      el.style.display = ok ? '' : 'none';
    });
  }
  document.getElementById('form').addEventListener('change', applyLogic);

  var chk = document.getElementById('showhid');
  function setHid() { document.body.classList.toggle('showhid', chk.checked); go(cur); }
  chk.onchange = setHid;
  if (location.hash === '#ocultos') chk.checked = true;
  applyLogic();
  setHid();
})();
