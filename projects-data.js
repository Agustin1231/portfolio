// ==========================================
// DATOS DE PROYECTOS
// Este es el único archivo que necesitás editar para agregar proyectos.
// Agregá un nuevo objeto al array y listo.
// ==========================================

var PROJECTS_DATA = [
    {
        id: "sistema-automatizacion-operativa",
        number: "01",
        category: "Automatización",
        title: "Sistema de Automatización Operativa",
        subtitle: "Implementación completa de flujos de automatización que conectan APIs, bases de datos y herramientas internas",
        description: "Implementación completa de flujos de automatización que conectan APIs, bases de datos y herramientas internas, eliminando procesos manuales y reduciendo errores.",
        year: "2025",
        company: "Naranja Media",
        duration: "3 meses",
        image: "https://via.placeholder.com/1200x600/1A2332/FFFFFF?text=Sistema+de+Automatizacion",
        imageCaption: "Vista general del sistema de automatización implementado",
        techCard: ["n8n", "REST API", "PostgreSQL", "Webhooks"],
        techFull: ["n8n", "PostgreSQL", "REST APIs", "Webhooks", "Python", "JavaScript", "Docker", "Git"],
        metrics: [
            { label: "Nodos n8n", value: "120+" },
            { label: "Integraciones", value: "10" },
            { label: "Webhooks activos", value: "8" },
            { label: "Uptime", value: "99.8%" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Eliminar procesos manuales repetitivos y reducir errores operativos mediante la implementación de un sistema de automatización robusto que conecta múltiples herramientas y bases de datos." },
                    { type: "paragraph", text: "El proyecto surge de la necesidad de Naranja Media de escalar sus operaciones digitales sin aumentar la carga de trabajo manual del equipo. Se requería una solución que permitiera sincronizar datos entre plataformas en tiempo real, automatizar flujos de trabajo complejos con múltiples pasos, mantener trazabilidad completa de las operaciones y escalar fácilmente sin necesidad de desarrollo pesado." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Desarrollé desde cero un ecosistema de automatización usando n8n como plataforma central, integrando más de 10 servicios diferentes y creando flujos de trabajo que procesan miles de operaciones diarias." },
                    { type: "paragraph", text: "La arquitectura se diseñó pensando en escalabilidad, mantenibilidad y resiliencia. Cada flujo incluye manejo de errores, logging detallado y sistemas de retry automático para garantizar la continuidad operativa." },
                    { type: "paragraph", text: "El sistema se integra con APIs REST, webhooks, bases de datos SQL y servicios externos, creando un puente entre la página web corporativa, el CRM, herramientas de marketing y sistemas de gestión internos." }
                ]
            }
        ],
        features: [
            { title: "Sincronización en Tiempo Real", description: "Los datos se actualizan automáticamente entre plataformas en menos de 5 segundos, eliminando desfases y errores de información desactualizada." },
            { title: "Procesamiento de Webhooks", description: "Recepción y procesamiento de eventos en tiempo real desde múltiples fuentes, con validación de datos y enrutamiento inteligente." },
            { title: "Error Handling Robusto", description: "Sistema de detección de errores con retry automático, notificaciones al equipo y fallbacks que garantizan continuidad operativa." },
            { title: "Logging y Monitoreo", description: "Dashboard de monitoreo con métricas en tiempo real, historial de ejecuciones y alertas configurables por criticidad." }
        ],
        process: [
            { phase: "Fase 1", title: "Auditoría y Análisis", description: "Mapeo completo de procesos manuales, identificación de puntos de mejora y diseño de la arquitectura de automatización." },
            { phase: "Fase 2", title: "Diseño de Arquitectura", description: "Definición de flujos, integraciones necesarias, estructura de datos y protocolos de comunicación entre servicios." },
            { phase: "Fase 3", title: "Implementación", description: "Construcción de flujos completos con manejo de errores, logging y testing exhaustivo." },
            { phase: "Fase 4", title: "Despliegue y Monitoreo", description: "Puesta en producción gradual con monitoreo 24/7 y ajustes basados en comportamiento real." }
        ],
        results: [
            { number: "85%", label: "Reducción de tiempo en tareas manuales" },
            { number: "15+", label: "Flujos de automatización activos" },
            { number: "5000+", label: "Operaciones procesadas diarias" },
            { number: "0", label: "Errores críticos en producción" }
        ],
        learnings: [
            { title: "Arquitectura modular", text: "Diseñar flujos pequeños y reutilizables facilita mantenimiento y debugging. Cada flujo debe hacer una cosa bien en lugar de intentar resolver múltiples problemas." },
            { title: "Error handling robusto", text: "Los sistemas de producción fallan. Implementar retry logic, timeouts y fallbacks desde el inicio ahorra horas de problemas futuros." },
            { title: "Documentación viva", text: "Mantener documentación actualizada de cada flujo, sus dependencias y casos edge permite que otros puedan entender y modificar el sistema." }
        ],
        visible: true
    },
    {
        id: "integracion-hubspot-crm",
        number: "02",
        category: "CRM",
        title: "Integración HubSpot CRM",
        subtitle: "Automatización completa de workflows de ventas y marketing con sincronización de datos entre plataformas",
        description: "Automatización completa de workflows de ventas y marketing, sincronización de datos entre plataformas y optimización de procesos comerciales.",
        year: "2025",
        company: "Naranja Media",
        duration: "2 meses",
        image: "https://via.placeholder.com/1200x600/1A2332/FFFFFF?text=Integracion+HubSpot",
        imageCaption: "Diagrama de integración del CRM con sistemas internos",
        techCard: ["HubSpot", "n8n", "Python", "APIs"],
        techFull: ["HubSpot", "n8n", "Python", "REST APIs", "Webhooks", "JavaScript"],
        metrics: [
            { label: "Contactos sincronizados", value: "5000+" },
            { label: "Workflows activos", value: "12" },
            { label: "Integraciones", value: "6" },
            { label: "Uptime", value: "99.9%" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Centralizar y automatizar la gestión comercial conectando HubSpot CRM con el ecosistema de herramientas internas de la empresa." },
                    { type: "paragraph", text: "El equipo comercial necesitaba una solución que eliminara la entrada manual de datos, sincronizara información entre plataformas en tiempo real y proporcionara visibilidad completa del pipeline de ventas." }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    { type: "paragraph", text: "Diseñé e implementé una integración bidireccional entre HubSpot CRM y los sistemas internos de la empresa, automatizando el flujo completo desde la captación del lead hasta el cierre de la venta." },
                    { type: "paragraph", text: "La solución incluye sincronización automática de contactos, empresas y deals, notificaciones inteligentes basadas en cambios de estado, y generación automática de reportes para el equipo de dirección." }
                ]
            }
        ],
        features: [
            { title: "Sincronización Bidireccional", description: "Los cambios en HubSpot se reflejan automáticamente en sistemas internos y viceversa, manteniendo una fuente de verdad única." },
            { title: "Lead Scoring Automatizado", description: "Sistema de puntuación automática de leads basado en comportamiento, interacciones y datos demográficos." },
            { title: "Reportes Automáticos", description: "Generación y envío de reportes semanales con métricas clave del pipeline de ventas." }
        ],
        process: [
            { phase: "Fase 1", title: "Mapeo del Pipeline", description: "Análisis del proceso comercial actual y definición de los puntos de integración necesarios." },
            { phase: "Fase 2", title: "Configuración de HubSpot", description: "Setup de propiedades personalizadas, workflows y configuración de la API." },
            { phase: "Fase 3", title: "Desarrollo de Integraciones", description: "Construcción de los flujos de sincronización y automatización en n8n." },
            { phase: "Fase 4", title: "Testing y Lanzamiento", description: "Pruebas con datos reales, corrección de edge cases y despliegue gradual." }
        ],
        results: [
            { number: "70%", label: "Reducción en entrada manual de datos" },
            { number: "12", label: "Workflows automatizados" },
            { number: "3x", label: "Velocidad de respuesta a leads" },
            { number: "100%", label: "Visibilidad del pipeline" }
        ],
        learnings: [
            { title: "APIs tienen límites", text: "HubSpot tiene rate limits estrictos. Diseñar con batching y queues desde el inicio evita problemas en producción." },
            { title: "Datos limpios primero", text: "Antes de automatizar, es crítico limpiar y estandarizar los datos existentes. Basura entra, basura sale." }
        ],
        visible: true
    },
    {
        id: "agentes-ia-integrados",
        number: "03",
        category: "IA",
        title: "Agentes de IA Integrados",
        subtitle: "Implementación de agentes de IA para clasificación automática, generación de contenido y soporte interno",
        description: "Implementación de agentes de IA para clasificación automática, generación de contenido y soporte interno, integrados directamente en flujos de automatización.",
        year: "2025",
        company: "Urpe AI Lab",
        duration: "En curso",
        image: "https://via.placeholder.com/1200x600/1A2332/FFFFFF?text=Agentes+IA",
        imageCaption: "Arquitectura de agentes de IA integrados en flujos de automatización",
        techCard: ["n8n", "OpenAI", "Python", "Webhooks"],
        techFull: ["n8n", "OpenAI API", "Python", "Webhooks", "LangChain", "Vector DB"],
        metrics: [
            { label: "Agentes activos", value: "5" },
            { label: "Precisión promedio", value: "94%" },
            { label: "Requests/día", value: "2000+" },
            { label: "Tiempo respuesta", value: "<3s" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Integrar capacidades de inteligencia artificial directamente en los flujos de automatización existentes para potenciar la toma de decisiones y reducir intervención humana." },
                    { type: "paragraph", text: "El proyecto busca automatizar tareas que requieren juicio y comprensión contextual, como clasificación de tickets, generación de respuestas y análisis de documentos." }
                ]
            }
        ],
        features: [
            { title: "Clasificación Inteligente", description: "Los tickets y consultas se clasifican automáticamente por categoría, urgencia y departamento usando modelos de lenguaje." },
            { title: "Generación de Contenido", description: "Creación automática de borradores de respuestas, resúmenes y documentación basada en contexto empresarial." },
            { title: "Análisis de Documentos", description: "Extracción y estructuración de información clave desde documentos PDF, emails y formularios." }
        ],
        process: [
            { phase: "Fase 1", title: "Identificación de Casos de Uso", description: "Análisis de tareas que se beneficiarían de IA y priorización por impacto." },
            { phase: "Fase 2", title: "Prompt Engineering", description: "Diseño y optimización de prompts para cada caso de uso específico." },
            { phase: "Fase 3", title: "Integración en Flujos", description: "Conexión de los agentes de IA con los flujos de n8n existentes." },
            { phase: "Fase 4", title: "Iteración y Mejora", description: "Monitoreo de resultados y ajuste continuo basado en feedback real." }
        ],
        results: [
            { number: "94%", label: "Precisión en clasificación" },
            { number: "60%", label: "Reducción en tiempo de respuesta" },
            { number: "5", label: "Agentes en producción" },
            { number: "2000+", label: "Operaciones diarias con IA" }
        ],
        learnings: [
            { title: "Prompts son código", text: "Los prompts necesitan el mismo rigor que el código: versionado, testing y documentación." },
            { title: "Fallbacks humanos", text: "Siempre tener un camino de escalación humana cuando la IA no tiene suficiente confianza en su respuesta." }
        ],
        visible: true
    },
    {
        id: "pipeline-datos-tiempo-real",
        number: "04",
        category: "Datos",
        title: "Pipeline de Datos en Tiempo Real",
        subtitle: "Arquitectura de datos que captura, transforma y entrega información actualizada para toma de decisiones",
        description: "Diseño de arquitectura de datos que captura, transforma y entrega información actualizada para toma de decisiones basada en datos en tiempo real.",
        year: "2025",
        company: "Naranja Media",
        duration: "2 meses",
        image: "https://via.placeholder.com/1200x600/1A2332/FFFFFF?text=Pipeline+Datos",
        imageCaption: "Flujo del pipeline de datos en tiempo real",
        techCard: ["n8n", "SQL", "APIs", "Monitoring"],
        techFull: ["n8n", "PostgreSQL", "REST APIs", "Google Sheets", "Monitoring", "JavaScript"],
        metrics: [
            { label: "Fuentes de datos", value: "8" },
            { label: "Transformaciones", value: "25+" },
            { label: "Latencia", value: "<10s" },
            { label: "Datos/día", value: "50K+" }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    { type: "lead", text: "Construir un sistema de datos unificado que alimente dashboards y reportes en tiempo real, eliminando silos de información." },
                    { type: "paragraph", text: "La empresa necesitaba una visión consolidada de sus operaciones digitales, con datos actualizados provenientes de múltiples fuentes que históricamente estaban desconectadas." }
                ]
            }
        ],
        features: [
            { title: "ETL Automatizado", description: "Extracción, transformación y carga de datos desde 8 fuentes diferentes con validación automática." },
            { title: "Dashboards en Vivo", description: "Paneles actualizados en tiempo real con métricas operativas y de negocio clave." },
            { title: "Alertas Inteligentes", description: "Notificaciones automáticas cuando las métricas superan umbrales definidos." }
        ],
        process: [
            { phase: "Fase 1", title: "Inventario de Datos", description: "Mapeo de todas las fuentes de datos y definición de métricas prioritarias." },
            { phase: "Fase 2", title: "Diseño del Pipeline", description: "Arquitectura de flujos ETL con manejo de errores y reintentos." },
            { phase: "Fase 3", title: "Implementación", description: "Desarrollo de transformaciones y conexiones entre fuentes y destinos." },
            { phase: "Fase 4", title: "Dashboards y Alertas", description: "Construcción de paneles visuales y configuración de alertas." }
        ],
        results: [
            { number: "8", label: "Fuentes de datos integradas" },
            { number: "10s", label: "Latencia máxima" },
            { number: "100%", label: "Visibilidad operativa" },
            { number: "50K+", label: "Registros procesados diarios" }
        ],
        learnings: [
            { title: "Calidad sobre cantidad", text: "Es mejor tener pocas métricas bien calculadas que muchos números sin contexto. Enfocarse en lo que realmente impacta decisiones." },
            { title: "Monitorear el monitor", text: "El pipeline de datos también necesita su propio monitoreo. Si falla silenciosamente, las decisiones se toman con datos desactualizados." }
        ],
        visible: true
    },
    {
        id: "sistema-de-notificaciones-inteligentes",
        number: "13",
        category: "Notificaciones e IA",
        title: "Sistema de Notificaciones Inteligentes",
        subtitle: "Orquestación y envío de alertas personalizadas para una respuesta rápida a incidentes.",
        description: "Diseño e implementación de un sistema de notificaciones inteligentes para analizar eventos y enviar alertas personalizadas por múltiples canales. Reducción del tiempo de respuesta a incidentes en un 75% mediante orquestación avanzada y clasificación de urgencia.",
        year: "2026",
        company: "Urpe AI Lab",
        duration: "2 meses",
        image: "https://via.placeholder.com/1200x600/1A2332/FFFFFF?text=Sistema+de+Notificaciones+Inteligentes",
        imageCaption: "Diagrama conceptual del flujo de notificaciones inteligentes.",
        techCard: [
            "n8n",
            "OpenAI",
            "PostgreSQL",
            "Slack API"
        ],
        techFull: [
            "n8n",
            "OpenAI",
            "PostgreSQL",
            "Webhooks",
            "Slack API",
            "WhatsApp API",
            "Python"
        ],
        metrics: [
            {
                label: "Reducción Tiempo Respuesta",
                value: "75%"
            },
            {
                label: "Canales de Notificación",
                value: "3+"
            },
            {
                label: "Fuentes de Eventos",
                value: "Múltiples"
            },
            {
                label: "Precisión Clasificación IA",
                value: "Alta"
            }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Optimizar la gestión de incidentes y la comunicación crítica mediante un sistema de alertas proactivo y adaptativo, garantizando la entrega oportuna de información esencial."
                    },
                    {
                        type: "paragraph",
                        text: "El proyecto se centró en construir una solución robusta capaz de procesar eventos de diversas fuentes, evaluarlos contextualmente y distribuir notificaciones personalizadas. Esto asegura que la información correcta llegue al destinatario adecuado en el momento oportuno, minimizando el impacto de potenciales incidencias operativas."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "Este proyecto implicó el diseño y la implementación de un sistema de notificaciones inteligentes capaz de centralizar y analizar eventos procedentes de múltiples fuentes, incluyendo webhooks, bases de datos internas y APIs externas. La arquitectura se fundamenta en la orquestación eficiente de flujos de datos para una gestión integral de alertas."
                    },
                    {
                        type: "paragraph",
                        text: "Utilizando n8n como la columna vertebral para la automatización y el enrutamiento de flujos de trabajo, se integró OpenAI para la clasificación autónoma de la urgencia de los eventos, permitiendo una priorización dinámica y reduciendo la intervención manual. PostgreSQL se empleó para mantener un registro histórico completo y auditable de todos los eventos y notificaciones procesadas."
                    },
                    {
                        type: "paragraph",
                        text: "El sistema fue configurado para enviar alertas personalizadas a través de múltiples canales, como Slack, email y WhatsApp. La personalización se basó en la urgencia del incidente y las preferencias del destinatario, garantizando una comunicación efectiva y oportuna frente a cualquier eventualidad detectada."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Análisis Multifuente de Eventos",
                description: "Capacidad para procesar y consolidar eventos de diversas procedencias (webhooks, bases de datos, APIs externas) en una plataforma unificada."
            },
            {
                title: "Clasificación Inteligente de Urgencia",
                description: "Implementación de modelos de IA (OpenAI) para analizar el contexto de cada evento y clasificar su nivel de urgencia de manera autónoma."
            },
            {
                title: "Notificaciones Multicanal Adaptativas",
                description: "Envío de alertas personalizadas por Slack, email y WhatsApp, adaptando el mensaje y el canal según la urgencia y el perfil del destinatario."
            },
            {
                title: "Historial de Eventos y Auditoría",
                description: "Almacenamiento persistente en PostgreSQL de todos los eventos y notificaciones para fines de trazabilidad, análisis y cumplimiento."
            }
        ],
        process: [
            {
                phase: "Fase 1",
                title: "Análisis y Diseño Conceptual",
                description: "Definición detallada de los requisitos del sistema, identificación de fuentes de datos, canales de comunicación y reglas iniciales de clasificación de urgencia."
            },
            {
                phase: "Fase 2",
                title: "Implementación de la Orquestación y Conectores",
                description: "Configuración de n8n para la gestión de flujos de trabajo, integración de webhooks, bases de datos y APIs de canales de notificación (Slack, WhatsApp)."
            },
            {
                phase: "Fase 3",
                title: "Desarrollo del Módulo de Inteligencia Artificial",
                description: "Integración con OpenAI para la clasificación contextual de la urgencia de los eventos, y desarrollo de lógica para la personalización de mensajes."
            },
            {
                phase: "Fase 4",
                title: "Pruebas, Despliegue y Optimización Continua",
                description: "Realización de pruebas funcionales y de rendimiento, despliegue en un entorno productivo y monitoreo para mejoras iterativas."
            }
        ],
        results: [
            {
                number: "75%",
                label: "Reducción en el tiempo de respuesta a incidentes críticos, mejorando la operatividad."
            },
            {
                number: "3+",
                label: "Canales de comunicación críticos (Slack, WhatsApp, Email) integrados para notificaciones."
            },
            {
                number: "Múltiples",
                label: "Fuentes de datos heterogéneas procesadas y analizadas para la detección de eventos."
            },
            {
                number: "Alta",
                label: "Precisión en la clasificación automática de la urgencia de los incidentes por IA."
            }
        ],
        learnings: [
            {
                title: "El Valor de la Orquestación de Flujos",
                text: "La implementación de n8n demostró la capacidad de esta herramienta para integrar y automatizar flujos complejos de datos entre servicios dispares de manera eficiente, optimizando la gestión de eventos y notificaciones."
            },
            {
                title: "Impacto de la IA en la Priorización de Alertas",
                text: "La integración de OpenAI fue fundamental para clasificar dinámicamente la urgencia de los eventos, reduciendo significativamente la carga manual de triaje y mejorando la precisión y relevancia de las alertas enviadas a los equipos."
            },
            {
                title: "Flexibilidad Multicanal para la Comunicación Crítica",
                text: "Se aprendió la importancia de adaptar la estrategia de comunicación a diversos canales y niveles de urgencia. Esto garantiza que la información crítica llegue a las personas correctas en el formato más efectivo, mejorando la toma de decisiones y la coordinación."
            }
        ],
        visible: true
    },
    {
        id: "sistema-de-notificaciones-inteligentes",
        number: "14",
        category: "Notificaciones e IA",
        title: "Sistema de Notificaciones Inteligentes",
        subtitle: "Orquestación y envío de alertas personalizadas para una respuesta rápida a incidentes.",
        description: "Diseño e implementación de un sistema de notificaciones inteligentes para analizar eventos y enviar alertas personalizadas por múltiples canales. Reducción del tiempo de respuesta a incidentes en un 75% mediante orquestación avanzada y clasificación de urgencia.",
        year: "2026",
        company: "Urpe AI Lab",
        duration: "2 meses",
        image: "https://via.placeholder.com/1200x600/1A2332/FFFFFF?text=Sistema+de+Notificaciones+Inteligentes",
        imageCaption: "Diagrama conceptual del flujo de notificaciones inteligentes.",
        techCard: [
            "n8n",
            "OpenAI",
            "PostgreSQL",
            "Slack API"
        ],
        techFull: [
            "n8n",
            "OpenAI",
            "PostgreSQL",
            "Webhooks",
            "Slack API",
            "WhatsApp API",
            "Python"
        ],
        metrics: [
            {
                label: "Reducción Tiempo Respuesta",
                value: "75%"
            },
            {
                label: "Canales de Notificación",
                value: "3+"
            },
            {
                label: "Fuentes de Eventos",
                value: "Múltiples"
            },
            {
                label: "Precisión Clasificación IA",
                value: "Alta"
            }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Optimizar la gestión de incidentes y la comunicación crítica mediante un sistema de alertas proactivo y adaptativo, garantizando la entrega oportuna de información esencial."
                    },
                    {
                        type: "paragraph",
                        text: "El proyecto se centró en construir una solución robusta capaz de procesar eventos de diversas fuentes, evaluarlos contextualmente y distribuir notificaciones personalizadas. Esto asegura que la información correcta llegue al destinatario adecuado en el momento oportuno, minimizando el impacto de potenciales incidencias operativas."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "Este proyecto implicó el diseño y la implementación de un sistema de notificaciones inteligentes capaz de centralizar y analizar eventos procedentes de múltiples fuentes, incluyendo webhooks, bases de datos internas y APIs externas. La arquitectura se fundamenta en la orquestación eficiente de flujos de datos para una gestión integral de alertas."
                    },
                    {
                        type: "paragraph",
                        text: "Utilizando n8n como la columna vertebral para la automatización y el enrutamiento de flujos de trabajo, se integró OpenAI para la clasificación autónoma de la urgencia de los eventos, permitiendo una priorización dinámica y reduciendo la intervención manual. PostgreSQL se empleó para mantener un registro histórico completo y auditable de todos los eventos y notificaciones procesadas."
                    },
                    {
                        type: "paragraph",
                        text: "El sistema fue configurado para enviar alertas personalizadas a través de múltiples canales, como Slack, email y WhatsApp. La personalización se basó en la urgencia del incidente y las preferencias del destinatario, garantizando una comunicación efectiva y oportuna frente a cualquier eventualidad detectada."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Análisis Multifuente de Eventos",
                description: "Capacidad para procesar y consolidar eventos de diversas procedencias (webhooks, bases de datos, APIs externas) en una plataforma unificada."
            },
            {
                title: "Clasificación Inteligente de Urgencia",
                description: "Implementación de modelos de IA (OpenAI) para analizar el contexto de cada evento y clasificar su nivel de urgencia de manera autónoma."
            },
            {
                title: "Notificaciones Multicanal Adaptativas",
                description: "Envío de alertas personalizadas por Slack, email y WhatsApp, adaptando el mensaje y el canal según la urgencia y el perfil del destinatario."
            },
            {
                title: "Historial de Eventos y Auditoría",
                description: "Almacenamiento persistente en PostgreSQL de todos los eventos y notificaciones para fines de trazabilidad, análisis y cumplimiento."
            }
        ],
        process: [
            {
                phase: "Fase 1",
                title: "Análisis y Diseño Conceptual",
                description: "Definición detallada de los requisitos del sistema, identificación de fuentes de datos, canales de comunicación y reglas iniciales de clasificación de urgencia."
            },
            {
                phase: "Fase 2",
                title: "Implementación de la Orquestación y Conectores",
                description: "Configuración de n8n para la gestión de flujos de trabajo, integración de webhooks, bases de datos y APIs de canales de notificación (Slack, WhatsApp)."
            },
            {
                phase: "Fase 3",
                title: "Desarrollo del Módulo de Inteligencia Artificial",
                description: "Integración con OpenAI para la clasificación contextual de la urgencia de los eventos, y desarrollo de lógica para la personalización de mensajes."
            },
            {
                phase: "Fase 4",
                title: "Pruebas, Despliegue y Optimización Continua",
                description: "Realización de pruebas funcionales y de rendimiento, despliegue en un entorno productivo y monitoreo para mejoras iterativas."
            }
        ],
        results: [
            {
                number: "75%",
                label: "Reducción en el tiempo de respuesta a incidentes críticos, mejorando la operatividad."
            },
            {
                number: "3+",
                label: "Canales de comunicación críticos (Slack, WhatsApp, Email) integrados para notificaciones."
            },
            {
                number: "Múltiples",
                label: "Fuentes de datos heterogéneas procesadas y analizadas para la detección de eventos."
            },
            {
                number: "Alta",
                label: "Precisión en la clasificación automática de la urgencia de los incidentes por IA."
            }
        ],
        learnings: [
            {
                title: "El Valor de la Orquestación de Flujos",
                text: "La implementación de n8n demostró la capacidad de esta herramienta para integrar y automatizar flujos complejos de datos entre servicios dispares de manera eficiente, optimizando la gestión de eventos y notificaciones."
            },
            {
                title: "Impacto de la IA en la Priorización de Alertas",
                text: "La integración de OpenAI fue fundamental para clasificar dinámicamente la urgencia de los eventos, reduciendo significativamente la carga manual de triaje y mejorando la precisión y relevancia de las alertas enviadas a los equipos."
            },
            {
                title: "Flexibilidad Multicanal para la Comunicación Crítica",
                text: "Se aprendió la importancia de adaptar la estrategia de comunicación a diversos canales y niveles de urgencia. Esto garantiza que la información crítica llegue a las personas correctas en el formato más efectivo, mejorando la toma de decisiones y la coordinación."
            }
        ],
        visible: true
    }
];