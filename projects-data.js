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
        id: "automatizacion-integral-de-contenido-y-diseno-con-ia-para-marketing-digital",
        number: "04",
        category: "Automatización e IA",
        title: "Automatización Integral de Contenido y Diseño con IA para Marketing Digital",
        subtitle: "Flujo automatizado para la creación y gestión de contenido web y elementos visuales con inteligencia artificial.",
        description: "Este proyecto automatiza la creación de contenido web persuasivo y elementos visuales (logos, imágenes) utilizando IA avanzada. Agiliza la producción de materiales de marketing digital y reduce significativamente el esfuerzo manual.",
        year: "2025",
        company: "Nata",
        duration: "2-3 meses",
        image: "https://imagenes.agustinynatalia.site/automatizacion-integral-de-contenido-y-diseno-con-ia-para-marketing-digital",
        imageCaption: "Diagrama de flujo de automatización de contenido y diseño con IA en n8n.",
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
        image: "https://imagenes.agustinynatalia.site/automatizacion-completa-de-contenido-y-publicacion-para-blog-de-tecnologia-con-ia",
        imageCaption: "Diagrama de flujo de automatización de contenido con IA para un blog de tecnología.",
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
        image: "https://imagenes.agustinynatalia.site/pulso-app-salud-cardiovascular",
        imageCaption: "Dashboard de métricas cardiovasculares con análisis IA en streaming",
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
        image: "https://imagenes.agustinynatalia.site/monica-brain-asistente-ia-omnicanal",
        imageCaption: "Atención conversacional automatizada con calificación de clientes.",
        liveUrl: "https://brain.urpeailab.com/visual",
        liveLabel: "Ver el visual en vivo",
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
        image: "https://imagenes.agustinynatalia.site/monica-developer-apps-por-prompts",
        imageCaption: "De una idea descrita en palabras a una aplicación lista para usar.",
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
        image: "https://imagenes.agustinynatalia.site/monica-designer-identidad-de-marca-ia",
        imageCaption: "De un brief breve a una identidad de marca completa.",
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
        image: "https://imagenes.agustinynatalia.site/status-page-monitoreo-de-servicios",
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
        image: "https://imagenes.agustinynatalia.site/flowdeck-gestor-n8n",
        imageCaption: "Un solo panel para administrar todas tus instancias de n8n.",
        liveUrl: "https://github.com/Agustin1231/flowdeck",
        liveLabel: "Ver en GitHub",
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
            { label: "Instancias gestionadas", value: "Múltiples" },
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
    }
];