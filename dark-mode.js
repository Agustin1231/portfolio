// ==========================================
// DARK MODE TOGGLE
// Se inyecta solo en el navbar, sin modificar HTML existente
// ==========================================

(function () {
    'use strict';

    var STORAGE_KEY = 'portfolio-theme';

    // SVG icons
    var moonIcon = '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    var sunIcon = '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

    function getPreference() {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;
        // Respetar preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    function applyTheme(theme, withTransition) {
        if (withTransition) {
            document.documentElement.setAttribute('data-theme-transition', '');
            setTimeout(function () {
                document.documentElement.removeAttribute('data-theme-transition');
            }, 350);
        }

        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        localStorage.setItem(STORAGE_KEY, theme);
    }

    function createToggle() {
        var btn = document.createElement('button');
        btn.className = 'theme-toggle';
        btn.setAttribute('aria-label', 'Cambiar tema claro/oscuro');
        btn.setAttribute('type', 'button');
        btn.innerHTML = moonIcon + sunIcon;

        btn.addEventListener('click', function () {
            var current = document.documentElement.getAttribute('data-theme');
            var next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next, true);
        });

        // Insertar antes del lang-selector o del menu-toggle
        var navContainer = document.querySelector('.navbar .container');
        var langSelector = document.querySelector('.lang-selector');
        var menuToggle = document.querySelector('.menu-toggle');

        if (navContainer) {
            if (langSelector) {
                navContainer.insertBefore(btn, langSelector);
            } else if (menuToggle) {
                navContainer.insertBefore(btn, menuToggle);
            } else {
                navContainer.appendChild(btn);
            }
        }
    }

    // Aplicar tema inmediatamente (sin transición) para evitar flash
    applyTheme(getPreference(), false);

    // Crear botón cuando el DOM esté listo
    function init() {
        createToggle();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Escuchar cambios de preferencia del sistema
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
            if (!localStorage.getItem(STORAGE_KEY)) {
                applyTheme(e.matches ? 'dark' : 'light', true);
            }
        });
    }

})();
