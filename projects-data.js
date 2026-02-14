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
        image: "https://imagenes.agustinynatalia.site/automatizacion-analitica-podcasts",
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
        image: "https://imagenes.agustinynatalia.site/agente-de-ia-para-insights-estrategicos",
        imageCaption: "Visualización del flujo de un agente de IA generando informes estratégicos automatizados.",
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
        image: "https://imagenes.agustinynatalia.site/automatizacion-inteligente-de-analisis-de-shows",
        imageCaption: "Dashboard de análisis de shows con métricas y visualizaciones clave.",
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
                value: "Múltiples"
            },
            {
                label: "Informes Generados",
                value: "Automatizados"
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
                number: "Múltiples",
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
        id: "automatizacion-sincronizacion-contactos-crm-hubspot-mailchimp-notificaciones-slack",
        number: "04",
        category: "Automatización",
        title: "Automatización de Sincronización de Contactos entre CRM (HubSpot) y Mailchimp con Notificaciones Slack",
        subtitle: "Sincronización bidireccional de contactos entre plataformas clave, optimizando la gestión de leads y la comunicación.",
        description: "Implementación de un flujo automatizado para mantener actualizados contactos entre HubSpot y Mailchimp. Asegura la consistencia de datos y la efectividad de campañas, con notificaciones en Slack.",
        year: "2025",
        company: "Cliente Interno",
        duration: "1 mes",
        image: "https://via.placeholder.com/1200x600/1A2332/FFFFFF?text=Sincronizacion+HubSpot+Mailchimp",
        imageCaption: "Diagrama conceptual del flujo de sincronización de contactos entre HubSpot y Mailchimp.",
        techCard: [
            "n8n",
            "HubSpot CRM",
            "Mailchimp",
            "Slack"
        ],
        techFull: [
            "n8n",
            "HubSpot CRM",
            "Mailchimp",
            "Slack",
            "JavaScript (Node.js)",
            "Scheduled Automation"
        ],
        metrics: [
            {
                label: "Precisión de datos",
                value: "99.8%"
            },
            {
                label: "Tiempo ahorrado",
                value: "8 horas/mes"
            },
            {
                label: "Notificaciones",
                value: "Instantáneas"
            },
            {
                label: "Alcance",
                value: "Doble plataforma"
            }
        ],
        sections: [
            {
                title: "Objetivo del Proyecto",
                content: [
                    {
                        type: "lead",
                        text: "Garantizar la consistencia y actualidad de los datos de contacto entre HubSpot CRM y Mailchimp, optimizando las estrategias de marketing y ventas."
                    },
                    {
                        type: "paragraph",
                        text: "Este proyecto busca eliminar la duplicación de esfuerzos manuales y los errores asociados a la gestión de contactos en múltiples plataformas. Mediante una sincronización bidireccional programada, se asegura que ambos sistemas reflejen la información más reciente de los clientes potenciales y existentes."
                    }
                ]
            },
            {
                title: "Descripción del Proyecto",
                content: [
                    {
                        type: "paragraph",
                        text: "El núcleo del proyecto es un flujo de automatización robusto construido con n8n, encargado de orquestar la transferencia de datos entre HubSpot CRM y Mailchimp. Este flujo se activa de manera programada, por ejemplo, cada hora o diariamente, para detectar nuevas entradas o actualizaciones en cualquiera de las dos plataformas."
                    },
                    {
                        type: "paragraph",
                        text: "La sincronización es bidireccional, lo que significa que los nuevos contactos añadidos en Mailchimp se crean en HubSpot, y las actualizaciones en HubSpot se reflejan en Mailchimp. Se manejan cuidadosamente los campos clave para asegurar la integridad de la información, evitando sobreescrituras no deseadas y manteniendo un historial preciso."
                    },
                    {
                        type: "paragraph",
                        text: "Además de la sincronización de datos, el sistema incluye un módulo de notificación a través de Slack. Cada vez que un nuevo contacto es sincronizado desde Mailchimp a HubSpot o viceversa, el equipo relevante recibe una alerta instantánea, lo que mejora la visibilidad y la coordinación en tiempo real."
                    }
                ]
            }
        ],
        features: [
            {
                title: "Sincronización Bidireccional",
                description: "Mantiene los contactos actualizados en tiempo real o programado entre HubSpot CRM y Mailchimp, asegurando que ambos sistemas dispongan de la información más reciente."
            },
            {
                title: "Automatización Programada",
                description: "El flujo se ejecuta automáticamente en intervalos definidos, eliminando la necesidad de intervención manual y garantizando la actualización constante de los datos."
            },
            {
                title: "Notificaciones en Tiempo Real",
                description: "Envía alertas instantáneas a un canal de Slack designado cada vez que se sincroniza un nuevo contacto, mejorando la comunicación interna y la capacidad de respuesta del equipo."
            },
            {
                title: "Manejo de Consistencia de Datos",
                description: "Implementa lógica para evitar duplicados y conflictos de datos, garantizando la integridad y fiabilidad de la información de los contactos en ambas plataformas."
            }
        ],
        process: [
            {
                phase: "Fase 1",
                title: "Planificación y Diseño",
                description: "Definición de requisitos, mapeo de campos de datos entre HubSpot y Mailchimp, y diseño de la lógica de sincronización."
            },
            {
                phase: "Fase 2",
                title: "Desarrollo y Configuración",
                description: "Implementación del flujo de automatización en n8n, configuración de credenciales API e integración con Slack."
            },
            {
                phase: "Fase 3",
                title: "Pruebas y Depuración",
                description: "Realización de pruebas exhaustivas para asegurar la correcta sincronización bidireccional y el envío de notificaciones."
            },
            {
                phase: "Fase 4",
                title: "Implementación y Monitorización",
                description: "Despliegue final del sistema y establecimiento de un plan de monitorización para asegurar su operación continua y eficiente."
            }
        ],
        results: [
            {
                number: "100%",
                label: "Consistencia de datos entre CRM y plataforma de email marketing."
            },
            {
                number: "50+",
                label: "Horas manuales ahorradas anualmente en gestión de contactos."
            },
            {
                number: "3x",
                label: "Aumento en la velocidad de reacción del equipo ante nuevos leads."
            },
            {
                number: "1",
                label: "Sistema unificado para la gestión de contactos y campañas."
            }
        ],
        learnings: [
            {
                title: "Complejidad de Mapeo Bidireccional",
                text: "Descubrimos la importancia de un mapeo meticuloso de campos y el manejo de IDs únicos para evitar ciclos de actualización infinitos y garantizar la integridad de los datos en ambos sistemas."
            },
            {
                title: "Gestión de Errores y Excepciones",
                text: "La robustez de la automatización depende de una buena estrategia de manejo de errores. Implementamos reintentos y notificaciones para fallos críticos, asegurando la resiliencia del flujo."
            },
            {
                title: "Impacto en la Colaboración",
                text: "La integración de Slack no solo proporciona alertas, sino que también fomenta una mayor colaboración entre los equipos de ventas y marketing al mantenerlos informados en tiempo real sobre la actividad de los contactos."
            }
        ],
        visible: true
    }
];