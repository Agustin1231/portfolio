// ==========================================
// PROJECT RENDERER
// Lee PROJECTS_DATA (de projects-data.js) y renderiza dinámicamente
// ==========================================

(function () {
    'use strict';

    function getProjectIdFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    function getProjects() {
        if (typeof PROJECTS_DATA !== 'undefined' && PROJECTS_DATA.length > 0) {
            return PROJECTS_DATA;
        }
        console.error('PROJECTS_DATA no está definido. Cargá projects-data.js antes de project-renderer.js');
        return [];
    }

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ==========================================
    // CARDS EN INDEX.HTML
    // ==========================================

    function renderProjectCards(projects) {
        const grid = document.querySelector('.projects-grid');
        if (!grid) return;
        // Mostramos los proyectos más nuevos primero (número más alto arriba).
        const visibleProjects = projects
            .filter(p => p.visible !== false)
            .sort((a, b) => parseInt(b.number, 10) - parseInt(a.number, 10));
        grid.innerHTML = visibleProjects.map(project => `
            <a class="project-card" href="proyecto.html?id=${encodeURIComponent(project.id)}" aria-label="${escapeHTML(project.title)}">
                <div class="project-card-media">
                    <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" loading="lazy" onerror="this.style.display='none'">
                </div>
                <div class="project-card-overlay">
                    <div class="project-card-body">
                        <h3>${escapeHTML(project.title)}</h3>
                        <p>${escapeHTML(project.description)}</p>
                        <span class="project-link">Ver proyecto →</span>
                    </div>
                </div>
            </a>
        `).join('');
        initCardAnimations();
    }

    // ==========================================
    // PÁGINA DE PROYECTO
    // ==========================================

    function renderProjectPage(project, allProjects) {
        const root = document.getElementById('project-root');
        if (!root) return;
        document.title = `${project.title} | Agustín Peralta`;
        const related = allProjects.filter(p => p.id !== project.id && p.visible !== false).slice(0, 3);

        root.innerHTML = `
            <section class="project-hero">
                <div class="container">
                    <a href="index.html#proyectos" class="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Volver a Proyectos
                    </a>
                    <div class="project-header">
                        <span class="project-category">${escapeHTML(project.category)}</span>
                        <h1 class="project-title">${escapeHTML(project.title)}</h1>
                        <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
                        <div class="project-meta">
                            <span class="meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                ${escapeHTML(project.year)}
                            </span>
                            <span class="meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                                ${escapeHTML(project.company)}
                            </span>
                            <span class="meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                ${escapeHTML(project.duration)}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="project-image">
                <div class="container">
                    <div class="image-wrapper">
                        <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" onerror="this.closest('.project-image').style.display='none'">
                        ${project.imageCaption ? `<div class="image-caption">${escapeHTML(project.imageCaption)}</div>` : ''}
                    </div>
                </div>
            </section>
            <section class="project-content">
                <div class="container">
                    <div class="content-grid">
                        <div class="main-content">
                            ${renderSections(project)}
                            ${renderFeatures(project)}
                            ${renderProcess(project)}
                            ${renderResults(project)}
                            ${renderLearnings(project)}
                        </div>
                        <aside class="sidebar">${renderSidebar(project, related)}</aside>
                    </div>
                </div>
            </section>
        `;
    }

    function renderSections(project) {
        if (!project.sections || !project.sections.length) return '';
        let n = 1;
        return project.sections.map(s => {
            const num = String(n++).padStart(2, '0');
            const html = s.content.map(b => b.type === 'lead' ? `<p class="lead">${escapeHTML(b.text)}</p>` : `<p>${escapeHTML(b.text)}</p>`).join('');
            return `<div class="content-block"><div class="block-header"><span class="block-number">${num}.</span><h2>${escapeHTML(s.title)}</h2><div class="block-line"></div></div>${html}</div>`;
        }).join('');
    }

    function renderFeatures(project) {
        if (!project.features || !project.features.length) return '';
        const num = String((project.sections ? project.sections.length : 0) + 1).padStart(2, '0');
        return `<div class="content-block"><div class="block-header"><span class="block-number">${num}.</span><h2>Funcionalidades Clave</h2><div class="block-line"></div></div><div class="features-list">${project.features.map(f => `<div class="feature-item"><div class="feature-content"><h3>${escapeHTML(f.title)}</h3><p>${escapeHTML(f.description)}</p></div></div>`).join('')}</div></div>`;
    }

    function renderProcess(project) {
        if (!project.process || !project.process.length) return '';
        const num = String((project.sections ? project.sections.length : 0) + 2).padStart(2, '0');
        return `<div class="content-block"><div class="block-header"><span class="block-number">${num}.</span><h2>Proceso de Desarrollo</h2><div class="block-line"></div></div><div class="process-timeline">${project.process.map(s => `<div class="process-step"><div class="process-marker"></div><div class="process-content"><span class="process-phase">${escapeHTML(s.phase)}</span><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.description)}</p></div></div>`).join('')}</div></div>`;
    }

    function renderResults(project) {
        if (!project.results || !project.results.length) return '';
        const num = String((project.sections ? project.sections.length : 0) + 3).padStart(2, '0');
        return `<div class="content-block"><div class="block-header"><span class="block-number">${num}.</span><h2>Resultados e Impacto</h2><div class="block-line"></div></div><div class="results-grid">${project.results.map(r => `<div class="result-card"><div class="result-number">${escapeHTML(r.number)}</div><div class="result-label">${escapeHTML(r.label)}</div></div>`).join('')}</div></div>`;
    }

    function renderLearnings(project) {
        if (!project.learnings || !project.learnings.length) return '';
        const num = String((project.sections ? project.sections.length : 0) + 4).padStart(2, '0');
        return `<div class="content-block"><div class="block-header"><span class="block-number">${num}.</span><h2>Aprendizajes Clave</h2><div class="block-line"></div></div><div class="learnings">${project.learnings.map(l => `<div class="learning-item"><h4>${escapeHTML(l.title)}</h4><p>${escapeHTML(l.text)}</p></div>`).join('')}</div></div>`;
    }

    function renderSidebar(project, related) {
        return `
            <div class="sidebar-block"><h3>Stack Tecnológico</h3><div class="tech-tags">${project.techFull.map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}</div></div>
            ${project.metrics && project.metrics.length ? `<div class="sidebar-block"><h3>Métricas Técnicas</h3><div class="metrics">${project.metrics.map(m => `<div class="metric-item"><span class="metric-label">${escapeHTML(m.label)}</span><span class="metric-value">${escapeHTML(m.value)}</span></div>`).join('')}</div></div>` : ''}
            <div class="sidebar-block"><h3>Enlaces</h3><div class="project-links">${project.liveUrl ? `<a href="${escapeHTML(project.liveUrl)}" target="_blank" rel="noopener" class="project-cta project-cta--live"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${escapeHTML(project.liveLabel || 'Ver proyecto en vivo')}</a>` : ''}<a href="index.html#contacto" class="project-cta"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Consultar sobre este proyecto</a></div></div>
            ${related.length ? `<div class="sidebar-block"><h3>Proyectos Relacionados</h3><div class="related-projects">${related.map(r => `<a href="proyecto.html?id=${encodeURIComponent(r.id)}" class="related-item"><span class="related-title">${escapeHTML(r.title)}</span><span class="related-arrow">→</span></a>`).join('')}</div></div>` : ''}
        `;
    }

    function renderNotFound() {
        const root = document.getElementById('project-root');
        if (!root) return;
        root.innerHTML = `<section class="project-hero"><div class="container"><a href="index.html#proyectos" class="back-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Volver a Proyectos</a><div class="project-header"><h1 class="project-title">Proyecto no encontrado</h1><p class="project-subtitle">El proyecto que buscas no existe o fue removido.</p></div></div></section>`;
    }

    function initCardAnimations() {
        const cards = document.querySelectorAll('.project-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        cards.forEach((el, i) => { el.style.transitionDelay = `${i * 0.06}s`; observer.observe(el); });
    }

    // ==========================================
    // INIT
    // ==========================================

    function init() {
        const projects = getProjects();
        if (!projects.length) {
            // Reintentar hasta 10 veces con intervalos de 100ms
            // por si projects-data.js aún no terminó de cargar
            if (typeof PROJECTS_DATA === 'undefined' && (!init._retries || init._retries < 10)) {
                init._retries = (init._retries || 0) + 1;
                console.warn('PROJECTS_DATA no disponible, reintentando... (' + init._retries + '/10)');
                setTimeout(init, 100);
                return;
            }
            console.error('No se pudieron cargar los proyectos después de múltiples intentos.');
            return;
        }
        const projectId = getProjectIdFromURL();
        if (projectId) {
            const project = projects.find(p => p.id === projectId);
            project ? renderProjectPage(project, projects) : renderNotFound();
        } else {
            renderProjectCards(projects);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();