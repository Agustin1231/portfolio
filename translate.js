// ==========================================
// TRADUCCIÓN AUTOMÁTICA DEL PORTFOLIO v2
// Detecta idioma del navegador + selector manual
// ==========================================

(function () {
    'use strict';

    var LANGUAGES = {
        es: { code: 'ES', name: 'Español' },
        en: { code: 'EN', name: 'English' },
        pt: { code: 'PT', name: 'Português' },
        fr: { code: 'FR', name: 'Français' },
        de: { code: 'DE', name: 'Deutsch' },
        it: { code: 'IT', name: 'Italiano' },
        ja: { code: 'JA', name: '日本語' },
        ko: { code: 'KO', name: '한국어' },
        zh: { code: 'ZH', name: '中文' }
    };

    var gtReady = false;
    var pendingLang = null;

    // ==========================================
    // 1. INYECTAR ESTILOS
    // ==========================================

    function injectStyles() {
        var style = document.createElement('style');
        style.id = 'translate-styles';
        style.textContent = [
            /* Ocultar barra de Google Translate */
            '.goog-te-banner-frame { display: none !important; }',
            'body { top: 0 !important; position: static !important; }',
            '.skiptranslate { display: none !important; }',
            '#goog-gt-tt, .goog-te-balloon-frame { display: none !important; }',

            /* Selector */
            '.lang-selector { position: relative; margin-left: 1.5rem; z-index: 1001; }',

            '.lang-btn {',
            '  display: flex; align-items: center; gap: 0.4rem;',
            '  padding: 0.45rem 0.85rem;',
            '  background: var(--color-off-white); border: 1px solid var(--color-light-gray);',
            '  border-radius: 6px; cursor: pointer;',
            '  transition: all 0.25s ease;',
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

            /* Preservar fuentes */
            'body.translated-ltr, body.translated-rtl { font-family: var(--font-sans) !important; }',
            '.translated-ltr h1, .translated-ltr h2, .translated-ltr h3 { font-family: var(--font-serif) !important; }',
            'font[style] { display: inline !important; }',

            /* Mobile */
            '@media (max-width: 768px) {',
            '  .lang-selector { margin-left: 0; margin-right: 0.5rem; }',
            '  .lang-btn { padding: 0.35rem 0.65rem; font-size: 0.8rem; }',
            '  .lang-dropdown { right: -0.5rem; min-width: 160px; }',
            '}'
        ].join('\n');
        document.head.appendChild(style);
    }

    // ==========================================
    // 2. CREAR SELECTOR EN NAVBAR
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

        // Toggle dropdown
        wrapper.querySelector('.lang-btn').addEventListener('click', function (e) {
            e.stopPropagation();
            wrapper.classList.toggle('open');
        });

        document.addEventListener('click', function () {
            wrapper.classList.remove('open');
        });

        // Click en idioma
        wrapper.querySelector('.lang-dropdown').addEventListener('click', function (e) {
            var item = e.target.closest('.lang-option');
            if (!item) return;
            var lang = item.getAttribute('data-lang');
            selectLanguage(lang);
            wrapper.classList.remove('open');
        });
    }

    // ==========================================
    // 3. GOOGLE TRANSLATE SETUP
    // ==========================================

    function setupGoogleTranslate() {
        // Div oculto requerido
        var gtDiv = document.createElement('div');
        gtDiv.id = 'google_translate_element';
        gtDiv.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;pointer-events:none;';
        document.body.appendChild(gtDiv);

        // Callback global
        window.googleTranslateElementInit = function () {
            new google.translate.TranslateElement({
                pageLanguage: 'es',
                includedLanguages: Object.keys(LANGUAGES).join(','),
                autoDisplay: false,
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');

            waitForCombo(function () {
                gtReady = true;
                console.log('[Translate] Google Translate listo');

                if (pendingLang) {
                    doTranslate(pendingLang);
                    pendingLang = null;
                } else {
                    autoDetect();
                }
            });
        };

        // Cargar script
        var s = document.createElement('script');
        s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        s.onerror = function () {
            console.warn('[Translate] No se pudo cargar Google Translate');
        };
        document.head.appendChild(s);
    }

    function waitForCombo(callback) {
        var attempts = 0;
        var maxAttempts = 50;

        function check() {
            // Buscar el combo tanto en el DOM principal como dentro de iframes
            var combo = document.querySelector('.goog-te-combo');
            if (!combo) {
                // A veces Google Translate crea un iframe, buscar ahí
                var frames = document.querySelectorAll('iframe');
                for (var i = 0; i < frames.length; i++) {
                    try {
                        var frameCombo = frames[i].contentDocument.querySelector('.goog-te-combo');
                        if (frameCombo) { combo = frameCombo; break; }
                    } catch (e) { /* cross-origin, ignorar */ }
                }
            }
            if (combo) {
                callback();
            } else if (attempts < maxAttempts) {
                attempts++;
                setTimeout(check, 200);
            } else {
                console.warn('[Translate] Timeout esperando .goog-te-combo después de ' + maxAttempts + ' intentos');
                // Intentar de todas formas por si aparece después
                gtReady = true;
                if (pendingLang) {
                    setTimeout(function() { doTranslate(pendingLang); pendingLang = null; }, 1000);
                }
            }
        }
        check();
    }

    // ==========================================
    // 4. LÓGICA DE TRADUCCIÓN
    // ==========================================

    function selectLanguage(langCode) {
        if (langCode === 'es') {
            restoreOriginal();
            return;
        }
        if (gtReady) {
            doTranslate(langCode);
        } else {
            pendingLang = langCode;
            console.log('[Translate] GT no listo aún, pendiente:', langCode);
        }
    }

    function doTranslate(langCode) {
        var combo = document.querySelector('.goog-te-combo');
        if (!combo) {
            console.warn('[Translate] .goog-te-combo no encontrado, reintentando...');
            setTimeout(function () { doTranslate(langCode); }, 500);
            return;
        }

        // Establecer el valor
        combo.value = langCode;

        // Disparar el evento change de múltiples formas para máxima compatibilidad
        try {
            // Forma moderna
            combo.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        } catch (e) {
            // Fallback IE
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', true, true);
            combo.dispatchEvent(evt);
        }

        // Actualizar UI
        setTimeout(function () {
            updateDisplay(langCode);
        }, 1000);

        console.log('[Translate] Traduciendo a:', langCode);
    }

    function restoreOriginal() {
        // Limpiar TODAS las posibles cookies de googtrans
        var hostname = window.location.hostname;
        var parts = hostname.split('.');
        var cookiesToClear = [
            'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;',
            'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + hostname,
            'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + hostname
        ];

        if (parts.length >= 2) {
            var root = '.' + parts.slice(-2).join('.');
            cookiesToClear.push('googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + root);
        }

        for (var i = 0; i < cookiesToClear.length; i++) {
            document.cookie = cookiesToClear[i];
        }

        window.location.reload();
    }

    function autoDetect() {
        var cookieLang = getCookieLanguage();
        if (cookieLang && cookieLang !== 'es') {
            updateDisplay(cookieLang);
            return;
        }

        var browserLang = (navigator.language || navigator.userLanguage || 'es').split('-')[0].toLowerCase();
        if (browserLang !== 'es' && LANGUAGES[browserLang]) {
            console.log('[Translate] Idioma del navegador:', browserLang);
            doTranslate(browserLang);
        } else {
            updateDisplay('es');
        }
    }

    function getCookieLanguage() {
        var match = document.cookie.match(/googtrans=\/es\/(\w+)/);
        return match ? match[1] : null;
    }

    // ==========================================
    // 5. ACTUALIZAR UI
    // ==========================================

    function updateDisplay(langCode) {
        var currentSpan = document.querySelector('.lang-current');
        if (currentSpan && LANGUAGES[langCode]) {
            currentSpan.textContent = LANGUAGES[langCode].code;
        }

        var options = document.querySelectorAll('.lang-option');
        for (var i = 0; i < options.length; i++) {
            if (options[i].getAttribute('data-lang') === langCode) {
                options[i].classList.add('active');
            } else {
                options[i].classList.remove('active');
            }
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