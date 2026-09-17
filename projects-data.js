// ==========================================
// DATOS DE PROYECTOS
// Este es el único archivo que necesitás editar para agregar proyectos.
// Agregá un nuevo objeto al array y listo.
// ==========================================

var PROJECTS_DATA = [
    {
        id: "automatizacion-analitica-podcasts",
        number: "01",
        category: "Automatización y Datos",
        title: "Automatización Analítica de Podcasts",
        subtitle: "Extracción, validación y análisis diario de métricas de podcasts para toma de decisiones",
        description: "Diseño e implementación de una solución automatizada en n8n que extrae, valida y almacena diariamente datos clave de podcasts, permitiendo a project managers acceder a estadísticas confiables y actualizadas desde una plataforma web.",
        year: "2025",
        company: "Plataforma de Podcasts",
        duration: "1 mes",
        hoursSaved: 600,
        image: "img/proyectos/automatizacion-analitica-podcasts.jpg",
        imageCaption: "Arquitectura general del sistema de monitoreo y análisis de podcasts",
        gallery: [
            {"src": "img/proyectos/galeria/flujo-podcasts/01-flujo.jpg", "title": "El flujo en n8n", "caption": "El proceso diario en n8n, desde el disparador programado hasta guardar los datos y avisar al equipo."}
        ],
        galleryNote: "Reconstrucción del flujo en n8n para mostrar la arquitectura, sin datos ni credenciales del cliente",
        techCard: ["n8n", "OP3", "Supabase", "JavaScript"],
        techFull: [
            "n8n",
            "OP3 API",
            "Supabase",
            "PostgreSQL",
            "JavaScript",
            "REST APIs"
        ],
        metrics: [
            { label: "Shows monitoreados", value: "30+" },
            { label: "Episodios procesados", value: "1000+" },
            { label: "Descargas diarias", value: "3000+" },
            { label: "Ejecuciones automáticas", value: "Diarias" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Automatizar la recolección y análisis de datos de podcasts para proporcionar estadísticas confiables y actualizadas que faciliten la gestión y toma de decisiones."
                    },
                    {
                        type: "paragraph",
                        text: "La gestión de podcasts requería disponer de información precisa sobre shows, episodios y descargas. El proceso manual era lento, propenso a errores y poco escalable, especialmente para programas con altos volúmenes de audiencia. El objetivo fue diseñar una solución automatizada, confiable y escalable."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "Desarrollé una solución basada en n8n que ejecuta diariamente flujos automatizados para extraer, validar y almacenar datos provenientes de la API de OP3."
                    },
                    {
                        type: "paragraph",
                        text: "La información recolectada incluye datos de shows, episodios y estadísticas de descargas, los cuales se almacenan en una base de datos Supabase para su posterior análisis y visualización en una plataforma web."
                    },
                    {
                        type: "paragraph",
                        text: "El sistema fue diseñado para ser resiliente, escalable y eficiente en el uso de la API, incorporando controles de límites y validaciones automáticas."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Extracción Automatizada Diaria",
                description: "Workflows que se ejecutan diariamente para mantener los datos de podcasts siempre actualizados sin intervención manual."
            },
            {
                title: "Validación de Shows Activos",
                description: "Verificación automática del estado de cada show antes de procesar información, garantizando datos confiables."
            },
            {
                title: "Control de Límites de API",
                description: "Gestión inteligente de consultas para evitar sobrecarga y bloqueos en la API de OP3."
            },
            {
                title: "Persistencia y Análisis de Datos",
                description: "Almacenamiento estructurado en Supabase que permite análisis histórico y acceso desde una plataforma web."
            }
        ],
        process: [
            {
                phase: "Fase 1",
                title: "Análisis de Requerimientos",
                description: "Identificación de métricas clave, fuentes de datos y limitaciones de la API."
            },
            {
                phase: "Fase 2",
                title: "Diseño de Workflows",
                description: "Definición de flujos en n8n para validación de shows, extracción de episodios y métricas de descargas."
            },
            {
                phase: "Fase 3",
                title: "Implementación",
                description: "Construcción de los workflows, integración con OP3 y persistencia de datos en Supabase."
            },
            {
                phase: "Fase 4",
                title: "Optimización y Monitoreo",
                description: "Ajuste de límites, manejo de errores y validación de ejecuciones diarias."
            }
        ],
        results: [
            { number: "100%", label: "Automatización del proceso de recolección de datos" },
            { number: "0", label: "Errores manuales en carga de información" },
            { number: "3000+", label: "Descargas monitoreadas diariamente" },
            { number: "Tiempo real", label: "Acceso a estadísticas actualizadas" }
        ],
        learnings: [
            {
                title: "Diseño para límites de API",
                text: "Trabajar con APIs con restricciones obliga a diseñar flujos eficientes, con control de rate limit desde el inicio."
            },
            {
                title: "Automatización escalable",
                text: "Separar validación, extracción y almacenamiento en flujos independientes facilita el mantenimiento y la escalabilidad."
            },
            {
                title: "Datos como activo",
                text: "Contar con datos confiables y actualizados transforma la forma en que los equipos toman decisiones."
            }
        ],
        visible: true
    },
    {
        id: "recontacto-automatizado-de-leads-crm",
        number: "13",
        category: "Automatización y CRM",
        title: "Recontacto Automatizado de Leads",
        subtitle: "Reactivación masiva y automática de oportunidades dormidas del CRM mediante campañas multicanal por WhatsApp y email",
        description: "Diseño e implementación de un flujo en n8n que identifica oportunidades dormidas en el CRM y ejecuta, sin intervención manual, campañas de recontacto de varios pasos por WhatsApp y email, orquestadas desde GoHighLevel.",
        year: "2025",
        company: "Cliente B2B",
        duration: "En operación",
        hoursSaved: 316,
        image: "img/proyectos/recontacto-automatizado-de-leads-crm.jpg",
        imageCaption: "Arquitectura del flujo: del CRM a la campaña multicanal de recontacto",
        gallery: [
            {"src": "img/proyectos/galeria/flujo-recontacto-crm/01-flujo.jpg", "title": "El flujo en n8n", "caption": "La secuencia que lee el CRM, arma la campaña multicanal y hace seguimiento a cada oportunidad."}
        ],
        galleryNote: "Reconstrucción del flujo en n8n para mostrar la arquitectura, sin datos ni credenciales del cliente",
        techCard: ["n8n", "Odoo", "GoHighLevel"],
        techFull: ["n8n", "Odoo API", "XML-RPC", "GoHighLevel", "WhatsApp API", "Email / SMTP"],
        metrics: [
            { label: "Leads reactivados", value: "1.500+" },
            { label: "Campaña", value: "3 pasos (WhatsApp + Email)" },
            { label: "Horas ahorradas", value: "315+" },
            { label: "Ejecución", value: "Automática" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Reactivar de forma masiva y automática las oportunidades comerciales que quedaron sin seguimiento en el CRM, sin trabajo manual del equipo de ventas." },
                    { type: "paragraph", text: "El equipo comercial acumulaba cientos de oportunidades marcadas para reagendar que nunca se retomaban por falta de tiempo. Retomarlas una por una era inviable y se perdían negocios que ya habían mostrado interés. El objetivo fue construir un flujo que hiciera ese recontacto de forma confiable y a escala." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Desarrollé un flujo en n8n que consulta el CRM (Odoo) vía API, filtra las oportunidades que cumplen los criterios de recontacto y las carga en una campaña multicanal orquestada desde GoHighLevel." },
                    { type: "paragraph", text: "La campaña ejecuta una secuencia de tres pasos combinando WhatsApp y email, con tiempos y condiciones definidos, de modo que cada lead recibe un seguimiento consistente sin que nadie tenga que enviarlo a mano." },
                    { type: "paragraph", text: "El flujo se diseñó para ser repetible: puede relanzarse sobre nuevos segmentos de oportunidades a medida que el CRM se actualiza." }
                ]
            }
        ],
        features: [
            { title: "Lectura directa del CRM", description: "Extracción de oportunidades desde Odoo por API, con filtros por estado y fecha para atacar solo los leads correctos." },
            { title: "Campaña multicanal", description: "Secuencia de tres pasos por WhatsApp y email orquestada en GoHighLevel, sin envíos manuales." },
            { title: "Ejecución a escala", description: "Recontacto de más de 1.500 oportunidades en una sola corrida, con seguimiento consistente para cada una." }
        ],
        visible: true
    },
    {
        id: "prospeccion-automatizada-de-leads-b2b",
        number: "14",
        category: "Automatización y Ventas",
        title: "Prospección Automatizada de Leads B2B",
        subtitle: "Búsqueda, enriquecimiento y carga de prospectos en cadencias de outbound sin trabajo manual",
        description: "Diseño e implementación de un flujo en n8n que construye listas de prospectos B2B desde Apollo, enriquece cada contacto con su email verificado y los carga automáticamente en cadencias de outbound en Klenty.",
        year: "2025",
        company: "Cliente B2B",
        duration: "En operación",
        image: "img/proyectos/prospeccion-automatizada-de-leads-b2b.jpg",
        imageCaption: "Del filtro de búsqueda al prospecto listo en cadencia de outbound",
        gallery: [
            {"src": "img/proyectos/galeria/flujo-prospeccion-b2b/01-flujo.jpg", "title": "El flujo en n8n", "caption": "El flujo que busca el perfil objetivo, verifica el correo y carga el prospecto en la cadencia de outbound."}
        ],
        galleryNote: "Reconstrucción del flujo en n8n para mostrar la arquitectura, sin datos ni credenciales del cliente",
        techCard: ["n8n", "Apollo", "Klenty"],
        techFull: ["n8n", "Apollo API", "Klenty API", "Google Sheets", "IA (agente de resiliencia)"],
        metrics: [
            { label: "Fuente", value: "Apollo B2B" },
            { label: "Enriquecimiento", value: "Email verificado" },
            { label: "Destino", value: "Cadencia Klenty" },
            { label: "Ejecución", value: "Por filtros" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Alimentar de forma continua las cadencias de outbound con prospectos B2B reales y contactables, sin que nadie tenga que buscarlos ni cargarlos a mano." },
                    { type: "paragraph", text: "Armar listas de prospectos, verificar sus correos y cargarlos uno por uno en la herramienta de cadencias consumía horas y frenaba el ritmo comercial. El objetivo fue automatizar todo el camino, desde la búsqueda hasta la cadencia, con datos confiables." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Desarrollé un flujo en n8n que recibe los filtros de búsqueda, consulta Apollo para encontrar contactos que encajan con el perfil objetivo y descarta los que no tienen email." },
                    { type: "paragraph", text: "Cada contacto válido se enriquece para obtener su email verificado, se registra en una hoja de control y se crea como prospecto en Klenty, agregándolo directamente a la cadencia de outbound correspondiente." },
                    { type: "paragraph", text: "El flujo incorpora una capa de resiliencia con un agente de IA y reintentos con backoff, de modo que los límites de las APIs no interrumpen la carga de prospectos." }
                ]
            }
        ],
        features: [
            { title: "Búsqueda por perfil objetivo", description: "Consulta a Apollo con filtros configurables para traer solo los contactos que encajan con el cliente ideal." },
            { title: "Email verificado", description: "Enriquecimiento de cada contacto para cargar únicamente prospectos con correo verificado y contactable." },
            { title: "Carga directa en cadencia", description: "Alta automática del prospecto en Klenty y su ingreso a la cadencia de outbound, sin pasos manuales." },
            { title: "Resiliencia ante límites de API", description: "Agente de IA con reintentos y backoff que evita cortes cuando las APIs devuelven límites de uso." }
        ],
        visible: true
    },
    {
        id: "recordatorio-automatizado-de-reuniones-whatsapp",
        number: "15",
        category: "Automatización y Agendamiento",
        title: "Recordatorio Automático de Reuniones",
        subtitle: "Mensajes de WhatsApp que recuerdan cada reunión agendada y reducen las ausencias",
        description: "Diseño e implementación de un flujo en n8n que cada día consulta las reuniones agendadas para el día siguiente y envía un recordatorio automático por WhatsApp a cada persona, reduciendo las ausencias sin ningún trabajo manual.",
        year: "2025",
        company: "Cliente B2B",
        duration: "En operación",
        image: "img/proyectos/recordatorio-automatizado-de-reuniones-whatsapp.jpg",
        imageCaption: "De la agenda del día siguiente al recordatorio en WhatsApp, en automático",
        gallery: [
            {"src": "img/proyectos/galeria/flujo-recordatorios/01-flujo.jpg", "title": "El flujo en n8n", "caption": "La revisión diaria de la agenda que filtra teléfonos válidos y envía el recordatorio por WhatsApp."}
        ],
        galleryNote: "Reconstrucción del flujo en n8n para mostrar la arquitectura, sin datos ni credenciales del cliente",
        techCard: ["n8n", "WhatsApp", "AiSensy"],
        techFull: ["n8n", "AiSensy (WhatsApp API)", "Plataforma de agendamiento", "Schedule Trigger"],
        metrics: [
            { label: "Disparo", value: "Diario automático" },
            { label: "Canal", value: "WhatsApp" },
            { label: "Objetivo", value: "Menos ausencias" },
            { label: "Ejecución", value: "Sin intervención" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Recordarle a cada persona su reunión agendada por WhatsApp, de forma automática, para que menos citas se pierdan por olvido." },
                    { type: "paragraph", text: "Las reuniones agendadas que nadie recordaba terminaban en ausencias, tiempo perdido y agendas vacías. El objetivo fue enviar un recordatorio confiable a cada persona el día antes de su cita, sin que el equipo tuviera que revisar la agenda ni escribir mensajes a mano." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Desarrollé un flujo en n8n que corre todos los días a una hora fija, consulta las reuniones agendadas para el día siguiente y arma los datos de cada persona: nombre, teléfono y hora de la cita." },
                    { type: "paragraph", text: "Con esos datos, el flujo envía un recordatorio por WhatsApp a través de AiSensy a cada contacto con teléfono válido, y separa para revisión manual los casos sin un número utilizable." },
                    { type: "paragraph", text: "Todo el proceso ocurre sin intervención humana: el equipo ya no revisa la agenda ni redacta recordatorios, y cada persona recibe su aviso a tiempo." }
                ]
            }
        ],
        features: [
            { title: "Consulta diaria de la agenda", description: "Un disparador programado revisa cada día las reuniones agendadas para la jornada siguiente." },
            { title: "Recordatorio por WhatsApp", description: "Envío automático del recordatorio a cada persona a través de AiSensy, con nombre y hora de su cita." },
            { title: "Filtro de teléfonos válidos", description: "Separa los contactos sin número utilizable para revisión manual y evita envíos fallidos." },
            { title: "Sin trabajo manual", description: "El equipo deja de revisar agendas y escribir mensajes uno por uno; el flujo lo hace solo cada día." }
        ],
        visible: true
    },
    {
        id: "agente-de-ia-que-atiende-y-cobra-por-whatsapp",
        number: "16",
        category: "IA y Atención al Cliente",
        title: "Agente de IA que Atiende y Cobra por WhatsApp",
        subtitle: "Un agente conversacional que responde en WhatsApp, resuelve dudas de compra y recupera pagos pendientes sin que nadie escriba a mano",
        description: "Diseño e implementación de un agente de IA que conversa por WhatsApp con cada persona interesada, responde sus dudas sobre el producto, arma el pedido y hace seguimiento a los pagos que quedaron a medias, operando las 24 horas y pasando a una persona del equipo cuando hace falta.",
        year: "2026",
        company: "Cliente de comercio electrónico",
        duration: "En operación",
        image: "img/proyectos/agente-whatsapp.jpg",
        imageCaption: "Bandeja de conversaciones del agente en el panel de operación, con los datos de ejemplo y las cifras ocultas",
        gallery: [
            { src: "img/proyectos/galeria/panel-operacion/mensajes.jpg", title: "Bandeja de conversaciones", caption: "El hilo completo de cada contacto, con la etapa de compra y la opción de tomar el control en cualquier momento." },
            { src: "img/proyectos/galeria/panel-operacion/metricas.jpg", title: "Tablero de operación", caption: "Volumen, conversión y ticket promedio del canal. Las cifras van ocultas." },
            { src: "img/proyectos/galeria/panel-operacion/auditoria.jpg", title: "Auditoría del agente", caption: "Cada conversación se revisa contra las reglas del negocio y queda con su puntaje y su motivo." },
            { src: "img/proyectos/galeria/panel-operacion/agente.jpg", title: "Configuración del agente", caption: "Modelo, tiempos de espera y el límite exacto de lo que puede resolver antes de ceder el turno." },
            { src: "img/proyectos/galeria/panel-operacion/costos.jpg", title: "Costo de operación", caption: "Gasto por día, por conversación y por venta, con la proyección de cierre de ciclo. Los montos van ocultos." }
        ],
        galleryNote: "Capturas del panel en modo demostración, con datos de ejemplo y las cifras del cliente ocultas",
        techCard: ["Python", "LangGraph", "WhatsApp API", "PostgreSQL"],
        techFull: [
            "Python",
            "LangGraph",
            "WhatsApp Cloud API",
            "PostgreSQL",
            "Chatwoot",
            "Docker"
        ],
        metrics: [
            { label: "Canal", value: "WhatsApp" },
            { label: "Operación", value: "24/7" },
            { label: "Traspaso", value: "A humano" },
            { label: "Memoria", value: "Por contacto" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Que cada persona que escribe por WhatsApp reciba una respuesta inmediata y útil, a cualquier hora, y que los pagos que quedan a medias se recuperen solos." },
                    { type: "paragraph", text: "El equipo contestaba mensajes uno por uno y solo dentro del horario laboral. Las consultas de la noche y del fin de semana se acumulaban, y los pedidos que quedaban sin pagar se enfriaban porque nadie alcanzaba a hacerles seguimiento. El objetivo fue montar un agente que sostuviera la conversación completa y supiera cuándo ceder el turno a una persona." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Construí un agente conversacional en Python con LangGraph, conectado a la API oficial de WhatsApp, que mantiene el hilo de cada contacto y recuerda lo que ya se habló con esa persona." },
                    { type: "paragraph", text: "El agente resuelve las dudas frecuentes del producto, arma el pedido, envía el enlace de pago y, si el pago no se completa, retoma la conversación días después con un mensaje que tiene en cuenta en qué punto se quedó." },
                    { type: "paragraph", text: "Toda la conversación queda guardada en PostgreSQL y espejada en una bandeja donde el equipo puede leer el hilo completo y tomar el control en cualquier momento. El agente detecta solo los casos que se salen de su alcance y los entrega a una persona." }
                ]
            }
        ],
        features: [
            { title: "Conversación con memoria", description: "El agente recuerda lo que ya habló con cada contacto, así que no repite preguntas ni pierde el hilo entre un día y otro." },
            { title: "Recuperación de pagos", description: "Cuando un pedido queda sin pagar, el agente retoma la conversación con un mensaje que reconoce en qué punto se quedó la compra." },
            { title: "Traspaso a una persona", description: "Los casos fuera de su alcance se entregan a un humano con todo el contexto de la conversación a la vista." },
            { title: "Operación continua", description: "Responde de noche y en fin de semana, cuando antes los mensajes simplemente se acumulaban hasta el lunes." }
        ],
        process: [
            { phase: "Fase 1", title: "Mapa de la conversación", description: "Relevamiento de las preguntas reales que llegan por WhatsApp y de los puntos donde se caen las compras." },
            { phase: "Fase 2", title: "Diseño del agente", description: "Definición de los turnos, la memoria por contacto y los límites claros de lo que el agente puede resolver solo." },
            { phase: "Fase 3", title: "Integración", description: "Conexión con la API oficial de WhatsApp, la pasarela de pago y la bandeja compartida del equipo." },
            { phase: "Fase 4", title: "Puesta en operación", description: "Ajuste del tono, afinado de los mensajes de seguimiento y monitoreo de las conversaciones en vivo." }
        ],
        results: [
            { number: "24/7", label: "Atención sin horario ni turnos" },
            { number: "0", label: "Mensajes escritos a mano para el primer contacto" },
            { number: "100%", label: "Conversaciones registradas y auditables" },
            { number: "Automático", label: "Seguimiento a los pagos que quedan pendientes" }
        ],
        learnings: [
            { title: "El límite importa más que la respuesta", text: "Un agente útil no es el que contesta todo, sino el que reconoce rápido lo que no le corresponde y lo entrega a una persona con el contexto completo." },
            { title: "La memoria cambia el tono", text: "Recordar la conversación anterior convierte un recordatorio genérico en un mensaje que la persona siente dirigido a ella." },
            { title: "Registrar todo desde el día uno", text: "Guardar cada conversación desde el arranque fue lo que después permitió auditar el comportamiento del agente y corregirlo con evidencia." }
        ],
        visible: true
    },
    {
        id: "panel-de-auditoria-para-un-agente-de-ia",
        number: "17",
        category: "Observabilidad de Agentes de IA",
        title: "Panel de Auditoría para un Agente de IA",
        subtitle: "Cada conversación del agente se revisa contra las reglas del negocio y queda con su rastro, para saber si respondió bien y por qué",
        description: "Construcción de un panel web donde el equipo revisa cómo se está comportando un agente de IA en producción. Cada conversación se evalúa contra las reglas del negocio, queda con su resultado y su motivo, y el acceso se separa por rol.",
        year: "2026",
        company: "Cliente de comercio electrónico",
        duration: "En operación",
        image: "img/proyectos/panel-auditoria.jpg",
        imageCaption: "Vista de auditoría del panel, con los indicadores difuminados y la marca del cliente reemplazada",
        gallery: [
            { src: "img/proyectos/galeria/panel-operacion/auditoria.jpg", title: "Resultado de cada conversación", caption: "El agente se evalúa contra las reglas del negocio y cada caso queda con su resultado y el motivo que lo explica." },
            { src: "img/proyectos/galeria/panel-operacion/agente.jpg", title: "Qué versión estaba corriendo", caption: "Modelo, tiempos de espera y límites del agente quedan a la vista, porque una regla solo sirve si se sabe contra qué versión se evaluó." },
            { src: "img/proyectos/galeria/panel-operacion/mensajes.jpg", title: "La conversación completa", caption: "Desde el hallazgo se entra al hilo entero, con la etapa en la que estaba el contacto y la opción de tomar el control." },
            { src: "img/proyectos/galeria/panel-operacion/tickets.jpg", title: "Del hallazgo al pendiente", caption: "Un caso marcado en auditoría se convierte en ticket con su evidencia enlazada, así el reporte no se queda en una captura suelta." }
        ],
        galleryNote: "Capturas del panel en modo demostración, con datos de ejemplo y las cifras del cliente ocultas",
        techCard: ["FastAPI", "PostgreSQL", "JavaScript", "Roles"],
        techFull: [
            "FastAPI",
            "Python",
            "PostgreSQL",
            "JavaScript",
            "Roles y permisos",
            "Docker"
        ],
        metrics: [
            { label: "Revisión", value: "Diaria" },
            { label: "Alcance", value: "Cada conversación" },
            { label: "Acceso", value: "Por rol" },
            { label: "Rastro", value: "Versionado" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Poder responder con evidencia si el agente está haciendo bien su trabajo, sin leer las conversaciones una por una." },
                    { type: "paragraph", text: "Un agente de IA en producción puede empezar a responder distinto sin que nadie se dé cuenta, porque nada se rompe de forma visible. El objetivo fue montar un lugar donde el comportamiento del agente se mida contra reglas escritas del negocio y quede registrado, para detectar la desviación antes que el cliente." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Desarrollé un panel web sobre una API en FastAPI que toma las conversaciones del agente y las evalúa contra un conjunto de reglas del negocio definidas por el equipo." },
                    { type: "paragraph", text: "Cada evaluación guarda el resultado y el motivo, de modo que no queda solo un aprobado o un rechazado sino la razón detrás. Las reglas están atadas a la versión de las instrucciones del agente, así que cambiar esas instrucciones obliga a revisar la evaluación en lugar de arrastrarla en silencio." },
                    { type: "paragraph", text: "El panel separa el acceso por rol, de forma que las pantallas de administración y el detalle sensible solo quedan a la vista de quien corresponde." }
                ]
            }
        ],
        features: [
            { title: "Evaluación contra reglas del negocio", description: "Cada conversación se mide contra criterios escritos por el equipo, no contra una impresión general de que el agente anda bien." },
            { title: "Motivo, no solo resultado", description: "Toda evaluación guarda por qué pasó o falló, que es lo que realmente permite corregir el comportamiento." },
            { title: "Reglas atadas a la versión", description: "Cambiar las instrucciones del agente obliga a revisar las reglas, en vez de seguir evaluando con criterios viejos." },
            { title: "Acceso separado por rol", description: "Las pantallas de administración y la información sensible quedan restringidas a los perfiles autorizados." }
        ],
        process: [
            { phase: "Fase 1", title: "Definición de criterios", description: "Traducción de las expectativas del negocio a reglas concretas y verificables sobre la conversación." },
            { phase: "Fase 2", title: "Motor de evaluación", description: "Implementación del proceso que recorre las conversaciones y deja resultado y motivo en la base de datos." },
            { phase: "Fase 3", title: "Panel de revisión", description: "Construcción de las vistas para filtrar, leer el hilo completo y entender una evaluación en contexto." },
            { phase: "Fase 4", title: "Control de acceso", description: "Separación de permisos por rol para proteger las pantallas de administración y el detalle sensible." }
        ],
        results: [
            { number: "100%", label: "Conversaciones evaluadas de forma automática" },
            { number: "Con motivo", label: "Cada resultado explica por qué se aprobó o falló" },
            { number: "Versionado", label: "Las reglas quedan atadas a la versión de instrucciones" },
            { number: "Por rol", label: "Acceso restringido a la información sensible" }
        ],
        learnings: [
            { title: "Un agente falla en silencio", text: "A diferencia de un proceso tradicional, un agente que se desvía no arroja ningún error; sin auditoría nadie se entera hasta que se queja un cliente." },
            { title: "Auditar exige criterios escritos", text: "No se puede evaluar contra una idea vaga de calidad. Escribir las reglas fue la mitad del trabajo del proyecto." },
            { title: "Versionar evita evaluaciones fantasma", text: "Atar las reglas a la versión de las instrucciones impide que el panel siga dando por bueno un comportamiento que ya cambió." }
        ],
        visible: true
    },
    {
        id: "de-plataforma-por-suscripcion-a-infraestructura-propia",
        number: "18",
        category: "Arquitectura y Costos",
        title: "De una Plataforma por Suscripción a Infraestructura Propia",
        subtitle: "Rediseño de una operación que vivía en una herramienta de pago por operación, llevándola a infraestructura propia con el costo bajo control y a la vista",
        description: "Migración por etapas de una operación completa que corría sobre una plataforma en la nube facturada por operación, hacia infraestructura propia en contenedores, con los datos corriendo en paralelo durante todo el proceso y una reducción del costo mensual del 91 por ciento.",
        year: "2026",
        company: "Cliente de comercio electrónico",
        duration: "En operación",
        image: "img/proyectos/migracion-costos.jpg",
        imageCaption: "Vista de costos del panel, con las cifras difuminadas y la marca del cliente reemplazada",
        gallery: [
            { src: "img/proyectos/galeria/panel-operacion/costos.jpg", title: "Qué cuesta operar hoy", caption: "Gasto por día, por conversación y por venta, con la proyección de cierre de ciclo. Antes el costo solo se veía en la factura de fin de mes." },
            { src: "img/proyectos/galeria/panel-operacion/negocio.jpg", title: "El costo contra el ingreso", caption: "Ingreso, costo y margen en la misma pantalla, que es la única forma de saber si la migración valió la pena." },
            { src: "img/proyectos/galeria/panel-operacion/metricas.jpg", title: "La operación sigue igual de visible", caption: "Volumen y conversión del canal después del cambio de infraestructura, para comprobar que nada se rompió en el camino." }
        ],
        galleryNote: "Capturas del panel en modo demostración, con datos de ejemplo y las cifras del cliente ocultas",
        techCard: ["Docker", "Coolify", "PostgreSQL", "Python"],
        techFull: [
            "Docker",
            "Coolify",
            "PostgreSQL",
            "Python",
            "FastAPI",
            "VPS"
        ],
        metrics: [
            { label: "Costo mensual", value: "-91%" },
            { label: "Corte", value: "Por etapas" },
            { label: "Datos", value: "En paralelo" },
            { label: "Control", value: "Propio" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Sacar la operación de una plataforma que cobraba por cada operación ejecutada, sin apagar el negocio ni un solo día." },
                    { type: "paragraph", text: "El costo de la plataforma crecía con el volumen, así que vender más salía cada vez más caro. Además, la lógica del negocio vivía dentro de una herramienta ajena y no se podía auditar de verdad. El objetivo fue llevar todo a infraestructura propia manteniendo la operación viva durante la transición." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Levanté primero la línea base real de costo, operación por operación, para tener un número verificable contra el cual comparar. Ese trabajo fue el que sostuvo toda la decisión." },
                    { type: "paragraph", text: "Después diseñé la salida en etapas, con los datos escribiéndose en paralelo desde el primer día en la nueva base, de modo que la infraestructura propia se fue llenando de información real mientras la plataforma vieja seguía operando." },
                    { type: "paragraph", text: "Cada etapa se cortó cuando la nueva ruta ya estaba probada, y se cuidó que nadie quedara a mitad de un ciclo de garantía en el momento del cambio. El resultado fue una operación equivalente sobre contenedores propios, con el costo bajo control y la lógica del negocio a la vista." }
                ]
            }
        ],
        features: [
            { title: "Línea base verificable", description: "Antes de mover nada se midió el costo real por operación, para que el ahorro fuera un número comprobable y no una promesa." },
            { title: "Datos en paralelo", description: "La nueva base se fue llenando con información real desde el primer día, mucho antes de apagar la plataforma anterior." },
            { title: "Corte por etapas", description: "Cada pieza se migró y se probó por separado, así ninguna falla podía tumbar la operación completa." },
            { title: "Lógica auditable", description: "Las reglas del negocio dejaron de estar encerradas en una herramienta ajena y quedaron en código que se puede leer y versionar." }
        ],
        process: [
            { phase: "Fase 1", title: "Medición del costo real", description: "Reconstrucción del gasto por operación para tener una línea base verificable y no una estimación." },
            { phase: "Fase 2", title: "Réplica en paralelo", description: "Montaje de la infraestructura propia escribiendo los mismos datos, sin tocar todavía la operación en vivo." },
            { phase: "Fase 3", title: "Corte por etapas", description: "Traslado de una pieza a la vez, cada una con su verificación antes de apagar la ruta anterior." },
            { phase: "Fase 4", title: "Cierre y respaldo", description: "Rescate del historial y de la configuración de la plataforma saliente antes de dar de baja la suscripción." }
        ],
        results: [
            { number: "-91%", label: "Reducción del costo mensual de operación" },
            { number: "0", label: "Días de operación detenida durante la migración" },
            { number: "Propio", label: "Control total de los datos y la lógica del negocio" },
            { number: "Fijo", label: "El costo dejó de crecer con el volumen de ventas" }
        ],
        learnings: [
            { title: "Medir antes de migrar", text: "Sin una línea base verificable, cualquier ahorro que uno reporte después es discutible. Medir primero fue lo que hizo defendible la decisión." },
            { title: "Pagar por operación castiga el crecimiento", text: "Un modelo de cobro por ejecución significa que el mejor mes del negocio es también el más caro, y eso se nota rápido cuando el volumen sube." },
            { title: "Nadie a medio ciclo", text: "La parte delicada de una migración no es técnica sino de calendario, porque hay personas a mitad de un proceso que no pueden quedar en el limbo." }
        ],
        visible: true
    },
    {
        id: "plataforma-de-orientacion-vocacional-con-ia",
        number: "19",
        category: "IA y Educación",
        title: "Plataforma de Orientación Vocacional con IA",
        subtitle: "Un cuestionario vocacional con una conversación de IA que responde citando los documentos oficiales de la institución",
        description: "Desarrollo de una plataforma web donde una persona responde un cuestionario vocacional, recibe su resultado y puede conversar con un asistente de IA que responde únicamente con base en los documentos institucionales, citando el documento y la página de donde sale cada respuesta.",
        year: "2026",
        company: "Institución educativa",
        duration: "En operación",
        image: "img/proyectos/orientacion-vocacional.jpg",
        imageCaption: "Arquitectura de la plataforma, con la capa de IA aislada de la aplicación y de la API de negocio",
        gallery: [
            { src: "img/proyectos/galeria/orientacion-vocacional/01-inicio.jpg", title: "Entrada al recorrido", caption: "La pantalla que ve el estudiante al llegar. El lenguaje está pensado para alguien de grado once, no para un formulario administrativo." },
            { src: "img/proyectos/galeria/orientacion-vocacional/02-avatar.jpg", title: "Elección de avatar", caption: "Antes de las preguntas, la persona escoge cómo quiere aparecer. Es lo que sostiene la atención hasta el final del cuestionario." },
            { src: "img/proyectos/galeria/orientacion-vocacional/03-datos.jpg", title: "Datos y consentimiento", caption: "Los datos mínimos que la institución necesita para el seguimiento, con la autorización de tratamiento explícita." },
            { src: "img/proyectos/galeria/orientacion-vocacional/04-pregunta.jpg", title: "Cuestionario vocacional", caption: "Veintidós preguntas de situación, sin escalas numéricas. Cada opción suma a un perfil distinto." },
            { src: "img/proyectos/galeria/orientacion-vocacional/05-resultado.jpg", title: "Resultado del perfil", caption: "El perfil dominante explicado en lenguaje claro, junto a los programas de la institución que mejor encajan." },
            { src: "img/proyectos/galeria/orientacion-vocacional/06-afinidades.jpg", title: "Mapa de afinidades", caption: "El peso de cada perfil en la persona, para que el resultado no se lea como una etiqueta única." },
            { src: "img/proyectos/galeria/orientacion-vocacional/07-asesor.jpg", title: "Asesor de IA con citas", caption: "La conversación sobre el resultado. Cada respuesta sale de los documentos oficiales y dice de qué documento y qué página viene." }
        ],
        galleryNote: "Recorrido completo en modo demostración, con datos de ejemplo y la marca de la institución reemplazada",
        techCard: ["Angular", ".NET", "MySQL", "pgvector"],
        techFull: [
            "Angular",
            ".NET",
            "MySQL",
            "pgvector",
            "Python",
            "Docker"
        ],
        metrics: [
            { label: "Resultado", value: "Inmediato" },
            { label: "Respuestas", value: "Con cita" },
            { label: "Capa de IA", value: "Aislada" },
            { label: "Panel", value: "Con roles" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Que una persona indecisa pueda explorar su vocación y resolver dudas reales sobre los programas, con respuestas que salen de los documentos oficiales y no de la imaginación del modelo." },
                    { type: "paragraph", text: "La orientación dependía de la disponibilidad de una persona y del material que esa persona tuviera a mano. El objetivo fue ofrecer un primer acercamiento disponible en todo momento, confiable, donde cada afirmación sobre un programa se pueda rastrear hasta el documento que la respalda." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "La plataforma tiene una aplicación web donde la persona responde el cuestionario y recibe su resultado, y una API de negocio que administra catálogos, resultados, sesión y permisos." },
                    { type: "paragraph", text: "La conversación con IA corre en un servicio aparte, con los documentos institucionales indexados en una base vectorial. Cada respuesta cita el documento y la página de donde proviene, de modo que la afirmación se puede verificar." },
                    { type: "paragraph", text: "El panel de administración permite editar las instrucciones del asistente sin tocar código, y el acceso está separado por rol. La capa de IA quedó desacoplada a propósito, así cambiar de modelo, local o en la nube, no obliga a modificar la aplicación ni la API." }
                ]
            }
        ],
        features: [
            { title: "Respuestas con fuente", description: "Cada respuesta del asistente cita el documento institucional y la página de donde sale, así se puede verificar en vez de creer." },
            { title: "Capa de IA desacoplada", description: "El servicio de IA vive aparte, de modo que cambiar de proveedor o de modelo no toca la aplicación ni la API de negocio." },
            { title: "Sin llaves en el navegador", description: "El front nunca habla directo con el proveedor de IA, siempre pasa por la API, así ninguna credencial queda expuesta en el cliente." },
            { title: "Instrucciones editables", description: "El comportamiento del asistente se ajusta desde el panel de administración sin necesidad de un despliegue." }
        ],
        process: [
            { phase: "Fase 1", title: "Modelo del cuestionario", description: "Definición de la estructura del test, los catálogos y la forma de calcular y presentar el resultado." },
            { phase: "Fase 2", title: "Aplicación y API", description: "Construcción del front en Angular y de la API de negocio en .NET con sesión, roles y permisos." },
            { phase: "Fase 3", title: "Capa de conocimiento", description: "Indexación de los documentos institucionales en una base vectorial para que las respuestas salgan de la fuente oficial." },
            { phase: "Fase 4", title: "Panel y despliegue", description: "Administración con roles, edición de instrucciones y puesta en marcha en contenedores." }
        ],
        results: [
            { number: "100%", label: "Respuestas del asistente citando documento y página" },
            { number: "0", label: "Credenciales de IA expuestas en el navegador" },
            { number: "Inmediato", label: "Resultado del cuestionario sin esperar a una cita" },
            { number: "Intercambiable", label: "El modelo de IA se puede cambiar sin tocar la aplicación" }
        ],
        learnings: [
            { title: "Citar la fuente cambia la confianza", text: "En un contexto educativo, una respuesta sin respaldo no sirve. Mostrar el documento y la página convierte al asistente en algo verificable." },
            { title: "Aislar la IA protege el proyecto", text: "Separar el servicio de IA permitió evaluar modelos distintos, locales y en la nube, sin rehacer nada de la aplicación." },
            { title: "Editar sin desplegar", text: "Dejar las instrucciones del asistente en el panel le devolvió al equipo el control sobre el tono, sin depender de un desarrollador." }
        ],
        visible: true
    },
    {
        id: "agente-de-ia-para-insights-estrategicos",
        number: "02",
        category: "IA y Automatización",
        title: "Agente de IA para Insights Estratégicos",
        subtitle: "Agente de IA que transforma métricas de shows en recomendaciones estratégicas personalizadas.",
        description: "Desarrollé un agente de IA que analiza métricas de rendimiento para generar insights estratégicos personalizados y optimizar la toma de decisiones. Automatiza la creación y envío de informes en PDF.",
        year: "2025",
        company: "Urpe AI Lab",
        duration: "1 mes",
        image: "img/proyectos/agente-de-ia-para-insights-estrategicos.jpg",
        imageCaption: "Visualización del flujo de un agente de IA generando informes estratégicos automatizados.",
        gallery: [
            {"src": "img/proyectos/galeria/flujo-insights/01-flujo.jpg", "title": "El flujo en n8n", "caption": "El flujo que reúne la información, la analiza con IA y deja los hallazgos listos para el equipo."}
        ],
        galleryNote: "Reconstrucción del flujo en n8n para mostrar la arquitectura, sin datos ni credenciales del cliente",
        techCard: [
            "OpenAI",
            "n8n",
            "Supabase",
            "JavaScript"
        ],
        techFull: [
            "OpenAI",
            "n8n",
            "Supabase",
            "Gmail API",
            "Generación de PDF",
            "JavaScript"
        ],
        metrics: [
            {
                label: "Reducción tiempo informes",
                value: "80%"
            },
            {
                label: "Precisión insights",
                value: "95%"
            },
            {
                label: "Entrega automatizada",
                value: "100%"
            },
            {
                label: "Contextualización datos",
                value: "Personalizada"
            }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Automatizar la generación de insights estratégicos personalizados para optimizar la toma de decisiones basada en datos de rendimiento."
                    },
                    {
                        type: "paragraph",
                        text: "El objetivo principal fue desarrollar un agente de inteligencia artificial capaz de procesar y contextualizar métricas de rendimiento de shows. Este sistema debía transformar datos brutos en conclusiones accionables, generar recomendaciones claras y presentarlas en un formato accesible, reduciendo drásticamente el tiempo de elaboración de informes manuales y mejorando la calidad de las decisiones estratégicas."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "Este proyecto consistió en la creación de un agente de inteligencia artificial avanzado, diseñado específicamente para analizar métricas de rendimiento de diversos shows y generar insights estratégicos a medida. El sistema fue configurado para comprender el contexto particular de cada proyecto, garantizando que los análisis y las recomendaciones fueran siempre relevantes y alineadas con los objetivos específicos."
                    },
                    {
                        type: "paragraph",
                        text: "La arquitectura del agente integra capacidades de procesamiento de lenguaje natural de OpenAI para interpretar los datos y formular conclusiones coherentes. n8n se utilizó como orquestador principal del flujo de trabajo, gestionando cada paso desde la ingesta de datos hasta la generación del informe. Supabase fue elegido como base de datos para almacenar configuraciones, métricas históricas y parámetros de personalización."
                    },
                    {
                        type: "paragraph",
                        text: "El resultado final del sistema es un documento PDF optimizado, que presenta las conclusiones y recomendaciones de forma clara y concisa. Este informe se genera automáticamente y, mediante la integración con la API de Gmail, se envía de forma proactiva a las partes interesadas, asegurando una difusión rápida y eficiente de la información crítica para la toma de decisiones."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Análisis Contextual Inteligente",
                description: "El agente evalúa los datos de rendimiento considerando los objetivos específicos de cada proyecto, asegurando insights de alta relevancia y personalización."
            },
            {
                title: "Generación de Insights Accionables",
                description: "Transforma métricas brutas en conclusiones estratégicas claras y recomendaciones prácticas que impulsan la toma de decisiones informadas."
            },
            {
                title: "Automatización Completa de Informes",
                description: "Produce informes detallados en formato PDF de manera automática, eliminando la necesidad de creación manual y optimizando el tiempo del equipo."
            },
            {
                title: "Distribución Automatizada por Email",
                description: "Envía los informes estratégicos generados directamente a los interesados vía Gmail API, garantizando una comunicación oportuna y eficiente."
            }
        ],
        process: [
            {
                phase: "Fase 1",
                title: "Diseño y Conceptualización",
                description: "Definición de los requisitos funcionales y no funcionales, arquitectura del sistema y selección de las tecnologías clave para la IA y la automatización."
            },
            {
                phase: "Fase 2",
                title: "Desarrollo e Integración",
                description: "Implementación del motor de IA con OpenAI, configuración de los flujos de trabajo en n8n y desarrollo de las integraciones con Supabase y la API de Gmail."
            },
            {
                phase: "Fase 3",
                title: "Pruebas y Optimización",
                description: "Realización de pruebas exhaustivas del agente, validación de la generación de insights, ajuste de parámetros y optimización del formato de los informes PDF."
            },
            {
                phase: "Fase 4",
                title: "Despliegue y Monitorización",
                description: "Puesta en producción del sistema, configuración de la ejecución automatizada y establecimiento de un sistema de monitorización para asegurar su rendimiento continuo."
            }
        ],
        results: [
            {
                number: "80%",
                label: "Reducción en el tiempo de generación de informes estratégicos."
            },
            {
                number: "95%",
                label: "Mejora en la precisión y relevancia de las recomendaciones personalizadas."
            },
            {
                number: "100%",
                label: "Automatización completa del proceso de creación y distribución de informes."
            },
            {
                number: "1",
                label: "Mes de duración del proyecto, demostrando eficiencia en el desarrollo y la implementación."
            }
        ],
        learnings: [
            {
                title: "La Importancia del Contexto en IA",
                text: "Comprendimos que la personalización profunda de los insights requiere una contextualización meticulosa de los datos, lo que multiplica el valor de las recomendaciones generadas por la IA."
            },
            {
                title: "Orquestación Robusta con n8n",
                text: "La implementación de n8n demostró ser crucial para crear flujos de trabajo complejos y robustos, integrando múltiples APIs y servicios de manera eficiente y escalable."
            },
            {
                title: "Impacto de la Automatización Estratégica",
                text: "La automatización no solo ahorra tiempo, sino que también estandariza la calidad y la velocidad de entrega de información crítica, empoderando la toma de decisiones ágil."
            }
        ],
        visible: true
    },
    {
        id: "automatizacion-inteligente-de-analisis-de-shows",
        number: "03",
        category: "Automatización y Datos",
        title: "Automatización Inteligente de Análisis de Shows",
        subtitle: "Sistema automatizado para el análisis de rendimiento de shows mediante IA y visualización de datos.",
        description: "Flujo automatizado que procesa datos de shows con IA, almacenándolos para generar métricas y visualizaciones personalizadas. Permite un análisis de rendimiento centralizado y eficiente, eliminando tareas manuales.",
        year: "2025",
        company: "Urpe AI Lab",
        duration: "1 mes",
        hoursSaved: 515,
        image: "img/proyectos/automatizacion-inteligente-de-analisis-de-shows.jpg",
        imageCaption: "Dashboard de análisis de shows con métricas y visualizaciones clave.",
        gallery: [
            {"src": "img/proyectos/galeria/flujo-analisis-shows/01-flujo.jpg", "title": "El flujo en n8n", "caption": "El proceso que trae los datos de los shows, los analiza con IA y detecta las tendencias de la semana."}
        ],
        galleryNote: "Reconstrucción del flujo en n8n para mostrar la arquitectura, sin datos ni credenciales del cliente",
        techCard: [
            "n8n",
            "OpenAI",
            "Supabase",
            "Análisis de Datos"
        ],
        techFull: [
            "n8n",
            "OpenAI",
            "Supabase",
            "Webhooks",
            "Análisis de Datos",
            "Visualización"
        ],
        metrics: [
            {
                label: "Reducción de Tiempo de Análisis",
                value: "80%"
            },
            {
                label: "Precisión en Métricas",
                value: "95%+ "
            },
            {
                label: "Fuentes de Datos Integradas",
                value: "6+"
            },
            {
                label: "Informes Generados",
                value: "500+"
            }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Optimizar el proceso de análisis de rendimiento de shows mediante la automatización e inteligencia artificial."
                    },
                    {
                        type: "paragraph",
                        text: "El proyecto busca eliminar la necesidad de cálculos manuales y consultas a diversas fuentes, centralizando la información y proporcionando una visión clara y accionable del desempeño de cada evento."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "Desarrollé un flujo automatizado en n8n que ingiere datos de shows desde una página web a través de un webhook controlado, asegurando la captura eficiente y en tiempo real de la información relevante."
                    },
                    {
                        type: "paragraph",
                        text: "Implementé capacidades de inteligencia artificial, utilizando OpenAI, para procesar y analizar los datos recibidos, extrayendo métricas clave y patrones de rendimiento que serían difíciles de identificar manualmente."
                    },
                    {
                        type: "paragraph",
                        text: "Los datos procesados son almacenados en una base de datos centralizada (Supabase). Posteriormente, el sistema genera estadísticas, métricas y visualizaciones personalizadas, permitiendo a los clientes analizar su rendimiento desde un único panel, eliminando la necesidad de cálculos manuales y consultas a múltiples fuentes."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Ingesta Automatizada de Datos",
                description: "Sistema de webhooks controlado para la captura automática y eficiente de información de shows desde la fuente web."
            },
            {
                title: "Análisis Inteligente con IA",
                description: "Utilización de OpenAI para procesar datos, extraer métricas relevantes y detectar patrones de rendimiento de manera autónoma."
            },
            {
                title: "Base de Datos Centralizada",
                description: "Almacenamiento robusto y escalable de todos los datos procesados en Supabase para una gestión y acceso unificados."
            },
            {
                title: "Visualizaciones Personalizadas",
                description: "Generación de dashboards y reportes adaptados para una comprensión rápida y profunda del desempeño de cada show."
            }
        ],
        process: [
            {
                phase: "Fase 1",
                title: "Diseño y Planificación",
                description: "Definición de los requisitos, diseño del flujo de datos y la arquitectura general del sistema automatizado."
            },
            {
                phase: "Fase 2",
                title: "Implementación del Flujo n8n",
                description: "Desarrollo del webhook de ingesta, configuración de los nodos de n8n y la lógica de procesamiento de datos inicial."
            },
            {
                phase: "Fase 3",
                title: "Integración de IA y BD",
                description: "Conexión con la API de OpenAI para el análisis inteligente y configuración de Supabase para el almacenamiento estructurado de los resultados."
            },
            {
                phase: "Fase 4",
                title: "Desarrollo de Visualizaciones",
                description: "Creación del panel de control y las visualizaciones personalizadas para presentar las métricas de rendimiento a los usuarios finales."
            }
        ],
        results: [
            {
                number: "80%",
                label: "Reducción en el tiempo dedicado al análisis manual de shows."
            },
            {
                number: "95%+",
                label: "Mejora en la precisión de las métricas y los insights obtenidos gracias a la IA."
            },
            {
                number: "1",
                label: "Panel centralizado y unificado para el monitoreo de todos los shows."
            },
            {
                number: "6+",
                label: "Fuentes de datos de shows integradas automáticamente en un solo sistema."
            }
        ],
        learnings: [
            {
                title: "Optimización de Flujos de Trabajo",
                text: "La implementación de herramientas de automatización como n8n es crucial para eliminar tareas repetitivas y liberar recursos, permitiendo un enfoque en análisis estratégicos."
            },
            {
                title: "Potencial de la IA en Análisis de Datos",
                text: "La inteligencia artificial, como OpenAI, transforma grandes volúmenes de datos brutos en insights accionables y relevantes de forma eficiente."
            },
            {
                title: "Integración de Herramientas No-Code/Low-Code",
                text: "La combinación de plataformas como n8n y Supabase demuestra la capacidad de crear soluciones robustas y escalables con un desarrollo ágil y eficiente."
            }
        ],
        visible: true
    },
    {
        id: "automatizacion-integral-de-contenido-y-diseno-con-ia-para-marketing-digital",
        number: "04",
        category: "Automatización e IA",
        title: "Automatización Integral de Contenido y Diseño con IA para Marketing Digital",
        subtitle: "Flujo automatizado para la creación y gestión de contenido web y elementos visuales con inteligencia artificial.",
        description: "Este proyecto automatiza la creación de contenido web persuasivo y elementos visuales (logos, imágenes) utilizando IA avanzada. Agiliza la producción de materiales de marketing digital y reduce significativamente el esfuerzo manual.",
        year: "2025",
        company: "Nata",
        duration: "2-3 meses",
        image: "img/proyectos/automatizacion-integral-de-contenido-y-diseno-con-ia-para-marketing-digital.jpg",
        imageCaption: "Diagrama de flujo de automatización de contenido y diseño con IA en n8n.",
        gallery: [
            {"src": "img/proyectos/galeria/flujo-contenido-marketing/01-flujo.jpg", "title": "El flujo en n8n", "caption": "El flujo que genera el copy y la imagen con IA, ensambla la pieza y la publica sin trabajo manual."}
        ],
        galleryNote: "Reconstrucción del flujo en n8n para mostrar la arquitectura, sin datos ni credenciales del cliente",
        techCard: [
            "n8n",
            "Google Gemini",
            "OpenAI GPT-4o",
            "Google Docs"
        ],
        techFull: [
            "n8n",
            "Google Gemini",
            "OpenAI GPT-4o",
            "Google Drive",
            "Google Docs",
            "Google Docs API",
            "Webhooks",
            "Extracción de PDF"
        ],
        metrics: [
            {
                label: "Reducción tiempo producción contenido",
                value: "Hasta 70%"
            },
            {
                label: "Incremento eficiencia equipos marketing",
                value: "45%"
            },
            {
                label: "Volumen de contenido generado/editado",
                value: "50+ piezas/mes"
            },
            {
                label: "Optimización costos operativos",
                value: "25%"
            }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Automatizar completamente la generación de contenido web persuasivo y elementos visuales de marketing digital, integrando IA avanzada para optimizar la eficiencia y reducir los tiempos de producción."
                    },
                    {
                        type: "paragraph",
                        text: "Este proyecto busca transformar el proceso manual de creación de materiales de marketing digital, desde la conceptualización hasta la entrega final, utilizando herramientas de automatización y modelos de lenguaje e imagen de última generación. El objetivo principal es ofrecer una solución escalable que permita a las empresas generar grandes volúmenes de contenido de alta calidad de manera rápida y consistente, minimizando la intervención manual y optimizando los recursos."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "El flujo de trabajo automatizado inicia con la recopilación de requisitos detallados del cliente mediante formularios interactivos. Estos datos, junto con la información clave extraída de documentos PDF, alimentan un sistema central que, a través de n8n, orquesta la interacción con modelos de IA líderes como Google Gemini y OpenAI GPT-4o."
                    },
                    {
                        type: "paragraph",
                        text: "La inteligencia artificial se encarga de la generación de textos persuasivos optimizados para marketing digital, así como de la creación y edición de logos e imágenes, asegurando coherencia con la identidad de marca y los objetivos de la campaña. Este enfoque multimodal garantiza la producción de materiales completos y atractivos."
                    },
                    {
                        type: "paragraph",
                        text: "Todos los resultados, tanto el contenido textual como los elementos visuales, se almacenan y gestionan de forma estructurada en Google Drive y Google Docs, facilitando la revisión, edición y publicación. La integración con Google Docs API y el uso de Webhooks aseguran una comunicación fluida entre todas las plataformas, garantizando un proceso ágil, eficiente y transparente."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Generación de Contenido Multimodal con IA",
                description: "Automatiza la creación de textos persuasivos y elementos visuales (logos, imágenes) utilizando Google Gemini y OpenAI GPT-4o, adaptándose a las necesidades específicas de marketing digital y optimización SEO."
            },
            {
                title: "Gestión Integrada de Documentos y Activos",
                description: "Almacenamiento y organización automática de todo el contenido generado en Google Drive y Google Docs, asegurando accesibilidad, control de versiones y colaboración eficiente para equipos de marketing."
            },
            {
                title: "Flujo de Trabajo Personalizable y Escalable",
                description: "Construido sobre n8n, permite la adaptación del proceso a diferentes tipos de clientes y campañas, escalando la producción de materiales sin esfuerzo manual adicional y optimizando los recursos operativos."
            },
            {
                title: "Captura de Requisitos y Extracción Inteligente",
                description: "Sistema robusto para la recopilación de información del cliente a través de formularios intuitivos y la extracción de datos clave de documentos PDF, alimentando directamente el motor de IA para generar contenido relevante."
            }
        ],
        process: [
            {
                phase: "Fase 1",
                title: "Definición y Recopilación de Requisitos",
                description: "Configuración de formularios personalizados y lógica de extracción de PDF para capturar de manera eficiente los requisitos específicos del cliente y la información base del proyecto."
            },
            {
                phase: "Fase 2",
                title: "Generación Inteligente de Contenido y Diseño",
                description: "Orquestación en n8n para enviar prompts optimizados a Google Gemini y OpenAI GPT-4o, generando textos persuasivos y proponiendo/editando elementos gráficos basados en las directrices."
            },
            {
                phase: "Fase 3",
                title: "Almacenamiento y Organización Automática",
                description: "Integración con Google Drive y Google Docs API para guardar, estructurar y categorizar automáticamente los resultados de la IA, asegurando un acceso y gestión eficiente de los activos."
            },
            {
                phase: "Fase 4",
                title: "Revisión Colaborativa y Entrega Final",
                description: "Preparación de los materiales generados en Google Docs para una revisión eficiente por parte del cliente o equipo interno, y posterior entrega ágil o publicación directa."
            }
        ],
        results: [
            {
                number: "70%",
                label: "Reducción en el tiempo de generación y edición de contenido web y visual."
            },
            {
                number: "50+",
                label: "Piezas de contenido y diseño gráfico generadas mensualmente de forma automatizada."
            },
            {
                number: "35%",
                label: "Aumento en la consistencia y calidad de los materiales de marketing digital producidos."
            },
            {
                number: "4",
                label: "Herramientas de IA y automatización líderes integradas sin fisuras en un único flujo."
            }
        ],
        learnings: [
            {
                title: "Optimización de Prompts y Modelos de IA",
                text: "La iteración constante en la ingeniería de prompts fue crucial para maximizar la calidad y relevancia del contenido generado por Google Gemini y OpenAI GPT-4o. Comprendimos las fortalezas de cada modelo para tareas específicas, ajustando las instrucciones para obtener resultados óptimos tanto en texto como en elementos visuales."
            },
            {
                title: "Gestión de Flujos de Trabajo Complejos con n8n",
                text: "Dominar la orquestación de múltiples APIs y servicios externos dentro de n8n, incluyendo el manejo robusto de errores y la configuración de reintentos, fue esencial para asegurar la fiabilidad y escalabilidad de la automatización integral. La modularidad de n8n permitió un desarrollo ágil y mantenimiento eficiente."
            },
            {
                title: "Integración Bidireccional con Google Workspace",
                text: "Aprender a explotar a fondo la Google Docs API y Google Drive para no solo almacenar resultados, sino también para recuperar y actualizar contenido dinámicamente, lo que permitió un control de versiones sofisticado y una colaboración en tiempo real, optimizando el ciclo de revisión y aprobación de los materiales."
            }
        ],
        visible: true
    },
    {
        id: "automatizacion-completa-de-contenido-y-publicacion-para-blog-de-tecnologia-con-ia",
        number: "05",
        category: "Automatización e IA",
        title: "Automatización Completa de Contenido y Publicación para Blog de Tecnología con IA",
        subtitle: "Flujo integral para la curación, creación y publicación automatizada de contenido tecnológico.",
        description: "Automatiza integralmente la curación, creación y publicación de contenido para blogs de tecnología.\nUtiliza IA avanzada para filtrar noticias, generar artículos y optimizar la distribución.",
        year: "2026",
        company: "Proyecto Personal",
        duration: "3 meses",
        image: "img/proyectos/automatizacion-completa-de-contenido-y-publicacion-para-blog-de-tecnologia-con-ia.jpg",
        imageCaption: "Diagrama de flujo de automatización de contenido con IA para un blog de tecnología.",
        gallery: [
            {"src": "img/proyectos/galeria/flujo-blog/01-flujo.jpg", "title": "El flujo en n8n", "caption": "La cadena que produce el contenido con IA y lo publica en el blog de forma automática."}
        ],
        galleryNote: "Reconstrucción del flujo en n8n para mostrar la arquitectura, sin datos ni credenciales del cliente",
        techCard: [
            "n8n",
            "Google Gemini",
            "OpenAI GPT-4",
            "WordPress API"
        ],
        techFull: [
            "n8n",
            "WordPress API",
            "Google Gemini",
            "OpenAI GPT-4",
            "PostgreSQL",
            "Google Sheets",
            "RSS",
            "Scrape.do API",
            "Telegram",
            "JavaScript"
        ],
        metrics: [
            {
                label: "Reducción de Tiempo de Publicación",
                value: "90%"
            },
            {
                label: "Artículos Generados por Semana",
                value: "15+"
            },
            {
                label: "Relevancia del Contenido (AI Score)",
                value: "95%"
            },
            {
                label: "Horas de Trabajo Ahorradas por Mes",
                value: "80+"
            }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Automatizar completamente la curación, creación y publicación de contenido para un blog de tecnología, superando los desafíos de la producción manual y lenta."
                    },
                    {
                        type: "paragraph",
                        text: "Este proyecto busca establecer un flujo de trabajo integral que utilice inteligencia artificial y herramientas de automatización para generar artículos de alta calidad, mantener un calendario de publicación constante y asegurar la relevancia del contenido para la audiencia de noticias tecnológicas. La meta es transformar un proceso laborioso en una operación eficiente y escalable."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "El núcleo del proyecto es un flujo de automatización que gestiona todo el ciclo de vida del contenido. Inicia con la recolección de noticias de múltiples fuentes RSS, seguida de un proceso de filtrado y puntuación de relevancia impulsado por modelos de IA avanzados para identificar las historias más impactantes y pertinentes para la audiencia tecnológica."
                    },
                    {
                        type: "paragraph",
                        text: "Una vez seleccionadas, las noticias son procesadas para extraer su contenido principal de manera eficiente. Posteriormente, motores de IA generativa (Google Gemini y OpenAI GPT-4) se encargan de reescribir los artículos, adaptando el tono y estilo del blog, y generando imágenes contextuales que enriquecen visualmente el contenido, garantizando originalidad y atractivo."
                    },
                    {
                        type: "paragraph",
                        text: "Finalmente, el contenido optimizado es publicado automáticamente en WordPress a través de su API, manejando la subida de texto, imágenes y metadatos. La gestión y el seguimiento del contenido se realizan mediante bases de datos (PostgreSQL y Google Sheets) para mantener un control exhaustivo, y las notificaciones de estado y alertas son enviadas en tiempo real vía Telegram, garantizando una supervisión efectiva y proactiva del flujo completo."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Recolección y Filtrado Inteligente de Noticias",
                description: "Automatiza la ingesta de noticias de múltiples feeds RSS, utilizando algoritmos de IA para filtrar y puntuar la relevancia del contenido, asegurando que solo las historias más importantes lleguen al proceso de creación."
            },
            {
                title: "Generación y Reescritura de Contenido con IA",
                description: "Emplea modelos de inteligencia artificial como Google Gemini y OpenAI GPT-4 para reescribir artículos originales, generar resúmenes coherentes y crear imágenes contextuales, optimizando la calidad y la originalidad del contenido sin intervención manual."
            },
            {
                title: "Publicación Automatizada en WordPress",
                description: "Integra la plataforma de blog WordPress mediante su API, permitiendo la publicación automática de artículos completos, incluyendo texto, imágenes, etiquetas y categorías, eliminando la necesidad de carga manual."
            },
            {
                title: "Monitoreo y Notificaciones en Tiempo Real",
                description: "Utiliza bases de datos (PostgreSQL, Google Sheets) para el seguimiento detallado del estado de cada artículo y el flujo. Envía notificaciones proactivas vía Telegram sobre publicaciones exitosas, errores o cualquier incidencia crítica, facilitando una supervisión ágil."
            }
        ],
        process: [
            {
                phase: "Fase 1",
                title: "Ingesta y Curación de Contenido",
                description: "Configuración de fuentes RSS para la recolección automática de noticias. Implementación de un modelo de IA para clasificar y puntuar la relevancia de cada noticia, seleccionando las más aptas."
            },
            {
                phase: "Fase 2",
                title: "Extracción y Generación con IA",
                description: "Utilización de Scrape.do para extraer el contenido principal de las noticias seleccionadas. Procesamiento del texto con Google Gemini y OpenAI GPT-4 para reescritura, mejora de SEO y generación de imágenes."
            },
            {
                phase: "Fase 3",
                title: "Publicación y Optimización",
                description: "Formateo del contenido generado para adaptarse a los estándares del blog. Publicación automatizada en WordPress a través de su API, incluyendo la subida de imágenes y metadatos."
            },
            {
                phase: "Fase 4",
                title: "Gestión y Notificaciones",
                description: "Registro de todos los artículos y su estado en bases de datos (PostgreSQL, Google Sheets). Envío de notificaciones y alertas en tiempo real vía Telegram para el monitoreo del flujo y gestión de errores."
            }
        ],
        results: [
            {
                number: "90%",
                label: "Reducción en tiempo de publicación de artículos."
            },
            {
                number: "15+",
                label: "Artículos de tecnología de alta calidad publicados semanalmente."
            },
            {
                number: "80",
                label: "Horas de trabajo manual ahorradas por mes en producción de contenido."
            },
            {
                number: "95%",
                label: "Precisión en la selección y generación de contenido relevante por IA."
            }
        ],
        learnings: [
            {
                title: "Integración Compleja de APIs y Modelos de IA",
                text: "Dominar la interconexión de diversas APIs (WordPress, Scrape.do, Gemini, GPT-4) para construir un flujo robusto y sinérgico fue clave. Esto incluyó gestionar autenticaciones, límites de tasa y optimizar las llamadas para garantizar la eficiencia y estabilidad del sistema."
            },
            {
                title: "Diseño de Lógica de Filtrado y Puntuación con IA",
                text: "Desarrollar y refinar algoritmos de IA para evaluar la relevancia y calidad de las noticias fue un desafío fundamental. Implementar sistemas de puntuación que consideraran múltiples factores permitió optimizar la selección de contenido y minimizar la intervención manual."
            },
            {
                title: "Escalabilidad y Resiliencia de Flujos Automatizados",
                text: "Implementar estrategias para asegurar la estabilidad y escalabilidad del sistema se reveló esencial. Esto incluyó un manejo robusto de errores, lógica de reintentos y un sistema de monitoreo proactivo para mantener la continuidad operativa frente a fallos temporales de APIs o cambios en las fuentes de datos."
            }
        ],
        visible: true
    },
    {
        id: "pulso-app-salud-cardiovascular",
        number: "06",
        category: "Producto e IA",
        title: "Pulso — App PWA de Salud Cardiovascular",
        subtitle: "Aplicación instalable que monitorea métricas, genera recetas cardioprotectoras y rutinas personalizadas con IA, sin login ni datos personales",
        description: "Diseño e implementación de una Progressive Web App de bienestar cardiovascular potenciada por Claude e Imagen 3, con dashboard de métricas, asistente de recetas con generación de imágenes en tiempo real y generador de rutinas progresivas — todo sin cuenta y con UUID anónimo en el dispositivo.",
        year: "2025",
        company: "Producto propio",
        duration: "2 meses",
        image: "img/proyectos/pulso-app-salud-cardiovascular.jpg",
        imageCaption: "Dashboard de métricas cardiovasculares con análisis IA en streaming",
        gallery: [
            { src: "img/proyectos/galeria/pulso/01-metricas.jpg", title: "Métricas del día", caption: "Frecuencia, peso, sueño y estrés se registran en segundos y quedan clasificados al instante, sin crear ninguna cuenta." },
            { src: "img/proyectos/galeria/pulso/02-analisis.jpg", title: "Análisis personalizado", caption: "La IA lee las métricas registradas y devuelve la lectura en streaming, para que el texto aparezca mientras se está escribiendo." },
            { src: "img/proyectos/galeria/pulso/03-score.jpg", title: "Score cardiovascular", caption: "Un solo número con su desglose por factor, así se entiende qué está sumando y qué está restando." },
            { src: "img/proyectos/galeria/pulso/04-receta.jpg", title: "Asistente de recetas", caption: "Con los ingredientes que hay en casa arma la receta cardioprotectora completa, con preparación paso a paso y por qué cada alimento cuida el corazón." },
            { src: "img/proyectos/galeria/pulso/05-rutina.jpg", title: "Rutina generada", caption: "Cuatro preguntas y devuelve la rutina completa con series, descansos y la razón de cada ejercicio." },
            { src: "img/proyectos/galeria/pulso/06-habitos.jpg", title: "Seguimiento de hábitos", caption: "El avance del día enlazado con la rutina activa, que es lo que hace que la persona vuelva mañana." }
        ],
        galleryNote: "Vistas reales de la aplicación con datos de ejemplo. La app no pide cuenta ni guarda datos personales",
        techCard: ["Next.js 15", "Claude", "Imagen 3", "Supabase"],
        techFull: [
            "Next.js 15 (App Router)",
            "TypeScript",
            "Tailwind CSS 4",
            "shadcn/ui",
            "Claude Sonnet 4.6",
            "Imagen 3 (Google AI)",
            "Vercel AI SDK",
            "Supabase (PostgreSQL + Storage)",
            "Recharts",
            "next-pwa",
            "Coolify (Hetzner VPS)"
        ],
        metrics: [
            { label: "Módulos en producción", value: "3 / 6" },
            { label: "Métricas trackeadas", value: "4" },
            { label: "Modelos de IA integrados", value: "2" },
            { label: "Login requerido", value: "0" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Construir una herramienta de bienestar y educación preventiva que ayude a las personas a entender y mejorar su salud cardiovascular, sin las fricciones típicas de las apps de salud: sin login, sin datos personales y sin App Store."
                    },
                    {
                        type: "paragraph",
                        text: "Las enfermedades cardiovasculares son la principal causa de muerte en el mundo, y la mayoría de las personas no monitorea sus hábitos hasta que ya es tarde. Pulso busca cerrar esa brecha combinando tracking de métricas, recetas inteligentes y rutinas personalizadas — todo potenciado por IA para entregar análisis y recomendaciones contextualizadas a cada usuario."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "Pulso es una Progressive Web App construida con Next.js 15 y desplegada en Coolify self-hosted. Usa UUID anónimo generado en el dispositivo como identificador, eliminando completamente la necesidad de email, contraseña o datos personales."
                    },
                    {
                        type: "paragraph",
                        text: "El producto integra dos modelos de IA: Claude Sonnet 4.6 para texto en streaming (análisis de métricas, recetas, cuestionarios de rutinas) e Imagen 3 de Google para generar fotografías fotorrealistas de los platos sugeridos. La capa de datos vive en Supabase, con PostgreSQL para métricas y Storage para imágenes de recetas guardadas."
                    },
                    {
                        type: "paragraph",
                        text: "El diseño es mobile-first con dark mode por defecto y una paleta propia (Obsidian + Coral Pulse) que evita los clichés visuales del sector salud. Es instalable como app nativa en iOS y Android directamente desde el browser."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Dashboard de Métricas con Análisis IA",
                description: "Registro de frecuencia cardíaca, peso, sueño y estrés con tarjetas Normal/Atención/Riesgo, edición inline, tendencias de 30 días en Recharts y análisis personalizado de Claude en streaming."
            },
            {
                title: "Asistente de Recetas con Imagen Generada",
                description: "El usuario escribe sus ingredientes y Claude responde una receta cardioprotectora en streaming word-by-word; al terminar, Imagen 3 genera la foto fotorrealista del plato en ~5 segundos."
            },
            {
                title: "Lista de Compras Inteligente",
                description: "Extracción automática de ingredientes desde el texto de la receta con checklist interactivo y contexto histórico para evitar repetir compras."
            },
            {
                title: "Generador de Rutinas Progresivas",
                description: "Cuestionario conversacional con Claude que considera edad, condición física, equipamiento, lesiones y objetivos, generando una rutina semanal progresiva con guía paso a paso y timer de descanso."
            }
        ],
        process: [
            {
                phase: "Fase 1",
                title: "Definición de Producto",
                description: "Identificación del público objetivo, decisión de PWA sin login con UUID anónimo, paleta visual propia y disclaimer médico obligatorio en onboarding."
            },
            {
                phase: "Fase 2",
                title: "Arquitectura y Stack",
                description: "Setup de Next.js 15 con App Router, integración de Supabase como backend, configuración de Vercel AI SDK para streaming con Claude y Google AI SDK para Imagen 3."
            },
            {
                phase: "Fase 3",
                title: "Implementación de los 3 Módulos Core",
                description: "Dashboard de métricas con upsert diario, asistente de recetas con streaming + imagen + guardado, y generador de rutinas con cuestionario conversacional."
            },
            {
                phase: "Fase 4",
                title: "Deploy y PWA",
                description: "Despliegue continuo desde main en Coolify self-hosted sobre VPS Hetzner, configuración de Web App Manifest y next-pwa para instalación en iOS y Android."
            }
        ],
        results: [
            { number: "100%", label: "App sin login ni datos personales" },
            { number: "2", label: "Modelos de IA integrados (texto + imagen)" },
            { number: "~5s", label: "Tiempo de generación de imagen del plato" },
            { number: "PWA", label: "Instalable en iOS y Android sin App Store" }
        ],
        learnings: [
            {
                title: "Streaming como UX, no solo como técnica",
                text: "Mostrar la respuesta de Claude palabra por palabra y disparar la generación de imagen al finalizar el texto convierte una espera de 10 segundos en una experiencia que se siente instantánea."
            },
            {
                title: "Producto sin login es posible",
                text: "UUID anónimo en el dispositivo más Supabase como backend permite construir una app completa con persistencia sin tocar emails, contraseñas ni datos personales — reduciendo fricción y carga de cumplimiento."
            },
            {
                title: "PWA como alternativa real a App Stores",
                text: "next-pwa más un Web App Manifest bien hecho permiten distribuir una app instalable en iOS y Android sin pasar por los stores, acelerando iteración y eliminando fees."
            }
        ],
        visible: true
    },
    {
        id: "monica-brain-asistente-ia-omnicanal",
        number: "07",
        category: "Agentes de IA",
        title: "Monica Brain — Asistente de IA Omnicanal",
        subtitle: "Asistente conversacional que atiende, califica y da seguimiento a clientes en los principales canales de mensajería, integrado a la operación comercial.",
        description: "Asistente de IA que conversa con clientes en distintos canales de mensajería, responde consultas, identifica oportunidades de venta, agenda y hace seguimiento — liberando al equipo de las tareas repetitivas de atención.",
        year: "2025",
        company: "Urpe AI Lab",
        duration: "Proyecto activo",
        hoursSaved: 9258,
        image: "img/proyectos/monica-brain-asistente-ia-omnicanal.jpg",
        imageCaption: "Atención conversacional automatizada con calificación de clientes.",
        liveUrl: "https://brain.urpeailab.com/visual",
        liveLabel: "Ver el visual en vivo",
        gallery: [
            { src: "img/proyectos/galeria/monica-brain/01-mapa.jpg", title: "Mapa del sistema", caption: "Cada pieza del asistente es un nodo y cada línea es una llamada real entre ellas. El tamaño indica cuánto trabajo carga cada una." },
            { src: "img/proyectos/galeria/monica-brain/02-detalle.jpg", title: "Detalle de un componente", caption: "Al acercarse a un nodo se abre qué hace, de qué tipo es y con quién habla. Sirve para explicarle el sistema a alguien que no es técnico." }
        ],
        galleryNote: "Mapa interactivo del sistema, en vivo en brain.urpeailab.com",
        techCard: ["IA conversacional", "Automatización", "Integraciones"],
        techFull: [
            "Inteligencia Artificial (LLMs)",
            "Agentes conversacionales",
            "Mensajería multicanal",
            "Automatización de procesos",
            "Integración con la operación comercial"
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Llevar la atención al cliente a un nivel en el que la primera respuesta sea inmediata, útil y consistente a cualquier hora, sin depender de que haya alguien disponible del otro lado."
                    },
                    {
                        type: "paragraph",
                        text: "Muchos equipos pierden oportunidades simplemente porque no alcanzan a responder a tiempo. La idea fue crear un asistente que acompañe la conversación de principio a fin: que entienda lo que pide la persona, resuelva lo que puede resolver y derive de forma ordenada lo que necesita una mano humana."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "Es un asistente de inteligencia artificial que conversa de forma natural con los clientes en los canales de mensajería que ya usan a diario, manteniendo el contexto de cada conversación."
                    },
                    {
                        type: "paragraph",
                        text: "Más allá de responder preguntas, identifica el interés real de cada contacto, ayuda a coordinar próximos pasos y deja todo registrado para que el equipo retome la conversación con la información a mano. El foco estuvo siempre en una experiencia fluida para el cliente y en quitarle trabajo repetitivo al equipo."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Conversación en múltiples canales",
                description: "Atiende a las personas en los canales de mensajería que ya utilizan, con un trato natural y coherente en todos ellos."
            },
            {
                title: "Calificación de oportunidades",
                description: "Reconoce el interés de cada contacto y prioriza las conversaciones que más valor pueden aportar al negocio."
            },
            {
                title: "Agenda y seguimiento",
                description: "Ayuda a coordinar citas y próximos pasos, y mantiene el hilo de cada conversación sin que nada se pierda."
            }
        ],
        learnings: [
            {
                title: "La inmediatez cambia el resultado",
                text: "Responder al instante y con contexto transforma la experiencia del cliente y aumenta las oportunidades que llegan a buen puerto."
            },
            {
                title: "La IA como apoyo del equipo",
                text: "El mayor valor aparece cuando la automatización se encarga de lo repetitivo y deja a las personas el criterio y el trato cercano."
            }
        ],
        visible: true
    },
    {
        id: "monica-developer-apps-por-prompts",
        number: "08",
        category: "Producto e IA",
        title: "Monica Developer — Aplicaciones por Prompts",
        subtitle: "Plataforma que permite crear aplicaciones web funcionales describiéndolas en lenguaje natural, pensada para profesionales de Latinoamérica.",
        description: "Plataforma que convierte una descripción en lenguaje natural en una aplicación web funcional y lista para usar, con vista previa en vivo — para que cualquier profesional pueda tener su herramienta a medida sin escribir código.",
        year: "2025",
        company: "Urpe AI Lab",
        duration: "Proyecto activo",
        image: "img/proyectos/monica-developer-apps-por-prompts.jpg",
        imageCaption: "De una idea descrita en palabras a una aplicación lista para usar.",
        gallery: [
            { src: "img/proyectos/galeria/monica-developer/01-portada.jpg", title: "La promesa del producto", caption: "Describe la aplicación en español y la plataforma la genera con las reglas fiscales y las pasarelas de pago de la región ya resueltas." },
            { src: "img/proyectos/galeria/monica-developer/02-templates.jpg", title: "Plantillas por oficio", caption: "Puntos de partida ya probados para abogados, clínicas y contadores, en vez de empezar cada aplicación desde cero." },
            { src: "img/proyectos/galeria/monica-developer/03-precios.jpg", title: "Planes", caption: "Tres niveles según cuántas aplicaciones se generen al mes y qué modelo de IA se usa detrás." }
        ],
        galleryNote: "Capturas de la versión beta pública",
        techCard: ["Inteligencia Artificial", "Desarrollo web", "Producto"],
        techFull: [
            "Inteligencia Artificial generativa",
            "Desarrollo web",
            "Vista previa en vivo",
            "Publicación asistida",
            "Enfoque en mercados de Latinoamérica"
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Acercar el desarrollo de software a personas que tienen una idea clara de lo que necesitan, pero no el tiempo ni el conocimiento técnico para construirla."
                    },
                    {
                        type: "paragraph",
                        text: "La propuesta es simple: que alguien describa en su propio idioma la aplicación que quiere y obtenga, en cuestión de minutos, una versión funcional que pueda ver, ajustar y poner en marcha."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "Es una plataforma donde el usuario explica en lenguaje natural qué necesita y la inteligencia artificial genera una aplicación web a su medida, con una vista previa en vivo para verla tomar forma."
                    },
                    {
                        type: "paragraph",
                        text: "Está pensada para profesionales de Latinoamérica, contemplando las particularidades de la región para que el resultado sea realmente utilizable en su día a día y no un punto de partida a medias."
                    }
                ]
            }
        ],
        features: [
            {
                title: "De la idea a la app",
                description: "El usuario describe lo que quiere y la plataforma genera una aplicación web funcional lista para probar."
            },
            {
                title: "Vista previa en vivo",
                description: "Permite ver la aplicación a medida que se construye y ajustarla sobre la marcha."
            },
            {
                title: "Pensada para la región",
                description: "Contempla las necesidades de los profesionales latinoamericanos para que el resultado se pueda usar de verdad."
            }
        ],
        learnings: [
            {
                title: "Bajar la barrera de entrada",
                text: "Cuando crear software deja de requerir conocimientos técnicos, mucha gente puede resolver problemas que antes quedaban en la lista de pendientes."
            },
            {
                title: "El contexto local importa",
                text: "Adaptar el producto a la realidad de cada mercado es lo que hace la diferencia entre algo demostrativo y algo que se usa a diario."
            }
        ],
        visible: true
    },
    {
        id: "monica-designer-identidad-de-marca-ia",
        number: "09",
        category: "Producto e IA",
        title: "Monica Designer — Identidad de Marca con IA",
        subtitle: "Generador que crea una identidad visual completa a partir de un brief: marca, logos y piezas gráficas listas para usar.",
        description: "A partir de un brief sencillo, genera con IA una identidad de marca completa: manual de marca, logos con sus variantes y piezas gráficas listas para usar — acelerando un proceso que antes llevaba semanas.",
        year: "2025",
        company: "Urpe AI Lab",
        duration: "Proyecto activo",
        hoursSaved: 248,
        image: "img/proyectos/monica-designer-identidad-de-marca-ia.jpg",
        imageCaption: "De un brief breve a una identidad de marca completa.",
        gallery: [
            {"src": "img/proyectos/galeria/monica-designer/01-portada.jpg", "title": "Portada del brandbook", "caption": "La marca completa entregada como un manual navegable, generado de punta a punta por la API."},
            {"src": "img/proyectos/galeria/monica-designer/02-color.jpg", "title": "Sistema de color", "caption": "Paleta extraída del logo, con el rol de cada color y su significado dentro de la marca."},
            {"src": "img/proyectos/galeria/monica-designer/03-tipografia.jpg", "title": "Tipografía", "caption": "Las familias tipográficas para títulos, cuerpo y código, con su uso ya definido."},
            {"src": "img/proyectos/galeria/monica-designer/04-flyer-promo.jpg", "title": "Pieza de campaña", "caption": "Un flyer promocional listo para publicar, generado con la identidad de la marca."},
            {"src": "img/proyectos/galeria/monica-designer/05-flyer-beneficios.jpg", "title": "Flyer de beneficios", "caption": "Otra pieza de la misma familia visual, coherente con el resto del sistema."}
        ],
        galleryNote: "Ejemplo generado con una marca ficticia (Aurora Cafe) para mostrar el resultado de la API",
        techCard: ["Inteligencia Artificial", "Diseño", "Producto"],
        techFull: [
            "Inteligencia Artificial generativa",
            "Generación de identidad visual",
            "Diseño de marca",
            "Producto digital"
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Resolver uno de los primeros y mayores cuellos de botella de cualquier emprendimiento: tener una identidad de marca profesional sin esperar semanas ni manejar presupuestos altos."
                    },
                    {
                        type: "paragraph",
                        text: "La meta fue que cualquier persona, partiendo de una idea de su negocio, pudiera obtener una base visual coherente y lista para usar desde el primer día."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "A partir de un brief breve sobre el negocio, la herramienta genera una identidad de marca completa con inteligencia artificial: el manual de marca, los logos con sus variantes y un conjunto de piezas gráficas listas para usar."
                    },
                    {
                        type: "paragraph",
                        text: "Todo queda disponible en un mismo lugar, de forma que el usuario pasa de la idea a tener material concreto para comunicar su marca en muy poco tiempo."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Identidad completa desde un brief",
                description: "Con una descripción breve del negocio se obtiene una base de marca coherente y lista para usar."
            },
            {
                title: "Logos y variantes",
                description: "Genera el logo principal y sus variantes para distintos usos y formatos."
            },
            {
                title: "Piezas listas para comunicar",
                description: "Entrega material gráfico listo para empezar a comunicar la marca de inmediato."
            }
        ],
        learnings: [
            {
                title: "Velocidad sin perder coherencia",
                text: "Lo valioso no es solo generar piezas rápido, sino que todas mantengan una identidad consistente entre sí."
            },
            {
                title: "Empoderar a quien recién arranca",
                text: "Dar acceso a una identidad profesional desde el día uno nivela la cancha para quienes están empezando."
            }
        ],
        visible: true
    },
    {
        id: "status-page-monitoreo-de-servicios",
        number: "10",
        category: "Herramienta interna",
        title: "Status Page — Monitor de Estado de Servicios",
        subtitle: "Página de estado autoalojada que vigila la disponibilidad de los servicios en tiempo real y la comunica de forma clara.",
        description: "Página de estado autoalojada que monitorea la disponibilidad de servicios en tiempo real, muestra su salud de un vistazo y avisa ante caídas — para mantener la operación bajo control y comunicar el estado con transparencia.",
        year: "2025",
        company: "Urpe AI Lab",
        duration: "Proyecto activo",
        image: "img/proyectos/status-page-monitoreo-de-servicios.jpg",
        imageCaption: "Estado de los servicios de un vistazo, en tiempo real.",
        liveUrl: "https://status.urpeailab.com/",
        liveLabel: "Ver status en vivo",
        techCard: ["Monitoreo", "Desarrollo web", "Self-hosting"],
        techFull: [
            "Monitoreo de servicios en tiempo real",
            "Desarrollo web",
            "Chequeos de disponibilidad automáticos",
            "Despliegue autoalojado"
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Saber en todo momento si los servicios están funcionando y poder comunicarlo con transparencia, sin depender de que un usuario sea el primero en avisar que algo dejó de andar."
                    },
                    {
                        type: "paragraph",
                        text: "La idea fue contar con una herramienta propia, simple y confiable, que diera visibilidad del estado de la operación tanto al equipo como, llegado el caso, a los usuarios."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "Es una página de estado autoalojada que revisa de forma continua la disponibilidad de los distintos servicios y muestra su salud de manera clara y a simple vista."
                    },
                    {
                        type: "paragraph",
                        text: "Permite seguir el estado de servicios y sus componentes, detectar caídas a tiempo y dar una imagen ordenada y honesta de cómo está funcionando todo."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Monitoreo en tiempo real",
                description: "Revisa de forma continua la disponibilidad de los servicios y refleja su estado al instante."
            },
            {
                title: "Servicios y componentes",
                description: "Organiza el seguimiento por servicios y sus partes, para entender qué funciona y qué no."
            },
            {
                title: "Autoalojado y bajo control",
                description: "Funciona como una herramienta propia, sin depender de servicios externos para conocer el estado de la operación."
            }
        ],
        learnings: [
            {
                title: "Detectar antes que reaccionar",
                text: "Tener visibilidad continua del estado permite adelantarse a los problemas en lugar de enterarse por los usuarios."
            },
            {
                title: "La transparencia genera confianza",
                text: "Comunicar el estado de forma clara y honesta refuerza la confianza, incluso cuando algo no está funcionando."
            }
        ],
        visible: true
    },
    {
        id: "flowdeck-gestor-n8n",
        number: "11",
        category: "Producto · Automatización",
        title: "FlowDeck — Gestor Multi-instancia de n8n",
        subtitle: "Aplicación instalable (PWA) con login para administrar varias instancias de n8n desde un solo lugar.",
        description: "Panel instalable (PWA) que centraliza la gestión de múltiples instancias de n8n: lista y busca workflows, los activa o desactiva, muestra sus ejecuciones y un resumen por instancia, con las API keys cifradas en el servidor.",
        year: "2026",
        company: "Proyecto propio",
        duration: "Proyecto activo",
        image: "img/proyectos/flowdeck-gestor-n8n.jpg",
        imageCaption: "Un solo panel para administrar todas tus instancias de n8n.",
        liveUrl: "https://github.com/Agustin1231/flowdeck",
        liveLabel: "Ver en GitHub",
        gallery: [
            {"src": "img/proyectos/galeria/flowdeck/01-instancias.jpg", "title": "Instancias conectadas", "caption": "Todas las instancias de n8n en un solo lugar, con su estado y su acceso centralizado."},
            {"src": "img/proyectos/galeria/flowdeck/02-resumen.jpg", "title": "Resumen general", "caption": "El estado de cada instancia de un vistazo, sin entrar una por una."},
            {"src": "img/proyectos/galeria/flowdeck/03-workflows.jpg", "title": "Workflows", "caption": "El listado de flujos de una instancia, con su estado activo o en pausa."},
            {"src": "img/proyectos/galeria/flowdeck/04-detalle.jpg", "title": "Detalle del workflow", "caption": "La ficha de un flujo puntual con su información y sus acciones."},
            {"src": "img/proyectos/galeria/flowdeck/05-ejecuciones.jpg", "title": "Ejecuciones", "caption": "El historial de corridas de un flujo, para revisar que todo está funcionando."}
        ],
        galleryNote: "Vistas de FlowDeck conectado a instancias de demostración, sin datos de clientes",
        techCard: ["n8n", "React", "Node.js", "PWA"],
        techFull: [
            "React",
            "TypeScript",
            "Vite (PWA)",
            "Node.js",
            "Express",
            "Autenticación con JWT",
            "Cifrado AES-256-GCM",
            "Docker",
            "API de n8n"
        ],
        metrics: [
            { label: "Instancias gestionadas", value: "10+" },
            { label: "Cifrado de API keys", value: "AES-256-GCM" },
            { label: "Instalable como app", value: "PWA" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Resolver el problema de tener que entrar a cada instancia de n8n por separado para saber qué está corriendo, qué falló y qué hay que prender o apagar."
                    },
                    {
                        type: "paragraph",
                        text: "Cuando las automatizaciones crecen y se reparten en varios servidores, perder de vista el conjunto es cuestión de tiempo. FlowDeck nació para tener todo bajo un mismo techo: un panel único desde el cual ver y operar todas las instancias, sin saltar entre pestañas ni recordar URLs y claves."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "FlowDeck es una aplicación web instalable como app (PWA) con inicio de sesión, que conecta varias instancias de n8n y las administra desde una sola interfaz. Cada instancia se agrega desde la propia app indicando su dirección y su clave de acceso."
                    },
                    {
                        type: "paragraph",
                        text: "Desde el panel se pueden listar y buscar los workflows, ver su detalle, activarlos o desactivarlos con un switch, revisar sus ejecuciones con estado y duración, y consultar un resumen por instancia. Las claves de acceso se guardan cifradas en el servidor y nunca llegan al navegador: todas las llamadas pasan por el backend, que actúa de intermediario seguro."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Todas las instancias en un lugar",
                description: "Conecta múltiples instancias de n8n y las administra desde un único panel, agregándolas o quitándolas desde la propia interfaz."
            },
            {
                title: "Control de workflows",
                description: "Lista y busca los workflows, ve su detalle y los activa o desactiva con un switch, sin entrar a cada n8n por separado."
            },
            {
                title: "Ejecuciones y resumen",
                description: "Muestra las ejecuciones con su estado y duración, más un resumen por instancia con los workflows activos y la actividad reciente."
            },
            {
                title: "Seguridad por diseño",
                description: "Las claves de acceso se guardan cifradas en el servidor y nunca llegan al navegador; todas las llamadas pasan por un backend que actúa de intermediario."
            }
        ],
        learnings: [
            {
                title: "La visibilidad ahorra tiempo",
                text: "Centralizar el estado de varias instancias en un solo panel reduce drásticamente el tiempo de saber qué está pasando y de reaccionar ante un problema."
            },
            {
                title: "Seguridad sin fricción",
                text: "Guardar las credenciales cifradas en el servidor y usar el backend como proxy permite operar con comodidad sin exponer secretos en el navegador."
            }
        ],
        visible: true
    },
    {
        id: "visor-de-orquestacion-de-subagentes",
        number: "12",
        category: "Agentes de IA",
        title: "Sistema de Orquestación de Agentes de IA",
        subtitle: "Un orquestador central que delega en subagentes especialistas y ejecuta las automatizaciones internas de la operación",
        description: "Sistema donde un agente orquestador recibe cada solicitud, decide qué subagente especialista la resuelve y coordina además un conjunto de automatizaciones internas que sostienen la operación día a día: publicación de contenido, reportería, monitoreo de errores, transcripción de reuniones y finanzas. Incluye un visor en vivo que muestra la orquestación en tiempo real.",
        year: "2026",
        company: "Urpe AI Lab",
        duration: "Operación continua",
        hoursSaved: 264,
        image: "img/proyectos/visor-de-orquestacion-de-subagentes.jpg",
        imageCaption: "El orquestador delegando una tarea al subagente de diagramas, con la actividad registrada en vivo",
        gallery: [
            { src: "img/proyectos/galeria/visor-subagentes/01-mapa.jpg", title: "El mapa de subagentes", caption: "Cada nodo es un subagente con su especialidad. Alrededor del orquestador se ve quién está trabajando y quién está libre." },
            { src: "img/proyectos/galeria/visor-subagentes/02-delegacion.jpg", title: "Una delegación en curso", caption: "La solicitud entra, el orquestador la reparte y el registro de la derecha va contando el recorrido paso por paso." },
            { src: "img/proyectos/galeria/visor-subagentes/03-oscuro.jpg", title: "Modo oscuro", caption: "La misma vista pensada para dejarla abierta en una pantalla secundaria durante horas." }
        ],
        galleryNote: "Vistas en vivo del visor, con los datos sensibles del registro enmascarados",
        techCard: ["JavaScript", "SVG", "Docker", "Coolify"],
        techFull: [
            "HTML5",
            "CSS3",
            "JavaScript (sin frameworks)",
            "SVG animado",
            "nginx",
            "Docker",
            "Coolify",
            "Cloudflare DNS"
        ],
        metrics: [
            { label: "Subagentes especialistas", value: "10" },
            { label: "Automatizaciones internas", value: "20+" },
            { label: "Ejecución", value: "24/7" },
            { label: "Visor", value: "SVG en vivo" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Mostrar de forma visual e inmediata cómo funciona un sistema de subagentes: quién pide, quién delega y quién ejecuta cada tarea."
                    },
                    {
                        type: "paragraph",
                        text: "Cuando un agente principal coordina a varios especialistas, el proceso queda oculto entre logs y llamadas internas. El objetivo fue darle una cara visible a esa coordinación, para que cualquiera entienda en segundos cómo se reparte y se resuelve el trabajo."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "El orquestador aparece en el centro y los subagentes especialistas alrededor. Al llegar una solicitud, se anima la conexión hacia el especialista elegido, su nodo cambia de estado mientras trabaja y se marca como listo al terminar, y cada paso queda registrado con su hora en un panel de actividad."
                    },
                    {
                        type: "paragraph",
                        text: "La página corre sin frameworks, con un grafo en SVG animado y un control para reproducir la secuencia cuantas veces se quiera. El panel de actividad enmascara automáticamente cualquier dato sensible (correos, rutas, tokens, identificadores) para poder mostrarlo sin exponer información."
                    }
                ]
            },
            {
                title: "Automatizaciones internas que coordina",
                content: [
                    {
                        type: "paragraph",
                        text: "Más allá del visor, el orquestador ejecuta y coordina las automatizaciones que sostienen la operación diaria: publicación de contenido en redes, generación y programación de posts, reportería automática (tareas, Trello, finanzas), monitoreo y diagnóstico de errores de los flujos de n8n, transcripción de reuniones y seguimiento de la meta de ingresos."
                    },
                    {
                        type: "paragraph",
                        text: "En conjunto, estas automatizaciones internas suman cientos de horas de trabajo manual ahorradas, ejecutándose sin intervención y liberando tiempo para el trabajo con clientes."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Orquestación en tiempo real",
                description: "Muestra al agente principal delegando a cada subagente, con la conexión animada y los cambios de estado: trabajando y listo."
            },
            {
                title: "Tema claro y oscuro",
                description: "Alterna entre modo claro y oscuro con un clic y recuerda la preferencia en el navegador."
            },
            {
                title: "Datos sensibles enmascarados",
                description: "El panel de actividad oculta automáticamente correos, rutas, tokens e identificadores con asteriscos antes de mostrarlos."
            },
            {
                title: "Reproducción a un clic",
                description: "La animación corre sola al abrir y se puede repetir desde un botón o haciendo clic sobre la actividad."
            }
        ],
        learnings: [
            {
                title: "Lo visual explica mejor",
                text: "Ver la orquestación en movimiento comunica el funcionamiento de un sistema multiagente mucho más rápido que describirlo con texto."
            },
            {
                title: "Mostrar sin exponer",
                text: "Enmascarar los datos sensibles en la interfaz permite enseñar el sistema en vivo sin filtrar información privada."
            }
        ],
        liveUrl: "https://multiagentes.agustinynatalia.site",
        liveLabel: "Ver en vivo",
        visible: true
    },
    {
        id: "notetaker-de-reuniones-con-ia",
        number: "20",
        category: "IA y Productividad Comercial",
        title: "Notetaker de Reuniones con IA",
        subtitle: "La reunión termina y el CRM ya tiene la nota, las tareas y el correo resumen",
        description: "Sistema que toma la transcripción de cada reunión comercial apenas termina, redacta la nota del contacto con IA, actualiza el CRM, crea las tareas de seguimiento, envía un resumen por correo y guarda la grabación, sin que el asesor escriba nada.",
        year: "2026",
        company: "Cliente B2B",
        duration: "En operación",
        image: "img/proyectos/notetaker-reuniones-ia.jpg",
        imageCaption: "De la transcripción de la reunión a la nota, las tareas y el resumen, en automático",
        techCard: ["n8n", "IA", "CRM", "PostgreSQL"],
        techFull: [
            "n8n",
            "Agente de IA con herramientas",
            "Modelos de lenguaje",
            "PostgreSQL",
            "API de agenda y transcripción",
            "Correo transaccional",
            "API de video"
        ],
        metrics: [
            { label: "Nota del contacto", value: "Automática" },
            { label: "Resumen", value: "Por correo" },
            { label: "Tareas", value: "Creadas solas" },
            { label: "Grabación", value: "Archivada" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Que ninguna reunión dependa de que el asesor se acuerde de escribir la nota después." },
                    { type: "paragraph", text: "El registro de las reuniones se hacía a mano, cuando quedaba tiempo. Lo que se acordaba en la llamada se perdía, el CRM quedaba desactualizado y los compromisos no llegaban a ninguna lista de tareas. El objetivo fue que el cierre de la reunión dispare todo el trabajo administrativo que venía después." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Cuando termina la reunión, la transcripción entra por webhook al flujo. Primero se guarda completa en base de datos, para que quede el respaldo literal de lo que se dijo antes de que cualquier modelo la interprete." },
                    { type: "paragraph", text: "Sobre esa transcripción corre un agente de IA con herramientas propias: puede actualizar la nota del contacto, marcar la cita como realizada y crear tareas de seguimiento. No genera texto suelto, ejecuta acciones concretas sobre el CRM." },
                    { type: "paragraph", text: "En paralelo se arma un resumen en HTML con los puntos tratados, los acuerdos y los próximos pasos, y se envía por correo a quien participó. La grabación se sube a una biblioteca privada de video, así la reunión queda consultable sin ocupar espacio en el disco de nadie." },
                    { type: "paragraph", text: "Al final del día, un segundo proceso revisa las transcripciones de la jornada con un analista de desempeño comercial hecho con IA, que devuelve qué se hizo bien y qué se dejó pasar en cada conversación." }
                ]
            }
        ],
        features: [
            { title: "Transcripción guardada antes de interpretar", description: "El texto literal de la reunión se almacena primero. Si el modelo resume mal, la fuente original sigue intacta para revisarla." },
            { title: "Agente con herramientas, no con texto", description: "La IA no escribe un resumen para copiar y pegar, actualiza la nota del contacto, marca la cita y crea las tareas directamente en el CRM." },
            { title: "Resumen por correo", description: "Cada participante recibe el resumen con los acuerdos y los próximos pasos en el mismo momento en que termina la reunión." },
            { title: "Grabación archivada", description: "El video queda subido en una biblioteca privada y enlazado al registro de la reunión, disponible para consultar después." },
            { title: "Evaluación diaria del desempeño", description: "Un proceso nocturno analiza las conversaciones del día y señala qué se manejó bien y qué se pasó por alto." }
        ],
        learnings: [
            { title: "El respaldo va antes que el resumen", text: "Guardar la transcripción cruda antes de pasarla por el modelo fue la decisión que hizo confiable el resto. Todo lo demás se puede volver a generar." },
            { title: "Herramientas en vez de texto", text: "Darle acciones al agente en lugar de pedirle un resumen eliminó el paso manual que seguía existiendo, alguien tenía que copiar la salida al CRM." },
            { title: "Lo administrativo no era el problema real", text: "El valor no fue ahorrar los minutos de escribir la nota, fue que dejara de existir el registro que nunca se hacía." }
        ],
        visible: true
    },
    {
        id: "campanas-de-correo-contextualizadas-con-ia",
        number: "21",
        category: "IA y Ventas",
        title: "Campañas de Correo Contextualizadas con IA",
        subtitle: "Cada correo de la cadencia se escribe con el hilo previo, se revisa antes de salir y decide cuándo va el siguiente",
        description: "Motor de campañas de correo donde cada mensaje se redacta con IA a partir de la conversación anterior con ese contacto, pasa por un evaluador antes de enviarse y recalcula por sí mismo la fecha del próximo envío según lo que responda la persona.",
        year: "2026",
        company: "Cliente B2B",
        duration: "En operación",
        image: "img/proyectos/campanas-correo-contextualizadas.jpg",
        imageCaption: "El ciclo de la cadencia, redactar con contexto, evaluar, enviar y reprogramar",
        techCard: ["n8n", "IA", "PostgreSQL", "API de correo"],
        techFull: [
            "n8n",
            "Agentes de IA especializados",
            "Evaluador de calidad",
            "Memoria conversacional en PostgreSQL",
            "API de correo",
            "Clasificador de respuestas"
        ],
        metrics: [
            { label: "Redacción", value: "Con el hilo previo" },
            { label: "Revisión", value: "Antes de enviar" },
            { label: "Cadencia", value: "Se recalcula sola" },
            { label: "Respuestas", value: "Clasificadas" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Que una cadencia de correos deje de ser una plantilla repetida y se comporte como alguien que sí leyó la conversación anterior." },
                    { type: "paragraph", text: "Las secuencias tradicionales mandan el mismo texto sin importar lo que pasó antes, si la persona ya respondió, si ya dijo que no le interesa o si preguntó algo puntual. El objetivo fue que cada correo salga con el contexto real del contacto y que el ritmo de la cadencia se ajuste a lo que esa persona hace." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Un proceso programado revisa cada media hora qué contactos tienen un correo pendiente según su cadencia y los entrega al motor de redacción." },
                    { type: "paragraph", text: "La redacción está separada en agentes con una sola responsabilidad cada uno, uno escribe el cuerpo, otro lo convierte a HTML presentable y otro define el asunto. Antes de enviar, un evaluador revisa el resultado, y la memoria conversacional en base de datos le da a cada agente el historial completo con ese contacto." },
                    { type: "paragraph", text: "El envío sale por la API de correo con la identidad de quien firma el mensaje, no desde una dirección genérica de campaña. Apenas se envía, el flujo recalcula la fecha del próximo contacto y actualiza el estado de inscripción de esa persona en la campaña." },
                    { type: "paragraph", text: "Las respuestas que llegan entran a un flujo aparte que las clasifica con IA y devuelve una salida estructurada, de modo que un interesado, una objeción y una baja no terminen en la misma bandeja indiferenciada." }
                ]
            }
        ],
        features: [
            { title: "Redacción con el hilo completo", description: "Cada correo se escribe con la conversación previa de ese contacto, no con una plantilla fija repetida para todos." },
            { title: "Agentes con una sola tarea", description: "Cuerpo, formato y asunto se resuelven por separado. Cada pieza mejora sin romper las otras." },
            { title: "Evaluador antes del envío", description: "Un paso de revisión mira el correo antes de que salga, así el error no se descubre en la bandeja del destinatario." },
            { title: "Cadencia que se recalcula", description: "La fecha del próximo mensaje se decide al momento del envío según el estado real del contacto, no por un calendario rígido." },
            { title: "Respuestas clasificadas", description: "Lo que responde la persona se categoriza automáticamente en una salida estructurada, lista para que el equipo actúe según el caso." }
        ],
        learnings: [
            { title: "Dividir al redactor mejora el resultado", text: "Un solo agente encargado de cuerpo, formato y asunto produce texto mediocre en las tres cosas. Separarlo subió la calidad de cada parte." },
            { title: "Evaluar cuesta menos que corregir", text: "Un paso de revisión antes del envío es más barato que disculparse por un correo mal armado que ya salió." },
            { title: "El ritmo es parte del mensaje", text: "Recalcular cuándo va el siguiente correo, en vez de fijarlo de antemano, cambió más los resultados que el contenido mismo." }
        ],
        visible: true
    },
    {
        id: "escalamiento-a-humano-en-un-agente-de-ia",
        number: "22",
        category: "IA y Atención al Cliente",
        title: "Escalamiento a Humano en un Agente de IA",
        subtitle: "Cuando el caso no le corresponde al agente, pasa a una persona y el flujo espera su respuesta",
        description: "Mecanismo de escalamiento que detiene al agente de IA cuando un caso necesita criterio humano, se lo entrega al asesor correcto según la empresa y deja el proceso en espera hasta que esa persona responde, sin perder el hilo de la conversación.",
        year: "2026",
        company: "Cliente B2B",
        duration: "En operación",
        image: "img/proyectos/escalamiento-human-in-the-loop.jpg",
        imageCaption: "El agente se detiene, el caso llega al asesor y el flujo espera la decisión humana",
        techCard: ["n8n", "IA", "Correo", "Enrutamiento"],
        techFull: [
            "n8n",
            "Agente de IA",
            "Aprobación por correo con espera",
            "Enrutamiento por empresa",
            "Generación de imagen con IA"
        ],
        metrics: [
            { label: "Decisión", value: "Humana" },
            { label: "Flujo", value: "Queda en espera" },
            { label: "Destinatario", value: "Por empresa" },
            { label: "Contexto", value: "No se pierde" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Darle al agente de IA una forma limpia de decir no sé y pasarle el caso a una persona, sin que la conversación se corte." },
                    { type: "paragraph", text: "Un agente que responde todo siempre termina inventando en el caso que no le corresponde. El objetivo fue definir el límite y construir la salida, cuando el caso pide criterio humano alguien lo recibe, decide, y esa decisión vuelve al flujo." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "El escalamiento está montado como una herramienta del propio agente. Cuando el agente determina que el caso excede lo que puede resolver, lo invoca con el contexto de la conversación en vez de improvisar una respuesta." },
                    { type: "paragraph", text: "El caso se enruta según la empresa a la que pertenece el contacto, de modo que cada organización recibe sus escalamientos en su propio canal y con su propio responsable." },
                    { type: "paragraph", text: "El aviso al asesor se envía con una espera de respuesta, el flujo no continúa hasta que la persona contesta. Esa pausa es lo que convierte el escalamiento en un paso real del proceso y no en una notificación que alguien puede ignorar." },
                    { type: "paragraph", text: "El mismo flujo incluye una rama de generación de imagen con IA, para los casos donde la respuesta al contacto necesita material visual armado en el momento." }
                ]
            }
        ],
        features: [
            { title: "El escalamiento es una herramienta", description: "El agente decide cuándo pasar el caso, igual que decide usar cualquier otra de sus herramientas. No es una regla externa que lo interrumpe." },
            { title: "Espera activa de la respuesta", description: "El flujo queda detenido hasta que el asesor responde, así el escalamiento no se convierte en un correo más que nadie abre." },
            { title: "Enrutamiento por empresa", description: "Cada organización recibe sus casos en su canal y con su responsable, sin mezclar bandejas entre clientes." },
            { title: "El contexto viaja con el caso", description: "La persona que recibe el escalamiento ve la conversación completa, no un aviso suelto sin historia." }
        ],
        learnings: [
            { title: "Un agente necesita saber rendirse", text: "La calidad de un agente no se mide solo por lo que responde, sino por qué tan bien identifica lo que no le corresponde responder." },
            { title: "Notificar no es escalar", text: "Mientras el flujo seguía después de avisar, los escalamientos se perdían. Detener el proceso hasta la respuesta fue lo que los volvió confiables." },
            { title: "El límite se define antes de construir", text: "Decidir de antemano qué casos son humanos evitó tener que corregir respuestas inventadas después de que ya salieron." }
        ],
        visible: true
    }
];