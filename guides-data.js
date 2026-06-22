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
    }
];
