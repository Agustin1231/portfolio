// ==========================================
// GUÍAS — fuente única de datos
// ==========================================
// Card (index): id, number, title, description, image, urlLabel, visible
//   externalUrl  (opcional) si la guía vive fuera del sitio (PDF/artículo). Si
//                no está, la card lleva a la página de detalle guia.html?id=...
// Página de detalle (guia.html): category, subtitle, date, readingTime,
//   imageCaption, requirements[] (lista "Requisitos"), sections[{title,
//   content:[{type:"lead"|"paragraph", text}]}], pros[], cons[], tools[]
//   downloadFile + downloadLabel (opcional): archivo .md descargable
//   visible: true para mostrar. Si NINGUNA está visible, #guias muestra
//   un estado "Próximamente".
// Para publicar: editar este archivo, validar JS, push a main y redeploy Coolify.
// ==========================================
var GUIDES_DATA = [
    {
        id: "sistema-conocimiento-outline",
        number: "01",
        visible: true,
        category: "Sistema de conocimiento + IA",
        title: "Cómo monté mi propio sistema de conocimiento conectado a IA",
        subtitle: "Un segundo cerebro self-hosted donde mis agentes de IA capturan, organizan y responden por mí.",
        description: "Monté un sistema de conocimiento propio con Outline (open source, en mi servidor) y lo conecté a mis agentes. Te explico qué es, cómo funciona y sus pros y contras.",
        image: "",
        imageCaption: "",
        date: "Junio 2026",
        readingTime: "5 min de lectura",
        urlLabel: "Leer guía",
        downloadFile: "guia-sistema-conocimiento.md",
        downloadLabel: "Descargar guía técnica (.md)",
        requirements: [
            "Un servidor o VPS propio donde correr contenedores (1 vCPU y 2 GB de RAM alcanzan para empezar).",
            "Docker y Docker Compose instalados en ese servidor.",
            "Un dominio o subdominio apuntando al servidor (ej: notas.tudominio.com).",
            "Un certificado HTTPS (lo más fácil: un proxy inverso como Caddy, Traefik o Nginx + Let's Encrypt).",
            "Un proveedor de autenticación (Google, Microsoft, OIDC genérico o correo) con sus credenciales.",
            "Almacenamiento para archivos: local en el servidor o un bucket compatible con S3 (R2, MinIO, AWS S3).",
            "Un agente de IA con capacidad de hacer peticiones HTTP, para conectarlo a la API de Outline."
        ],
        sections: [
            {
                title: "Qué monté",
                content: [
                    { type: "lead", text: "Armé mi propio sistema de conocimiento: un lugar donde vive todo lo que sé, y lo conecté a mis agentes de IA para que trabajen dentro de él." },
                    { type: "paragraph", text: "La base es Outline, un gestor de notas open source y self-hosted. Corre en mi propio servidor, así que puedo conectarle lo que quiera y mis datos no dependen de la nube de nadie." },
                    { type: "paragraph", text: "Lo interesante no es que yo escriba notas. Es que no soy solo yo escribiéndolas: mis agentes trabajan dentro del sistema, lo alimentan y lo consultan." }
                ]
            },
            {
                title: "Cómo funciona en el día a día",
                content: [
                    { type: "paragraph", text: "Cuando tengo una reunión, se graba y se transcribe sola. El agente la deja escrita en su espacio, organizada, sin que yo toque nada." },
                    { type: "paragraph", text: "Cuando trabajo una idea de contenido, el agente la guarda ahí mismo, en la carpeta que le corresponde." },
                    { type: "paragraph", text: "Y cuando necesito algo, no busco en mi cabeza ni en mil notas sueltas: le pregunto al sistema. El agente entra, busca y me responde con lo que ya quedó guardado. Lo que antes era mi memoria fallando, hoy es un sistema que se alimenta solo." }
                ]
            },
            {
                title: "Las dos decisiones que lo hicieron funcionar",
                content: [
                    { type: "paragraph", text: "Separar capturar de organizar. Capturar tiene que ser inmediato y sin fricción; organizar es un paso aparte que hace el sistema, no yo en el momento en que se me ocurre la idea." },
                    { type: "paragraph", text: "Tener pocos espacios en vez de veinte carpetas que nadie abre. Menos lugares y más claros significa que siempre sabes dónde va cada cosa y dónde buscarla después." }
                ]
            },
            {
                title: "Cuándo te conviene",
                content: [
                    { type: "lead", text: "La herramienta importa, pero lo que la vuelve poderosa es conectarla a algo que trabaje por ti." },
                    { type: "paragraph", text: "Un gestor de notas solo es un cajón. Conectado a agentes, se vuelve un sistema que crece sin que lo empujes." },
                    { type: "paragraph", text: "Te conviene cuando ya manejas volumen de información y la estás perdiendo entre notas, chats y tu propia memoria. Si tienes diez notas, todavía no lo necesitas." }
                ]
            }
        ],
        pros: [
            "Todo tu conocimiento en un solo lugar consultable, no disperso en mil notas sueltas.",
            "Self-hosted: tus datos viven en tu servidor, sin límites de plan ni depender de una nube ajena.",
            "Open source: lo conectas a lo que quieras (agentes, automatizaciones, otras herramientas).",
            "Se alimenta solo: reuniones e ideas entran sin que muevas un dedo.",
            "Buscas preguntando, no recordando."
        ],
        cons: [
            "Self-hosted implica mantenimiento: backups, actualizaciones y mantener el servidor en pie corren por tu cuenta.",
            "Requiere un servidor y algo de criterio técnico para el montaje inicial.",
            "La calidad de lo que te responde depende de qué tan bien se captura y se organiza.",
            "Vale la pena con volumen: para poca información, es matar una mosca a cañonazos."
        ],
        tools: ["Outline", "Self-hosted (Docker)", "Servidor propio", "Agentes de IA", "Transcripción automática"]
    },
    {
        id: "self-hosting-ahorro",
        number: "02",
        visible: true,
        category: "Self-hosting + ahorro",
        title: "5 cosas que dejé de pagar self-hosteando en mi propio servidor",
        subtitle: "Cambié cinco suscripciones mensuales por software open source corriendo en un servidor que ya tenía.",
        description: "Suscripciones SaaS que pagaba todos los meses y reemplacé por herramientas open source en mi propio servidor. Te cuento qué usaba antes, con qué lo cambié y qué gano y qué pierdo.",
        image: "",
        imageCaption: "",
        date: "Junio 2026",
        readingTime: "6 min de lectura",
        urlLabel: "Leer guía",
        requirements: [
            "Un servidor o VPS propio donde correr contenedores (con 2 vCPU y 4 GB de RAM ya manejas varias de estas herramientas a la vez).",
            "Docker instalado, o mejor: una capa como Coolify que te gestiona los despliegues por ti.",
            "Un dominio donde colgar subdominios para cada servicio (analytics.tudominio.com, n8n.tudominio.com, etc).",
            "HTTPS automático (Coolify lo resuelve con Let's Encrypt sin que toques nada).",
            "Criterio para hacer backups: si los datos viven en tu servidor, el respaldo es tu responsabilidad.",
            "Algo de paciencia el primer fin de semana: montar la base toma un rato, después corre solo."
        ],
        sections: [
            {
                title: "Por qué dejé de pagar suscripciones",
                content: [
                    { type: "lead", text: "Un día sumé lo que pagaba en herramientas mensuales y me di cuenta de que casi todas tenían una versión open source que podía correr yo mismo." },
                    { type: "paragraph", text: "No lo hice por ahorrar unos dólares y ya. Lo hice porque cada suscripción es un candado: tus datos viven en la nube de otro, con su límite de plan y su precio subiendo cada año." },
                    { type: "paragraph", text: "Tengo un servidor donde ya corren mis proyectos. Meterle estas herramientas no me cuesta un peso más: aprovecho recursos que ya estaban ahí. Estas son las cinco que reemplacé." }
                ]
            },
            {
                title: "1. Analítica web: dejé las herramientas de pago por Umami",
                content: [
                    { type: "paragraph", text: "Para saber cuánta gente entra a mi portafolio y de dónde viene, antes la opción era pagar una herramienta de analítica o aguantar la complejidad y el tema de privacidad de las gratuitas con publicidad detrás." },
                    { type: "paragraph", text: "Monté Umami: analítica web open source, liviana, sin cookies y respetuosa con la privacidad. Veo visitas, países, dispositivos y de qué red llegó cada persona, todo en mi servidor. Y le conecté un aviso por Telegram que me llega cuando alguien entra." }
                ]
            },
            {
                title: "2. Automatizaciones: dejé Zapier y Make por n8n",
                content: [
                    { type: "paragraph", text: "Para conectar apps entre sí (que un formulario dispare un correo, que un mensaje caiga en una base de datos) la gente paga Zapier o Make por número de ejecuciones. Cuando automatizas en serio, esa cuenta crece rápido." },
                    { type: "paragraph", text: "Con n8n en mi servidor tengo el mismo poder sin pagar por ejecución. Ejecuto todos los flujos que quiera, con la lógica que quiera, y conecto cosas que las versiones de pago ni dejan tocar. Es el corazón de casi todo lo que automatizo." }
                ]
            },
            {
                title: "3. Hosting de apps: dejé los planes de Vercel y Heroku por Coolify",
                content: [
                    { type: "paragraph", text: "Desplegar webs y APIs en plataformas tipo Vercel o Heroku es comodísimo, hasta que pasas del plan gratis y empiezas a pagar por cada proyecto, cada base de datos y cada función." },
                    { type: "paragraph", text: "Coolify me da esa misma comodidad (conecto el repo de GitHub y cada push se despliega solo, con HTTPS automático) pero sobre mi propio servidor. Levanto todos los proyectos que necesite sin que el precio dependa de cuántos tenga." }
                ]
            },
            {
                title: "4. Base de datos: dejé las bases gestionadas por PostgreSQL propio",
                content: [
                    { type: "paragraph", text: "Las bases de datos gestionadas en la nube son cómodas, pero te cobran por gigabyte y por hora encendida. Para varios proyectos pequeños, terminas pagando de más por algo que apenas usas." },
                    { type: "paragraph", text: "Levanto PostgreSQL en mi servidor para lo que necesite, incluida búsqueda por similitud con vectores para mis agentes de IA. Pago cero por almacenamiento extra y tengo control total sobre los datos." }
                ]
            },
            {
                title: "5. Notas y documentación: dejé Notion por Outline",
                content: [
                    { type: "paragraph", text: "Notion es excelente, pero cuando lo usas en serio y con equipo, el plan por persona empieza a pesar. Y todo tu conocimiento vive en una nube que no controlas." },
                    { type: "paragraph", text: "Outline es un gestor de notas open source que corre en mi servidor. Lo uso como mi sistema de conocimiento y, lo mejor, lo conecté a mis agentes de IA para que escriban y consulten ahí dentro. Sin costo por usuario y con mis datos en casa." }
                ]
            },
            {
                title: "Lo que de verdad ganas (y lo que no)",
                content: [
                    { type: "lead", text: "Self-hostear no es gratis: cambias dinero por tiempo y por responsabilidad." },
                    { type: "paragraph", text: "Dejas de pagar suscripciones, pero ahora el servidor, los backups y las actualizaciones corren por tu cuenta. Si algo se cae a las 3 de la mañana, no hay soporte: estás tú." },
                    { type: "paragraph", text: "A cambio ganas control total, datos en tu casa y la libertad de conectar todo con todo. Para mí, que vivo de automatizar y construir, vale cada minuto. Si solo necesitas una herramienta y ya, quizá te conviene seguir pagando y dormir tranquilo." }
                ]
            }
        ],
        pros: [
            "Dejas de pagar varias suscripciones mensuales que solo suben de precio con el tiempo.",
            "Tus datos viven en tu servidor, sin límites de plan ni candados de proveedor.",
            "Open source: conectas todo con todo (agentes, automatizaciones, bases de datos).",
            "Aprovechas un servidor que probablemente ya tienes para tus proyectos.",
            "Control total: decides versiones, integraciones y cómo crece cada herramienta."
        ],
        cons: [
            "El mantenimiento es tuyo: backups, actualizaciones y mantener el servidor en pie.",
            "Si algo se cae, no hay soporte: la responsabilidad es del que lo montó.",
            "Requiere criterio técnico para el montaje inicial y para resolver problemas.",
            "Solo vale la pena si vas a usar varias herramientas; para una sola, a veces es más barato pagar."
        ],
        tools: ["Umami", "n8n", "Coolify", "PostgreSQL", "Outline", "Self-hosted (Docker)", "Servidor propio"]
    }
];
