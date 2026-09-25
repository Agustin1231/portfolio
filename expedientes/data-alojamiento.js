/* Expediente de proveedor, Alojamiento. Estructura tomada del Excel de Quasar, campo por campo. */
var SN = ['Sí', 'No', 'N/A'];
var HLH = { id: 'tipo', in: ['Hacienda Turística (HA)', 'Lodge (L)', 'Hostería (HT)'], label: 'Tipo de alojamiento' };
window.FORM = {
  org: 'Quasar Expeditions · Expediciones Wayrarouters S.A.',
  title: 'Expediente de proveedor, Alojamiento',
  intro: 'Formulario anual para establecimientos de alojamiento que operan con Quasar Expeditions. Puede guardar su avance y continuar después. Los campos con * son obligatorios.',
  pages: [
    {
      title: 'Información general y contactos', short: 'General',
      items: [
        { t: 'section', title: 'Información general del proveedor' },
        { t: 'date', label: 'Fecha', req: true },
        { t: 'text', label: 'Nombre del proveedor', req: true },
        { t: 'row', items: [{ t: 'text', label: 'Razón social', req: true }, { t: 'text', label: 'Nombre comercial', req: true }] },
        { t: 'row', items: [{ t: 'text', label: 'RUC', req: true, help: '13 dígitos' }, { t: 'url', label: 'Portal web', ph: 'https://' }] },
        { t: 'text', label: 'Dirección completa', req: true },
        { t: 'row', items: [{ t: 'text', label: 'Ciudad', req: true }, { t: 'select', label: 'País', req: true, opts: ['Ecuador', 'Perú', 'Otro'] }] },
        { t: 'row', items: [{ t: 'tel', label: 'Teléfono', req: true, help: 'Código de país, ciudad y número' }, { t: 'tel', label: 'Teléfono 24 h / emergencias', req: true }] },
        { t: 'group', q: true, items: [{ t: 'file', label: 'Mapa de ubicación del establecimiento', q: true, help: 'Lo inserta Quasar después de la verificación.' }] },
        { t: 'section', title: 'Contactos clave' },
        { t: 'row', items: [{ t: 'text', label: 'Gerente general', req: true }, { t: 'email', label: 'Email gerencia', req: true }] },
        { t: 'row', items: [{ t: 'text', label: 'Contacto servicio al cliente' }, { t: 'email', label: 'Email servicio al cliente' }] },
        { t: 'row', items: [{ t: 'text', label: 'Contacto equipo de ventas' }, { t: 'email', label: 'Email ventas' }] },
        { t: 'row', items: [{ t: 'text', label: 'Contacto departamento financiero' }, { t: 'email', label: 'Email financiero' }] }
      ]
    },
    {
      title: 'Registro en el Ministerio de Turismo', short: 'Registro',
      items: [
        { t: 'section', title: 'Registro Ministerio de Turismo' },
        { t: 'row', items: [{ t: 'text', label: 'No. registro Ministerio de Turismo', req: true }, { t: 'date', label: 'Fecha de registro', req: true }] },
        { t: 'row', items: [{ t: 'text', label: 'No. LUAF', req: true, help: 'Licencia Única Anual de Funcionamiento' }, { t: 'date', label: 'Última actualización', req: true }] },
        { t: 'doc', label: 'Certificado de registro MINTUR', req: true },
        { t: 'doc', label: 'LUAF vigente', req: true, date: 'Fecha de vencimiento' }
      ]
    },
    {
      title: 'Seguros y coberturas', short: 'Seguros',
      items: [
        { t: 'section', title: 'Seguros y coberturas', desc: 'Registre cada póliza que tenga el establecimiento y adjunte la copia. La de responsabilidad civil es obligatoria.' },
        { t: 'row', items: [{ t: 'text', label: 'Aseguradora, responsabilidad civil', req: true }, { t: 'text', label: 'No. de póliza', req: true }] },
        { t: 'row', items: [{ t: 'number', label: 'Monto asegurado (USD)', req: true }, { t: 'date', label: 'Vigente hasta', req: true }] },
        { t: 'file', label: 'Copia de la póliza de responsabilidad civil', req: true },
        { t: 'table', label: 'Otras pólizas', rowHead: 'Tipo de seguro', help: 'Complete solo las que tenga.',
          rows: ['Incendio y líneas aliadas', 'Accidentes personales de huéspedes', 'Robo y asalto', 'Responsabilidad civil por alimentos y bebidas', 'Vehículos de transfer, SPPAT y responsabilidad civil', 'Equipos y maquinaria', 'Otro'],
          cols: [{ h: 'Tiene', type: 'select', opts: ['Sí', 'No'] }, { h: 'Aseguradora' }, { h: 'No. póliza' }, { h: 'Monto asegurado (USD)', type: 'number' }, { h: 'Vigente hasta', type: 'date' }, { h: 'Verificado', type: 'check', q: true }] },
        { t: 'file', label: 'Copias de las otras pólizas', multi: true },
        { t: 'group', q: true, items: [
          { t: 'matrix', q: true, label: 'Verificación de documentos', head: 'Documento', cols: ['Cumple', 'No cumple', 'N/A'], check: false, rows: ['Póliza de responsabilidad civil vigente', 'Copias de las otras pólizas'] }
        ] },
        { t: 'textarea', label: 'Observaciones de la sección' }
      ]
    },
    {
      title: 'Responsabilidad ambiental', short: 'Ambiental',
      items: [
        { t: 'section', title: 'Responsabilidad ambiental', desc: 'Marque Sí, No o N/A en cada fila.' },
        { t: 'matrix', rows: [
          '#Políticas y prácticas',
          'El establecimiento cuenta con políticas de responsabilidad ambiental (3Rs)',
          'Promueve el uso eficiente del agua',
          'Promueve el uso eficiente de la energía eléctrica',
          'Cuenta con fuentes de energía alternativa (hidráulica, solar, eólica, etc.)',
          'Cuenta con cocinas de inducción',
          'Cuenta con programa de manejo de desechos (abono, reciclaje de plásticos, etc.)',
          'Uso de productos biodegradables',
          '#Gestión y seguimiento',
          'Separa los residuos en la fuente (orgánicos, reciclables, no aprovechables)',
          'Entrega los residuos peligrosos (aceites, pilas, químicos) a un gestor autorizado',
          'Reduce los plásticos de un solo uso (sorbetes, botellas, amenities)',
          'Registra cada mes el consumo de agua y energía',
          'Mide o compensa su huella de carbono',
          'Capacita al personal en buenas prácticas ambientales',
          '#Entorno natural',
          'Tiene medidas para no alterar la fauna silvestre (iluminación, ruido, no alimentar animales)',
          'No vende ni exhibe productos hechos con flora o fauna silvestre protegida',
          'Informa a los huéspedes sobre las buenas prácticas ambientales del establecimiento'
        ] },
        { t: 'radio', id: 'regamb', label: '¿Cuenta con registro o licencia ambiental del Ministerio del Ambiente (MAATE)?', req: true, inline: true, opts: ['Sí', 'No', 'En trámite', 'No aplica'] },
        { t: 'row', items: [
          { t: 'text', label: 'No. de registro o licencia ambiental', show: { id: 'regamb', eq: 'Sí', label: '¿Cuenta con registro o licencia ambiental?' } },
          { t: 'date', label: 'Fecha de emisión', show: { id: 'regamb', eq: 'Sí', label: '¿Cuenta con registro o licencia ambiental?' } }
        ] },
        { t: 'file', label: 'Copia del registro o licencia ambiental', show: { id: 'regamb', eq: 'Sí', label: '¿Cuenta con registro o licencia ambiental?' } },
        { t: 'checks', id: 'certamb', label: 'Certificaciones ambientales o de turismo sostenible', cols: true, opts: ['Punto Verde (MAATE)', 'Smart Voyager', 'Rainforest Alliance', 'Green Globe', 'EarthCheck', 'Travelife', 'Biosphere', 'Otra', 'Ninguna'] },
        { t: 'file', label: 'Certificados vigentes', multi: true, help: 'Si tiene alguna certificación, adjunte el certificado con su fecha de vigencia.' },
        { t: 'group', q: true, items: [
          { t: 'matrix', q: true, label: 'Verificación de documentos', head: 'Documento', cols: ['Cumple', 'No cumple', 'N/A'], check: false, rows: ['Registro o licencia ambiental', 'Certificaciones ambientales vigentes'] }
        ] },
        { t: 'textarea', label: 'Observaciones de la sección' }
      ]
    },
    {
      title: 'Responsabilidad social y laboral', short: 'Social',
      items: [
        { t: 'section', title: 'Personal del establecimiento' },
        { t: 'row', items: [{ t: 'number', label: 'Número total de trabajadores', req: true }, { t: 'number', label: '% de trabajadores de la comunidad local', ph: '0 a 100' }] },
        { t: 'row', items: [{ t: 'number', label: '% de mujeres en el personal', ph: '0 a 100' }, { t: 'number', label: 'Trabajadores con discapacidad' }] },
        { t: 'section', title: 'Cumplimiento laboral', desc: 'Marque Sí, No o N/A en cada fila.' },
        { t: 'matrix', rows: [
          'Todo el personal está afiliado al IESS',
          'Paga al menos el salario básico unificado y los beneficios de ley (décimos, vacaciones, utilidades)',
          'Los contratos de trabajo están registrados en el Ministerio del Trabajo (SUT)',
          'Tiene reglamento interno de trabajo aprobado',
          'Tiene reglamento o plan de higiene y seguridad en el trabajo',
          'Entrega equipo de protección al personal que lo requiere (cocina, mantenimiento, limpieza)',
          'Tiene protocolo de prevención del acoso y la discriminación en el trabajo',
          'No hay trabajo infantil en el establecimiento',
          'Cumple la cuota de personas con discapacidad (4 % desde 25 trabajadores)'
        ] },
        { t: 'section', title: 'Compromiso social', desc: 'Marque Sí, No o N/A en cada fila.' },
        { t: 'matrix', rows: [
          'Firmó el código de conducta contra la explotación sexual de niñas, niños y adolescentes (ESNNA)',
          'Capacita al personal en prevención de la ESNNA',
          'Compra a proveedores y productores locales',
          'Apoya proyectos o actividades de la comunidad',
          'Promueve la cultura, la gastronomía y la artesanía local'
        ] },
        { t: 'doc', label: 'Certificado de cumplimiento de obligaciones patronales (IESS)', req: true, date: 'Fecha de emisión' },
        { t: 'doc', label: 'Código de conducta contra la ESNNA firmado' },
        { t: 'group', q: true, items: [
          { t: 'matrix', q: true, label: 'Verificación de documentos', head: 'Documento', cols: ['Cumple', 'No cumple', 'N/A'], check: false, rows: ['Certificado de obligaciones patronales IESS', 'Código de conducta ESNNA firmado'] }
        ] },
        { t: 'textarea', label: 'Observaciones de la sección' }
      ]
    },
    {
      title: 'Clasificación y categoría', short: 'Categoría',
      items: [
        { t: 'section', title: 'Clasificación y categoría del alojamiento' },
        { t: 'radio', id: 'tipo', label: 'Tipo de alojamiento', req: true, cols: true, opts: ['Hotel (H)', 'Hostal (HS)', 'Hostería (HT)', 'Hacienda Turística (HA)', 'Lodge (L)', 'Resort (RS)', 'Refugio (RF)', 'Campamento Turístico (CT)', 'Casa de Huéspedes (CH)'] },
        { t: 'row', items: [
          { t: 'select', label: 'Categoría Ministerio de Turismo', req: true, opts: ['Lujo (5 estrellas)', 'Primera (4 estrellas)', 'Segunda (3 estrellas)', 'Tercera (2 estrellas)', 'Cuarta (1 estrella)'] },
          { t: 'select', label: 'Categoría superior otorgada por MINTUR', opts: ['Lujo (5 estrellas)', 'Primera (4 estrellas)', 'Segunda (3 estrellas)', 'Tercera (2 estrellas)', 'Cuarta (1 estrella)'] }
        ] },
        { t: 'group', q: true, items: [{ t: 'select', q: true, label: 'Categoría Quasar Expeditions', opts: ['Premium', 'Superior', 'Estándar', 'Económico'] }] }
      ]
    },
    {
      title: 'Infraestructura e instalaciones', short: 'Instalaciones',
      items: [
        { t: 'section', title: 'Infraestructura y servicios del alojamiento', desc: 'Marque Sí, No o N/A en cada fila.' },
        { t: 'matrix', label: 'Instalaciones generales', rows: [
          'Estacionamiento temporal frente al establecimiento (embarque y desembarque de pasajeros)',
          'Estacionamiento propio o contratado, dentro o fuera de las instalaciones',
          '#Generador de emergencia',
          '>Suministro general de energía para todo el establecimiento, incluidas habitaciones',
          '>Servicios comunales básicos (ascensores, salidas de emergencia, pasillos, áreas comunes)',
          '>Sistema de iluminación de emergencia',
          'Agua caliente en lavabos de baños de áreas comunes',
          'Cambiador de pañales en baños de áreas comunes',
          'Piscina', 'Hidromasaje', 'Baño turco', 'Sauna', 'Gimnasio', 'Spa', 'Servicio de peluquería', 'Salones para eventos',
          'Establecimiento ubicado en un edificio patrimonial', 'Aire acondicionado', 'Calefacción'
        ] },
        { t: 'matrix', label: 'Locales comerciales afines', rows: ['Agencia de viajes', 'Tienda de artesanías', 'Cajero automático', 'Farmacia', 'Otros'] },
        { t: 'text', label: 'Otros locales comerciales, ¿cuáles?' },
        { t: 'radio', id: 'deporte', label: 'Áreas deportivas y de recreación', inline: true, opts: SN },
        { t: 'text', label: '¿Cuáles áreas deportivas?', show: { id: 'deporte', eq: 'Sí', label: 'Áreas deportivas y de recreación' } },
        { t: 'matrix', label: 'Áreas de uso para el personal', rows: ['Cuartos de baño y aseo', 'Duchas', 'Vestidores', 'Área de almacenamiento de artículos personales', 'Área de comedor', 'Área administrativa'] },
        { t: 'matrix', label: 'Accesos', rows: ['Área de acceso para clientes', 'Área de acceso para personal', 'Ascensor de huéspedes', 'Ascensor de servicio'] }
      ]
    },
    {
      title: 'Áreas de clientes y habitaciones', short: 'Habitaciones',
      items: [
        { t: 'matrix', label: 'Áreas de clientes, general', rows: [
          'Centro de negocios con servicio de internet',
          'Recepción con facilidades para atender a personas con discapacidad',
          'Restaurante dentro del establecimiento, con carta en inglés',
          'Preparación de dietas especiales y restricciones alimenticias bajo pedido',
          'Bar en zona diferenciada del restaurante, con instalaciones propias',
          'Servicio de bar dentro del establecimiento',
          'Casilleros de seguridad o caja fuerte en recepción',
          'Telefonía nacional e internacional en la recepción'
        ] },
        { t: 'table', label: 'Habitaciones por categoría', rowHead: 'Categoría', req: true,
          rows: ['Estándar', 'Superior', 'Deluxe', 'Suite', 'Junior Suite', 'Otra'],
          cols: [{ h: 'Cantidad', type: 'number' }, { h: 'Twin', type: 'number' }, { h: 'King', type: 'number' }, { h: 'Cama extra', type: 'select', opts: ['Sí', 'No'] }, { h: 'Notas' }] },
        { t: 'radio', id: 'conectadas', label: '¿Tiene habitaciones conectadas?', inline: true, opts: ['Sí', 'No'] },
        { t: 'textarea', label: 'Notas sobre habitaciones conectadas', show: { id: 'conectadas', eq: 'Sí', label: '¿Tiene habitaciones conectadas?' } },
        { t: 'matrix', label: 'Equipamiento de habitaciones', rows: [
          'Habitaciones para personas con discapacidad en la planta baja',
          'Habitaciones con cuarto de baño y aseo privado',
          'Acondicionamiento térmico en cada habitación',
          'Habitaciones insonorizadas', 'Internet en todas las habitaciones', 'Caja de seguridad en habitación',
          'Cerradura en la puerta de acceso', 'Almohada extra a petición del huésped', 'Frigobar', 'Portamaletas',
          'Clóset o armario', 'Escritorio o mesa', 'Silla, sillón o sofá', 'Funda de lavandería',
          'Luz de velador o cabecera por plaza', 'Cortina completa y visillo, o blackout y visillo',
          '#Televisión en mueble o soporte',
          '>Cable o satelital, más canales nacionales', '>Únicamente canales nacionales',
          'Teléfono en la habitación',
          '#Servicio telefónico con discado directo (interno, nacional e internacional)',
          '>Con atención en inglés', '>24 horas'
        ] },
        { t: 'text', label: 'Sistema de comunicación en habitaciones, descríbalo' }
      ]
    },
    {
      title: 'Cuarto de baño privado', short: 'Baño',
      items: [
        { t: 'matrix', label: 'Cuarto de baño y aseo privado', rows: [
          '#Agua caliente en la ducha',
          '>Agua caliente centralizada', '>Disponible las 24 horas', '>Con sistema de válvula de presión',
          'Iluminación independiente sobre el lavamanos', 'Espejo de medio cuerpo sobre el lavamanos',
          'Espejo sobre el lavamanos', 'Espejo flexible de aumento', 'Secador de cabello',
          'Juego de toallas por huésped', 'Toalla de piso para salida de tina o ducha',
          '#Amenities de limpieza', '>Champú', '>Jabón', '>Papel higiénico de repuesto', '>Acondicionador',
          '#Amenities de cuidado personal', '>Crema', '>Pañuelos desechables', '>Cotonetes',
          '#Amenities adicionales', '>Gorro de baño', '>Peinilla', '>Lustrador de zapatos', '>Kit dental', '>Costurero',
          'Bata de baño', 'Zapatillas disponibles en la habitación'
        ] }
      ]
    },
    {
      title: 'Servicios', short: 'Servicios',
      items: [
        { t: 'matrix', label: 'Servicios del establecimiento', rows: [
          'Servicio de despertador desde la recepción', 'Lavandería propia o contratada', 'Limpieza en seco propia o contratada',
          '#Servicio de planchado', '>Propio o contratado', '>Plancha a disposición del huésped',
          '#Alimentos y bebidas a la habitación', '>Servicio disponible', '>Carta en inglés para este servicio',
          'Personal bilingüe en recepción, conserjería o guardianía las 24 horas',
          'Servicio de botones en español y un idioma extranjero',
          '#Tratamiento de aguas residuales (zonas sin alcantarillado)', '>Sistema de tratamiento', '>Al menos pozo séptico',
          'Servicio médico para emergencias, propio o contratado', 'Valet parking',
          'Transfer propio o contratado (puerto o aeropuerto al establecimiento)',
          'Pago con tarjeta de crédito o débito, o voucher',
          'Circuito cerrado de cámaras con almacenamiento mínimo de 30 días',
          'Silla de ruedas para uso del huésped', 'Botiquín de emergencias',
          '#Servicios a petición del huésped', '>Cama extra', '>Cuna', '>Silla de bebé'
        ] },
        { t: 'row', items: [{ t: 'text', label: 'Horario de alimentos a la habitación' }, { t: 'text', label: 'Horario del servicio de botones' }] },
        { t: 'row', items: [{ t: 'number', label: '% del personal certificado en competencias laborales', ph: '0 a 100' }, { t: 'number', label: '% del personal que habla un idioma extranjero', ph: '0 a 100' }] },
        { t: 'row', items: [{ t: 'number', label: '% del personal capacitado en primeros auxilios', ph: '0 a 100' }, { t: 'text', label: 'Servicio médico, ¿cuál?' }] },
        { t: 'section', title: 'Servicios adicionales para haciendas, lodges y hosterías', show: HLH },
        { t: 'matrix', show: HLH, rows: [
          'Vinculación a una actividad agropecuaria', 'Caminatas', 'Cabalgatas', 'Rodeos',
          'Vinculación de la comunidad local en las actividades turísticas',
          'Equipo para actividades (mínimo botas de caucho y poncho de aguas)',
          'Juegos de salón (billar, ping pong)', 'Tours adicionales para los pasajeros'
        ] },
        { t: 'textarea', label: 'Observaciones de la sección' }
      ]
    },
    {
      title: 'Datos de quien llena y verificación', short: 'Cierre',
      items: [
        { t: 'section', title: 'Datos de quien provee la información' },
        { t: 'row', items: [{ t: 'text', label: 'Nombre de quien provee la información', req: true }, { t: 'date', label: 'Fecha', req: true }] },
        { t: 'row', items: [{ t: 'text', label: 'Ejecutivo del proveedor', req: true }, { t: 'text', label: 'Cargo', req: true }] },
        { t: 'consent', label: 'Declaro que la información entregada es verídica y autorizo a Quasar Expeditions a verificarla en sitio.', req: true },
        { t: 'signature', label: 'Firma del ejecutivo del proveedor', req: true },
        { t: 'group', q: true, items: [
          { t: 'section', title: 'Verificación en sitio', q: true, desc: 'La llena el ejecutivo de Quasar después de la visita. El proveedor no ve esta parte.' },
          { t: 'row', items: [{ t: 'date', label: 'Fecha de inspección', q: true }, { t: 'date', label: 'Fecha de emisión de la ficha', q: true }] },
          { t: 'text', label: 'Ejecutivo Quasar Expeditions', q: true },
          { t: 'textarea', label: 'Observaciones generales', q: true },
          { t: 'signature', label: 'Firma del ejecutivo de Quasar', q: true }
        ] }
      ]
    }
  ]
};
