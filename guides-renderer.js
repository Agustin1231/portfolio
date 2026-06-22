// ==========================================
// GUIDES RENDERER
// Lee GUIDES_DATA (de guides-data.js) y renderiza las cards de #guias.
// Si no hay guías visibles, oculta la sección y su link del menú para que
// la web en producción no muestre un hueco vacío.
// ==========================================

(function () {
    'use strict';

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str == null ? '' : str;
        return div.innerHTML;
    }

    function isExternal(url) {
        return /^https?:\/\//i.test(url) || /\.pdf($|\?)/i.test(url);
    }

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

        const guides = (typeof GUIDES_DATA !== 'undefined' && Array.isArray(GUIDES_DATA))
            ? GUIDES_DATA.filter(g => g.visible !== false)
            : [];

        if (!guides.length) {
            renderEmptyState(grid);
            return;
        }

        grid.classList.remove('guides-grid--empty');
        guides.sort((a, b) => parseInt(a.number, 10) - parseInt(b.number, 10));

        grid.innerHTML = guides.map(guide => {
            const ext = isExternal(guide.url);
            const target = ext ? ' target="_blank" rel="noopener"' : '';
            return `
            <a class="project-card" href="${escapeHTML(guide.url || '#')}"${target} aria-label="${escapeHTML(guide.title)}">
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

    function init() {
        if (typeof GUIDES_DATA === 'undefined' && (!init._retries || init._retries < 10)) {
            init._retries = (init._retries || 0) + 1;
            setTimeout(init, 100);
            return;
        }
        renderGuideCards();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
