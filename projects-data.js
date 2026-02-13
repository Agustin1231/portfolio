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
        image: "https://via.placeholder.com/1200x600/1A2332/FFFFFF?text=Automatizacion+Podcasts",
        imageCaption: "Arquitectura general del sistema de monitoreo y análisis de podcasts",
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
            { label: "Shows monitoreados", value: "Decenas" },
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
    }
];
