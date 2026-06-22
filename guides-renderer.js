// ==========================================
// GUIDES RENDERER
// - En index.html: renderiza las cards de #guias (o estado "Próximamente").
// - En guia.html: renderiza la página de detalle de una guía (?id=...).
// ==========================================

(function () {
    'use strict';

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str == null ? '' : str;
        return div.innerHTML;
    }

    function getGuides() {
        return (typeof GUIDES_DATA !== 'undefined' && Array.isArray(GUIDES_DATA)) ? GUIDES_DATA : [];
    }

    function getGuideIdFromURL() {
        return new URLSearchParams(window.location.search).get('id');
    }

    function guideHref(guide) {
        return guide.externalUrl ? guide.externalUrl : `guia.html?id=${encodeURIComponent(guide.id)}`;
    }

    // ==========================================
    // CARDS EN INDEX.HTML
    // ==========================================

    function renderEmptyState(grid) {
        grid.classList.add('guides-grid--empty');
        grid.innerHTML = `
            <div class="guides-empty">
                <h3>Próximamente</h3>
                <p>Estoy preparando guías prácticas sobre IA, automatización y cómo dar tus primeros pasos en tech. Muy pronto acá.</p>
            </div>`;
    }

    function initCardAnimations() {
        const cards = document.querySelectorAll('.guides-grid .project-card');
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

    function renderGuideCards() {
        const grid = document.querySelector('.guides-grid');
        if (!grid) return;

        const guides = getGuides().filter(g => g.visible !== false);
        if (!guides.length) {
            renderEmptyState(grid);
            return;
        }

        grid.classList.remove('guides-grid--empty');
        guides.sort((a, b) => parseInt(a.number, 10) - parseInt(b.number, 10));

        grid.innerHTML = guides.map(guide => {
            const ext = !!guide.externalUrl;
            const target = ext ? ' target="_blank" rel="noopener"' : '';
            return `
            <a class="project-card" href="${escapeHTML(guideHref(guide))}"${target} aria-label="${escapeHTML(guide.title)}">
                <div class="project-card-media">
                    <img src="${escapeHTML(guide.image)}" alt="${escapeHTML(guide.title)}" loading="lazy" onerror="this.style.display='none'">
                </div>
                <div class="project-card-overlay">
                    <div class="project-card-body">
                        <h3>${escapeHTML(guide.title)}</h3>
                        <p>${escapeHTML(guide.description)}</p>
                        <span class="project-link">${escapeHTML(guide.urlLabel || 'Leer guía')} →</span>
                    </div>
                </div>
            </a>`;
        }).join('');

        initCardAnimations();
    }

    // ==========================================
    // PÁGINA DE GUÍA (guia.html)
    // ==========================================

    const SVG_CAL = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
    const SVG_CLOCK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';

    function blockHeader(num, title) {
        return `<div class="block-header"><span class="block-number">${String(num).padStart(2, '0')}.</span><h2>${escapeHTML(title)}</h2><div class="block-line"></div></div>`;
    }

    function renderRequirements(guide, num) {
        if (!guide.requirements || !guide.requirements.length) return '';
        const items = guide.requirements.map(r => `<li>${escapeHTML(r)}</li>`).join('');
        return `<div class="content-block">${blockHeader(num, 'Requisitos')}<p>Antes de empezar, ten (o genera) esto:</p><ul class="req-list">${items}</ul></div>`;
    }

    function renderGuideSections(guide, startNum) {
        if (!guide.sections || !guide.sections.length) return '';
        let n = startNum;
        return guide.sections.map(s => {
            const html = s.content.map(b => b.type === 'lead'
                ? `<p class="lead">${escapeHTML(b.text)}</p>`
                : `<p>${escapeHTML(b.text)}</p>`).join('');
            return `<div class="content-block">${blockHeader(n++, s.title)}${html}</div>`;
        }).join('');
    }

    function renderProsCons(guide, num) {
        const hasPros = guide.pros && guide.pros.length;
        const hasCons = guide.cons && guide.cons.length;
        if (!hasPros && !hasCons) return '';
        const prosCol = hasPros ? `<div class="proscons-col proscons-col--pro"><h3>Beneficios</h3><ul>${guide.pros.map(p => `<li>${escapeHTML(p)}</li>`).join('')}</ul></div>` : '';
        const consCol = hasCons ? `<div class="proscons-col proscons-col--con"><h3>A tener en cuenta</h3><ul>${guide.cons.map(c => `<li>${escapeHTML(c)}</li>`).join('')}</ul></div>` : '';
        return `<div class="content-block">${blockHeader(num, 'Beneficios y contras')}<div class="proscons-grid">${prosCol}${consCol}</div></div>`;
    }

    function renderGuideSidebar(guide) {
        const tools = (guide.tools && guide.tools.length)
            ? `<div class="sidebar-block"><h3>Qué se usó</h3><div class="tech-tags">${guide.tools.map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}</div></div>`
            : '';
        const download = guide.downloadFile
            ? `<div class="sidebar-block"><h3>Descarga</h3><div class="project-links"><a href="${escapeHTML(guide.downloadFile)}" download class="project-cta project-cta--download"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>${escapeHTML(guide.downloadLabel || 'Descargar guía (.md)')}</a></div></div>`
            : '';
        const cta = `<div class="sidebar-block"><h3>Enlaces</h3><div class="project-links">${guide.externalUrl ? `<a href="${escapeHTML(guide.externalUrl)}" target="_blank" rel="noopener" class="project-cta project-cta--live"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${escapeHTML(guide.urlLabel || 'Ver recurso')}</a>` : ''}<a href="index.html#contacto" class="project-cta"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Consultar sobre esta guía</a></div></div>`;
        return tools + download + cta;
    }

    function renderGuidePage(guide) {
        const root = document.getElementById('guide-root');
        if (!root) return;
        document.title = `${guide.title} | Agustín Peralta`;
        const meta = [
            guide.date ? `<span class="meta-item">${SVG_CAL}${escapeHTML(guide.date)}</span>` : '',
            guide.readingTime ? `<span class="meta-item">${SVG_CLOCK}${escapeHTML(guide.readingTime)}</span>` : ''
        ].join('');
        const imageSection = guide.image ? `
            <section class="project-image">
                <div class="container">
                    <div class="image-wrapper">
                        <img src="${escapeHTML(guide.image)}" alt="${escapeHTML(guide.title)}" onerror="this.closest('.project-image').style.display='none'">
                        ${guide.imageCaption ? `<div class="image-caption">${escapeHTML(guide.imageCaption)}</div>` : ''}
                    </div>
                </div>
            </section>` : '';

        root.innerHTML = `
            <section class="project-hero">
                <div class="container">
                    <a href="index.html#guias" class="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Volver a Guías
                    </a>
                    <div class="project-header">
                        ${guide.category ? `<span class="project-category">${escapeHTML(guide.category)}</span>` : ''}
                        <h1 class="project-title">${escapeHTML(guide.title)}</h1>
                        ${guide.subtitle ? `<p class="project-subtitle">${escapeHTML(guide.subtitle)}</p>` : ''}
                        ${meta ? `<div class="project-meta">${meta}</div>` : ''}
                    </div>
                </div>
            </section>
            ${imageSection}
            <section class="project-content">
                <div class="container">
                    <div class="content-grid">
                        <div class="main-content">
                            ${(() => {
                                let n = 1;
                                const hasReq = guide.requirements && guide.requirements.length;
                                const req = hasReq ? renderRequirements(guide, n++) : '';
                                const sectionsHtml = renderGuideSections(guide, n);
                                n += (guide.sections ? guide.sections.length : 0);
                                const procons = renderProsCons(guide, n);
                                return req + sectionsHtml + procons;
                            })()}
                        </div>
                        <aside class="sidebar">${renderGuideSidebar(guide)}</aside>
                    </div>
                </div>
            </section>`;
    }

    function renderGuideNotFound() {
        const root = document.getElementById('guide-root');
        if (!root) return;
        root.innerHTML = `<section class="project-hero"><div class="container"><a href="index.html#guias" class="back-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Volver a Guías</a><div class="project-header"><h1 class="project-title">Guía no encontrada</h1><p class="project-subtitle">La guía que buscas no existe o todavía no fue publicada.</p></div></div></section>`;
    }

    // ==========================================
    // INIT
    // ==========================================

    function init() {
        if (typeof GUIDES_DATA === 'undefined' && (!init._retries || init._retries < 10)) {
            init._retries = (init._retries || 0) + 1;
            setTimeout(init, 100);
            return;
        }

        if (document.getElementById('guide-root')) {
            const id = getGuideIdFromURL();
            const guide = getGuides().find(g => g.id === id);
            guide ? renderGuidePage(guide) : renderGuideNotFound();
        } else {
            renderGuideCards();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
