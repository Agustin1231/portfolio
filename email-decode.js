// ==========================================
// DECODIFICADOR DE EMAIL (estilo Cloudflare)
// Convierte los enlaces ofuscados /cdn-cgi/l/email-protection#<hex>
// en enlaces mailto: reales, y muestra el email en los spans con
// data-cfemail. Funciona en local y en cualquier hosting (no depende
// de que Cloudflare inyecte su propio script). Mantiene la ofuscacion
// en el HTML para que los bots no cosechen el email directamente.
// ==========================================

(function () {
    'use strict';

    // El primer byte (2 hex) es la clave XOR; el resto es el email cifrado.
    function decodeEmail(encoded) {
        var email = '';
        var key = parseInt(encoded.substr(0, 2), 16);
        for (var i = 2; i < encoded.length; i += 2) {
            email += String.fromCharCode(parseInt(encoded.substr(i, 2), 16) ^ key);
        }
        return email;
    }

    function run() {
        // 1) Enlaces protegidos -> mailto:
        var links = document.querySelectorAll('a[href*="/cdn-cgi/l/email-protection#"]');
        for (var i = 0; i < links.length; i++) {
            var raw = links[i].getAttribute('href') || '';
            var idx = raw.indexOf('#');
            if (idx === -1) continue;
            try {
                links[i].setAttribute('href', 'mailto:' + decodeEmail(raw.slice(idx + 1)));
            } catch (e) {}
        }

        // 2) Texto "[email protected]" -> email real
        var labels = document.querySelectorAll('[data-cfemail]');
        for (var j = 0; j < labels.length; j++) {
            try {
                labels[j].textContent = decodeEmail(labels[j].getAttribute('data-cfemail'));
            } catch (e) {}
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
