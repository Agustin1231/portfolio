// ==========================================
// GUÍAS — fuente única de datos
// Cada guía: { id, number, title, description, image, url, urlLabel, visible }
//   id         identificador único (slug)
//   number     correlativo "01", "02", ... (orden de muestra)
//   title      título de la guía
//   description bajada corta (se muestra al hacer hover sobre la card)
//   image      URL de la portada (mismo R2 que los proyectos: imagenes.agustinynatalia.site)
//   url        a dónde lleva la card: PDF, artículo o enlace externo
//   urlLabel   texto del enlace (ej. "Leer guía", "Descargar PDF")
//   visible    true para mostrarla. Si NINGUNA guía está visible, la sección
//              completa (#guias) y su link del menú se ocultan automáticamente.
// ==========================================
var GUIDES_DATA = [
    // Plantilla de ejemplo (visible:false → no se muestra todavía).
    // Duplicá este objeto, completá los campos y poné visible:true.
    {
        id: "ejemplo-guia",
        number: "01",
        title: "Título de la guía",
        description: "Bajada corta que explica de qué trata la guía y a quién le sirve.",
        image: "https://imagenes.agustinynatalia.site/placeholder.jpg",
        url: "#",
        urlLabel: "Leer guía",
        visible: false
    }
];
