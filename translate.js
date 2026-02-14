// ==========================================
// TRADUCCION AUTOMATICA DEL PORTFOLIO v4
// Sin reload - solo via combo de Google Translate
// ==========================================

(function () {
    'use strict';

    var LANGUAGES = {
        es: { code: 'ES', name: 'Espa\u00f1ol' },
        en: { code: 'EN', name: 'English' },
        pt: { code: 'PT', name: 'Portugu\u00eas' },
        fr: { code: 'FR', name: 'Fran\u00e7ais' },
        de: { code: 'DE', name: 'Deutsch' },
        it: { code: 'IT', name: 'Italiano' },
        ja: { code: 'JA', name: '\u65e5\u672c\u8a9e' },
        ko: { code: 'KO', name: '\ud55c\uad6d\uc5b4' },
        zh: { code: 'ZH', name: '\u4e2d\u6587' }
    };

    var gtReady = false;
    var pendingLang = null;

    // ==========================================
    // ESTILOS
    // ==========================================

    function injectStyles() {
        var style = document.createElement('style');
        style.id = 'translate-styles';
        style.textContent = [
            '.goog-te-banner-frame { display: none !important; }',
            'body { top: 0 !important; position: static !important; }',
            '#goog-gt-tt, .goog-te-balloon-frame { display: none !important; }',
            '#google_translate_element { position: absolute; top: -9999px; left: -9999px; width: 0; height: 0; overflow: hidden; }',
            '.skiptranslate { display: none !important; }',

            '.lang-selector { position: relative; margin-left: 1.5rem; z-index: 1001; }',
            '.lang-btn {',
            '  display: flex; align-items: center; gap: 0.4rem;',
            '  padding: 0.45rem 0.85rem;',
            '  background: var(--color-off-white); border: 1px solid var(--color-light-gray);',
            '  border-radius: 6px; cursor: pointer; transition: all 0.25s ease;',
            '  font-family: var(--font-sans); font-size: 0.85rem;',
            '  font-weight: 600; color: var(--color-charcoal); letter-spacing: 0.5px;',
            '}',
            '.lang-btn:hover { border-color: var(--color-gray); background: var(--color-white); box-shadow: var(--shadow-sm); }',
            '.lang-icon, .lang-chevron { color: var(--color-dark-gray); flex-shrink: 0; }',
            '.lang-chevron { transition: transform 0.25s ease; }',
            '.lang-selector.open .lang-chevron { transform: rotate(180deg); }',

            '.lang-dropdown {',
            '  position: absolute; top: calc(100% + 8px); right: 0;',
            '  min-width: 180px; background: var(--color-white);',
            '  border: 1px solid var(--color-light-gray); border-radius: 8px;',
            '  box-shadow: var(--shadow-lg);',
            '  opacity: 0; visibility: hidden; transform: translateY(-8px);',
            '  transition: all 0.25s ease; overflow: hidden; padding: 0.35rem;',
            '}',
            '.lang-selector.open .lang-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }',

            '.lang-option {',
            '  display: flex; align-items: center; gap: 0.75rem;',
            '  width: 100%; padding: 0.6rem 0.85rem;',
            '  border: none; background: none; cursor: pointer;',
            '  transition: all 0.2s ease; border-radius: 5px;',
            '  font-family: var(--font-sans); text-align: left;',
            '}',
            '.lang-option:hover { background: var(--color-off-white); }',
            '.lang-option.active { background: var(--color-blue-50); }',
            '.lang-option-code { font-size: 0.8rem; font-weight: 700; color: var(--color-navy); min-width: 24px; letter-spacing: 0.5px; }',
            '.lang-option-name { font-size: 0.9rem; color: var(--color-dark-gray); }',
            '.lang-option.active .lang-option-name { color: var(--color-blue-600); font-weight: 500; }',

            'body.translated-ltr, body.translated-rtl { font-family: var(--font-sans) !important; }',
            '.translated-ltr h1, .translated-ltr h2, .translated-ltr h3 { font-family: var(--font-serif) !important; }',

            '@media (max-width: 768px) {',
            '  .lang-selector { margin-left: 0; margin-right: 0.5rem; }',
            '  .lang-btn { padding: 0.35rem 0.65rem; font-size: 0.8rem; }',
            '  .lang-dropdown { right: -0.5rem; min-width: 160px; }',
            '}'
        ].join('\n');
        document.head.appendChild(style);
    }

    // ==========================================
    // SELECTOR UI
    // ==========================================

    function createSelector() {
        var keys = Object.keys(LANGUAGES);
        var optionsHTML = '';
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            optionsHTML +=
                '<button class="lang-option" data-lang="' + k + '" type="button">' +
                '<span class="lang-option-code">' + LANGUAGES[k].code + '</span>' +
                '<span class="lang-option-name">' + LANGUAGES[k].name + '</span>' +
                '</button>';
        }

        var wrapper = document.createElement('div');
        wrapper.className = 'lang-selector';
        wrapper.innerHTML =
            '<button class="lang-btn" aria-label="Cambiar idioma" type="button">' +
            '<svg class="lang-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>' +
            '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' +
            '</svg>' +
            '<span class="lang-current">ES</span>' +
            '<svg class="lang-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<polyline points="6 9 12 15 18 9"/>' +
            '</svg>' +
            '</button>' +
            '<div class="lang-dropdown">' + optionsHTML + '</div>';

        var navContainer = document.querySelector('.navbar .container');
        var menuToggle = document.querySelector('.menu-toggle');
        if (navContainer && menuToggle) {
            navContainer.insertBefore(wrapper, menuToggle);
        } else if (navContainer) {
            navContainer.appendChild(wrapper);
        }

        wrapper.querySelector('.lang-btn').addEventListener('click', function (e) {
            e.stopPropagation();
            wrapper.classList.toggle('open');
        });
        document.addEventListener('click', function () {
            wrapper.classList.remove('open');
        });
        wrapper.querySelector('.lang-dropdown').addEventListener('click', function (e) {
            var item = e.target.closest('.lang-option');
            if (!item) return;
            selectLanguage(item.getAttribute('data-lang'));
            wrapper.classList.remove('open');
        });
    }

    // ==========================================
    // GOOGLE TRANSLATE SETUP
    // ==========================================

    function setupGoogleTranslate() {
        var gtDiv = document.createElement('div');
        gtDiv.id = 'google_translate_element';
        document.body.insertBefore(gtDiv, document.body.firstChild);

        window.googleTranslateElementInit = function () {
            new google.translate.TranslateElement({
                pageLanguage: 'es',
                includedLanguages: Object.keys(LANGUAGES).join(','),
                autoDisplay: false
            }, 'google_translate_element');

            waitForCombo(function (combo) {
                gtReady = true;
                console.log('[Translate] GT listo. Opciones:', combo.options.length);

                // Si habia un idioma pendiente (usuario hizo click antes de GT ready)
                if (pendingLang) {
                    translateViaCombo(pendingLang);
                    pendingLang = null;
                }
                // NO hay autoDetect con reload - solo el selector manual
            });
        };

        var s = document.createElement('script');
        s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(s);
    }

    function waitForCombo(callback) {
        var attempts = 0;
        function check() {
            var combo = document.querySelector('select.goog-te-combo');
            if (combo && combo.options.length > 1) {
                callback(combo);
            } else if (attempts < 80) {
                attempts++;
                setTimeout(check, 150);
            }
        }
        check();
    }

    // ==========================================
    // TRADUCCION - SOLO VIA COMBO, SIN RELOAD
    // ==========================================

    function selectLanguage(langCode) {
        if (langCode === 'es') {
            restoreOriginal();
            return;
        }

        if (gtReady) {
            translateViaCombo(langCode);
        } else {
            pendingLang = langCode;
            console.log('[Translate] Pendiente:', langCode);
        }
    }

    function translateViaCombo(langCode) {
        var combo = document.querySelector('select.goog-te-combo');
        if (!combo) {
            console.warn('[Translate] Combo no encontrado');
            return;
        }

        combo.value = langCode;

        // Disparar change de todas las formas posibles
        // 1. onchange directo (esto es lo que GT bindea internamente)
        if (typeof combo.onchange === 'function') {
            combo.onchange();
        }

        // 2. createEvent legacy
        try {
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', true, true);
            combo.dispatchEvent(evt);
        } catch (e) {}

        // 3. Event constructor moderno
        try {
            combo.dispatchEvent(new Event('change', { bubbles: true }));
        } catch (e) {}

        updateDisplay(langCode);
        console.log('[Translate] Traducido a:', langCode);
    }

    function restoreOriginal() {
        var combo = document.querySelector('select.goog-te-combo');
        if (combo) {
            combo.value = '';
            combo.selectedIndex = 0;

            if (typeof combo.onchange === 'function') {
                combo.onchange();
            }
            try {
                var evt = document.createEvent('HTMLEvents');
                evt.initEvent('change', true, true);
                combo.dispatchEvent(evt);
            } catch (e) {}
        }

        // Limpiar cookies por si acaso
        clearGoogTransCookies();
        updateDisplay('es');

        // Si GT no restauro despues de 1s, forzar reload limpio (unica vez)
        setTimeout(function () {
            if (document.body.classList.contains('translated-ltr') ||
                document.body.classList.contains('translated-rtl')) {
                clearGoogTransCookies();
                window.location.reload();
            }
        }, 1000);
    }

    function clearGoogTransCookies() {
        var hostname = window.location.hostname;
        var parts = hostname.split('.');
        var domains = [hostname, '.' + hostname];
        if (parts.length >= 2) {
            domains.push('.' + parts.slice(-2).join('.'));
        }
        for (var i = 0; i < domains.length; i++) {
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + domains[i];
        }
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }

    // ==========================================
    // UI UPDATE
    // ==========================================

    function updateDisplay(langCode) {
        var currentSpan = document.querySelector('.lang-current');
        if (currentSpan && LANGUAGES[langCode]) {
            currentSpan.textContent = LANGUAGES[langCode].code;
        }
        var options = document.querySelectorAll('.lang-option');
        for (var i = 0; i < options.length; i++) {
            options[i].classList.toggle('active', options[i].getAttribute('data-lang') === langCode);
        }
    }

    // ==========================================
    // INIT
    // ==========================================

    function init() {
        injectStyles();
        createSelector();
        updateDisplay('es');
        setupGoogleTranslate();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
