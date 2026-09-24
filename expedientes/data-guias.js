/* Expediente de proveedor, Guía de turismo (Continente). Estructura tomada del Excel de Quasar, campo por campo. */
var SN = ['Sí', 'No', 'N/A'];
var ESTADO = ['Vigente', 'Por vencer', 'Vencido', 'No presentado', 'No aplica'];
var NIVEL = ['A1 (Principiante)', 'A2 (Básico)', 'B1 (Pre-intermedio)', 'B2 (Intermedio alto)', 'C1 (Avanzado)', 'C2 (Maestría)', 'Lengua materna'];
var CONDUCE = { id: 'conduce', eq: 'Sí', label: '¿Conduce vehículo en servicios de Quasar?' };
var ALTITUD = { id: 'altitud', eq: 'Sí', label: '¿Opera en altitud, aventura o expediciones de varios días?' };
window.FORM = {
  org: 'Quasar Expeditions · Expediciones Wayrarouters S.A.',
  title: 'Expediente de proveedor, Guía de turismo',
  intro: 'Formulario anual para guías de turismo que operan con Quasar Expeditions en el continente. Tenga a mano sus documentos en PDF o foto. Puede guardar su avance y continuar después. Los campos con * son obligatorios.',
  pages: [
    {
      title: 'Datos personales', short: 'Datos',
      items: [
        { t: 'section', title: 'Datos personales del guía' },
        { t: 'date', label: 'Fecha', req: true },
        { t: 'text', label: 'Nombres y apellidos completos', req: true },
        { t: 'row', items: [{ t: 'text', label: 'Cédula de identidad', req: true }, { t: 'text', label: 'Nacionalidad', req: true }] },
        { t: 'row', items: [{ t: 'date', label: 'Fecha de nacimiento', req: true }, { t: 'select', label: 'Género', opts: ['Femenino', 'Masculino', 'Otro', 'Prefiere no decir'] }] },
        { t: 'row', items: [{ t: 'tel', label: 'Teléfono / celular', req: true }, { t: 'email', label: 'Email', req: true }] },
        { t: 'text', label: 'Dirección', req: true },
        { t: 'row', items: [{ t: 'text', label: 'Ciudad de residencia', req: true }, { t: 'text', label: 'Provincia', req: true }] },
        { t: 'radio', id: 'conduce', label: '¿Conduce vehículo en servicios de Quasar?', req: true, inline: true, opts: ['Sí', 'No'] },
        { t: 'row', items: [
          { t: 'text', label: 'Licencia de conducir (tipo)', req: true, show: CONDUCE },
          { t: 'date', label: 'Vigencia de la licencia', req: true, show: CONDUCE }
        ] },
        { t: 'group', q: true, items: [{ t: 'file', q: true, label: 'Foto del guía', help: 'La inserta Quasar.' }] },
        { t: 'section', title: 'Datos de emergencia' },
        { t: 'note', text: 'Uso exclusivo de operaciones. Se tratan conforme a la Ley Orgánica de Protección de Datos Personales.' },
        { t: 'row', items: [{ t: 'text', label: 'Contacto de emergencia (nombre)', req: true }, { t: 'text', label: 'Parentesco', req: true }] },
        { t: 'row', items: [{ t: 'tel', label: 'Teléfono de emergencia', req: true }, { t: 'select', label: 'Tipo de sangre', opts: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'No sabe'] }] },
        { t: 'consent', label: 'Autorizo a Quasar Expeditions a tratar mis datos de emergencia para fines operativos.', req: true }
      ]
    },
    {
      title: 'Documentos legales y tributarios', short: 'Documentos',
      items: [
        { t: 'section', title: 'Documentos legales y tributarios', desc: 'Suba cada documento en PDF o foto legible. Fuente: Reglamento de Guianza Turística, Acuerdo Interministerial MAATE-MINTUR-2025-002 (oct. 2025).' },
        { t: 'radio', id: 'altitud', label: '¿Opera en altitud, aventura o expediciones de varios días?', req: true, inline: true, opts: ['Sí', 'No'] },
        { t: 'doc', label: 'Cédula de identidad vigente', req: true },
        { t: 'doc', label: 'RUC vigente', req: true, help: 'Debe constar la actividad económica guianza turística.' },
        { t: 'doc', label: 'Credencial de guía de turismo MINTUR vigente', req: true, help: 'Vigencia de 4 años.', date: 'Fecha de vencimiento' },
        { t: 'doc', label: 'Certificado de primeros auxilios vigente', req: true, help: 'Obligatorio para todas las categorías.', date: 'Fecha de vencimiento' },
        { t: 'doc', label: 'Certificado de no constar en el Registro de Incumplimiento MINTUR', req: true },
        { t: 'doc', label: 'Certificado de antecedentes penales / récord policial', req: true, date: 'Fecha de emisión' },
        { t: 'doc', label: 'Declaratoria de compromiso contra la ESNNA firmada', req: true, help: 'Explotación sexual de niñas, niños y adolescentes en el ámbito turístico.' },
        { t: 'doc', label: 'Certificado de cumplimiento tributario (SRI)', req: true },
        { t: 'doc', label: 'Afiliación al IESS como trabajador autónomo', req: true, help: 'Comprobante de aportes al día.' },
        { t: 'doc', label: 'Licencia de conducir vigente', req: true, show: CONDUCE },
        { t: 'doc', label: 'Certificado médico de aptitud física vigente', req: true, show: ALTITUD, date: 'Fecha de vencimiento' },
        { t: 'doc', label: 'Contrato de prestación de servicios firmado con Quasar', req: true, date: 'Vigente hasta' },
        { t: 'doc', label: 'Acuerdo de confidencialidad y tratamiento de datos (LOPDP) firmado', req: true },
        { t: 'group', q: true, items: [
          { t: 'matrix', q: true, label: 'Verificación de documentos', head: 'Documento', cols: ['Cumple', 'No cumple', 'N/A'], check: false, rows: [
            'Cédula', 'RUC', 'Credencial MINTUR', 'Primeros auxilios', 'Registro de Incumplimiento MINTUR', 'Antecedentes penales',
            'Declaratoria ESNNA', 'Cumplimiento tributario SRI', 'Afiliación IESS', 'Licencia de conducir', 'Certificado médico',
            'Contrato con Quasar', 'Acuerdo LOPDP'
          ] }
        ] }
      ]
    },
    {
      title: 'Clasificación, credencial y autorizaciones', short: 'Credencial',
      items: [
        { t: 'section', title: 'Clasificación y credencial, Ministerio de Turismo', desc: 'Según Acuerdo Interministerial 002-2022 y Reglamento Continental 2025.' },
        { t: 'radio', id: 'clasif', label: 'Clasificación del guía', req: true, opts: ['Guía Local de Turismo', 'Guía Nacional de Turismo', 'Guía Nacional Especializado, Patrimonio Turístico', 'Guía Nacional Especializado, Aventura'],
          help: 'Local: bachiller, curso específico y 3 años de residencia en la localidad. Nacional: título universitario en turismo o afín, idioma B1 y primeros auxilios. Especializado: competencias certificadas QUALITUR o título afín, más certificación de la habilidad.' },
        { t: 'row', items: [{ t: 'text', label: 'No. credencial MINTUR', req: true }, { t: 'date', label: 'Fecha de emisión', req: true }] },
        { t: 'row', items: [{ t: 'date', label: 'Fecha de vencimiento', req: true }, { t: 'select', q: true, label: 'Estado de la credencial', opts: ESTADO }] },
        { t: 'table', label: 'Autorizaciones adicionales por área', rowHead: 'Autorización o permiso',
          help: 'Complete solo las que tenga. Registre número y vencimiento de cada una.',
          rows: ['Guianza en Áreas Protegidas (MAATE)', 'PAAT, Permiso Ambiental de Actividad Turística', 'Credencial de guía especializado en aventura', 'Carné o autorización municipal para centros históricos', 'Otra'],
          cols: [{ h: 'No. / referencia' }, { h: 'Emisión', type: 'date' }, { h: 'Vencimiento', type: 'date' }, { h: 'Estado', type: 'select', opts: ESTADO, q: true }] },
        { t: 'file', label: 'Copias de las autorizaciones', multi: true }
      ]
    },
    {
      title: 'Seguros y coberturas', short: 'Seguros',
      items: [
        { t: 'section', title: 'Seguros y coberturas', desc: 'El guía trabaja bajo su propia responsabilidad profesional. Adjunte copia de las pólizas vigentes.' },
        { t: 'table', label: 'Pólizas', rowHead: 'Tipo de seguro',
          rows: ['Accidentes personales', 'Responsabilidad civil profesional', 'Seguro médico o asistencia en viaje', 'Cobertura para aventura (si aplica)', 'Vehículo propio, SPPAT y responsabilidad civil', 'Otro'],
          cols: [{ h: 'Tiene', type: 'select', opts: ['Sí', 'No'] }, { h: 'Aseguradora' }, { h: 'No. póliza' }, { h: 'Vigente hasta', type: 'date' }, { h: 'Cobertura / observaciones' }] },
        { t: 'file', label: 'Copias de las pólizas', req: true, multi: true }
      ]
    },
    {
      title: 'Formación e idiomas', short: 'Formación',
      items: [
        { t: 'section', title: 'Formación y educación' },
        { t: 'matrix', rows: [
          'Título de bachiller (requerido para Guía Local)',
          'Título profesional en guía de turismo o afín, tercer nivel (Guía Nacional y Especializado)',
          'Certificación en competencias laborales para guianza (QUALITUR u otra entidad)',
          'Curso de capacitación específico avalado por MINTUR (obligatorio para Guía Local)',
          'Cursos de actualización de conocimientos (mínimo 2 para renovación)',
          'Certificado de habilidad reconocido (Guía Especializado en Aventura)',
          'Primeros auxilios en zonas remotas (WFA / WFR)',
          'Certificación en RCP y uso de desfibrilador (DEA)',
          'Capacitación en prevención y detección de la ESNNA',
          'Capacitación en interpretación ambiental y patrimonial',
          'Capacitación en atención a pasajeros con discapacidad o movilidad reducida',
          'Capacitación en manejo de crisis y comunicación con pasajeros'
        ] },
        { t: 'textarea', label: 'Detalle de títulos y cursos', req: true, help: 'Institución, nombre del curso y año de cada uno.' },
        { t: 'text', label: 'Modalidad de aventura certificada', ph: 'Montañismo, rafting, buceo...', show: { id: 'clasif', eq: 'Guía Nacional Especializado, Aventura', label: 'Clasificación del guía' } },
        { t: 'file', label: 'Títulos y certificados', multi: true },
        { t: 'section', title: 'Idiomas', desc: 'Guía Nacional y Especializado, mínimo B1 en un idioma extranjero. Quasar requiere inglés operativo.' },
        { t: 'table', label: 'Idiomas', rowHead: 'Idioma',
          rows: ['Inglés', 'Francés', 'Alemán', 'Portugués', 'Italiano', 'Chino mandarín', 'Japonés', 'Otro'],
          cols: [{ h: 'Nivel (Marco Europeo)', type: 'select', opts: NIVEL }, { h: 'Institución certificadora' }, { h: 'Año', type: 'number' }, { h: 'Verificado por Quasar', type: 'check', q: true }] }
      ]
    },
    {
      title: 'Destinos habilitados', short: 'Destinos',
      items: [
        { t: 'section', title: 'Áreas y destinos habilitados, continente', desc: 'Marque los destinos en los que está habilitado y tiene experiencia operativa.' },
        { t: 'checks', label: 'Sierra norte y Quito', cols: true, opts: ['Quito, ciudad histórica y patrimonial', 'Quito, Mitad del Mundo / Pululahua', 'Quito, Teleférico / Rucu Pichincha', 'Otavalo, mercado y comunidades', 'Cuicocha, laguna cratérica (3.100 msnm)', 'Cotacachi / zona norte', 'Zuleta y haciendas de la sierra norte', 'Papallacta, aguas termales', 'Antisana, área protegida y cóndor', 'Mindo, aves y naturaleza'] },
        { t: 'checks', label: 'Sierra centro y sur', cols: true, opts: ['Cotopaxi, Área Nacional Protegida', 'Quilotoa, laguna volcánica (3.914 msnm)', 'Baños de Agua Santa / zona central', 'Chimborazo, reserva de fauna', 'Riobamba / Ruta del tren', 'Cuenca, ciudad patrimonio', 'Ingapirca, sitio arqueológico', 'Cajas, Parque Nacional', 'Loja / Vilcabamba / Podocarpus'] },
        { t: 'checks', label: 'Amazonía y costa', cols: true, opts: ['Amazonía / Oriente', 'Tena / Misahuallí', 'Coca / Yasuní / lodges amazónicos', 'Cuyabeno', 'Ruta del Spondylus', 'Machalilla / Puerto López / Isla de la Plata', 'Guayaquil, ciudad', 'Otros'] },
        { t: 'textarea', label: 'Detalle de destinos', help: 'Provincias de la Amazonía, lodges que ha operado y otros destinos.' },
        { t: 'group', q: true, items: [
          { t: 'note', q: true, text: 'Al verificar, Quasar revisa experiencia en altitud (Rucu Pichincha, Cuicocha, Quilotoa, Chimborazo), uso de walkie-talkie en destinos sin señal y PAAT en Cotopaxi.' },
          { t: 'textarea', q: true, label: 'Observaciones de verificación de destinos' }
        ] }
      ]
    },
    {
      title: 'Experiencia y disponibilidad', short: 'Experiencia',
      items: [
        { t: 'section', title: 'Experiencia y perfil profesional' },
        { t: 'row', items: [{ t: 'number', label: 'Años de experiencia como guía', req: true }, { t: 'number', label: 'Años trabajando con Quasar' }] },
        { t: 'textarea', label: 'Especialidades y temas de interpretación', ph: 'Aves, arqueología, geología, fotografía, gastronomía, textiles...' },
        { t: 'textarea', label: 'Tipos de grupo que maneja', ph: 'Familias, luna de miel, senior travelers, birding, incentivos...' },
        { t: 'row', items: [{ t: 'number', label: 'Máximo de pasajeros que maneja' }, { t: 'text', label: 'Idioma principal de guianza', req: true }] },
        { t: 'textarea', label: 'Operadoras o agencias con las que ha trabajado' },
        { t: 'table', label: 'Referencias (mínimo 2)', req: true, blank: 2, cols: [{ h: 'Nombre' }, { h: 'Empresa' }, { h: 'Contacto' }] },
        { t: 'section', title: 'Disponibilidad' },
        { t: 'matrix', rows: [
          'Servicios de varios días con pernocte fuera de su ciudad',
          'Operar en Perú u otros destinos del grupo',
          'Servicios de transfer y assistance',
          'Feriados y fines de semana'
        ] },
        { t: 'radio', id: 'vehiculo', label: '¿Cuenta con vehículo propio para servicios?', inline: true, opts: ['Sí', 'No'] },
        { t: 'text', label: 'Vehículo, marca, año, capacidad y permiso de operación', show: { id: 'vehiculo', eq: 'Sí', label: '¿Cuenta con vehículo propio?' } }
      ]
    },
    {
      title: 'Datos comerciales', short: 'Tarifas',
      items: [
        { t: 'section', title: 'Datos comerciales' },
        { t: 'row', items: [{ t: 'money', label: 'Tarifa por día completo (8 h)', req: true }, { t: 'money', label: 'Tarifa medio día (4 h)', req: true }] },
        { t: 'row', items: [{ t: 'money', label: 'Tarifa servicio nocturno / especial' }, { t: 'money', label: 'Tarifa transfer / servicio corto' }] },
        { t: 'row', items: [{ t: 'money', label: 'Tarifa overnight fuera de su ciudad' }, { t: 'money', label: 'Tarifa día de viaje / traslado' }] },
        { t: 'textarea', label: 'Viáticos, alimentación y alojamiento', help: 'Qué cubre Quasar y qué cubre el guía.' },
        { t: 'row', items: [{ t: 'date', label: 'Vigencia de tarifas', req: true }, { t: 'text', label: 'Plazo de pago acordado' }] },
        { t: 'row', items: [{ t: 'radio', label: 'Emite factura', req: true, inline: true, opts: ['Sí', 'No'] }, { t: 'text', label: 'Plazo de entrega de factura' }] },
        { t: 'row', items: [{ t: 'text', label: 'Banco', req: true }, { t: 'select', label: 'Tipo de cuenta', req: true, opts: ['Ahorros', 'Corriente'] }] },
        { t: 'row', items: [{ t: 'text', label: 'Número de cuenta', req: true }, { t: 'text', label: 'Titular', req: true }] },
        { t: 'text', label: 'Disponibilidad', ph: 'Lunes a sábado, según agenda, tiempo completo...' },
        { t: 'textarea', label: 'Restricciones de agenda conocidas', ph: 'Temporadas no disponibles, compromisos con otras operadoras...' }
      ]
    },
    {
      title: 'Evaluación interna Quasar', short: 'Evaluación', q: true,
      items: [
        { t: 'note', text: 'Esta página no la ve el guía. La llena operaciones de Quasar durante y después de la verificación.' },
        { t: 'section', title: 'Competencias y habilidades operativas' },
        { t: 'matrix', head: 'Competencia', cols: ['Cumple', 'No cumple', 'N/A'], check: false, rows: [
          'Inglés operativo para guianza (mínimo B1 verificado)', 'Historia, arqueología y cultura local', 'Flora y fauna del Ecuador',
          'Manejo de grupos de adultos mayores / senior travelers', 'Certificado de primeros auxilios vigente',
          'Manejo de walkie-talkie (destinos sin señal)', 'Protocolo de emergencias Quasar', 'Conoce y aplica el manual de guías',
          'Mínimo 2 años con agencias internacionales', 'Referencias de operadoras anteriores (mínimo 2)',
          'Puntualidad y presentación personal', 'Uso correcto del uniforme e identificación',
          'Plataformas WETU / comunicación digital con operaciones', 'Restricciones dietarias y alergias comunes',
          'Resuelve imprevistos menores sin consultar a la oficina', 'Manejo de quejas y reporte oportuno',
          'Entrega puntual del reporte de servicio y de gastos', 'Caja chica y liquidación con respaldos',
          'Políticas de propina y compras en ruta', 'Protocolo de comunicación con el pasajero antes del servicio'
        ] },
        { t: 'section', title: 'Evaluación interna y seguimiento' },
        { t: 'row', items: [{ t: 'select', label: 'Calificación actual', opts: ['Excelente', 'Muy bueno', 'Bueno', 'En observación', 'Suspendido'] }, { t: 'date', label: 'Fecha de alta como proveedor' }] },
        { t: 'row', items: [{ t: 'date', label: 'Última revisión' }, { t: 'date', label: 'Próxima revisión' }] },
        { t: 'row', items: [{ t: 'text', label: 'Revisado por' }, { t: 'number', label: 'Servicios operados en los últimos 12 meses' }] },
        { t: 'number', label: 'Promedio en encuestas de pasajeros' },
        { t: 'textarea', label: 'Felicitaciones o menciones de pasajeros' },
        { t: 'textarea', label: 'Quejas o incidentes registrados' },
        { t: 'textarea', label: 'Plan de mejora / compromisos acordados' },
        { t: 'matrix', label: 'Cierre del expediente', head: 'Ítem', cols: ['Sí', 'No'], check: false, rows: [
          'Contrato de servicios firmado y archivado', 'Acuerdo de confidencialidad y datos firmado',
          'Recibió el manual de guías de Quasar', 'Recibió el protocolo de contingencias y emergencias',
          'Uniforme e identificación entregados', 'Guía cargado en Tourplan NX con tarifas vigentes',
          'Expediente completo con todos los documentos adjuntos', 'Alertas de vencimiento de credencial y primeros auxilios registradas'
        ] },
        { t: 'textarea', label: 'Detalle de entregas', help: 'Versión del manual, fecha de entrega, prendas del uniforme.' }
      ]
    },
    {
      title: 'Declaración y verificación', short: 'Cierre',
      items: [
        { t: 'section', title: 'Declaración del guía' },
        { t: 'consent', label: 'Declaro que la información y los documentos entregados son verídicos y autorizo a Quasar Expeditions a verificarlos.', req: true },
        { t: 'signature', label: 'Firma del guía', req: true },
        { t: 'group', q: true, items: [
          { t: 'section', q: true, title: 'Verificación', desc: 'La llena el ejecutivo de Quasar. El guía no ve esta parte.' },
          { t: 'row', items: [{ t: 'date', q: true, label: 'Fecha de verificación' }, { t: 'date', q: true, label: 'Fecha de emisión de la ficha' }] },
          { t: 'text', q: true, label: 'Ejecutivo Quasar Expeditions' },
          { t: 'textarea', q: true, label: 'Observaciones generales' },
          { t: 'signature', q: true, label: 'Firma del ejecutivo de Quasar' }
        ] }
      ]
    }
  ]
};
