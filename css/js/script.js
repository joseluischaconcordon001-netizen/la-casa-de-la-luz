// ============================================
// CONSENTIMIENTO · GOOGLE ANALYTICS
// CHACÓN CORDÓN · Fotografía
// ============================================

(function () {

    const consent = localStorage.getItem("analytics-consent");

    if (consent === "accepted") {
        loadGoogleAnalytics();
        return;
    }

    if (consent === "rejected") {
        return;
    }

    // Crear aviso de consentimiento
    const banner = document.createElement("div");
    banner.id = "consent-banner";

    banner.innerHTML = `
        <div class="consent-text">
            Utilizamos cookies y tecnologías similares para analizar
            el uso de esta web y mejorar la experiencia.
        </div>

        <div class="consent-buttons">
            <button id="consent-accept">Aceptar</button>
            <button id="consent-reject">Rechazar</button>
        </div>
    `;

    document.body.appendChild(banner);

    document.getElementById("consent-accept").addEventListener("click", function () {
        localStorage.setItem("analytics-consent", "accepted");
        banner.remove();
        loadGoogleAnalytics();
    });

    document.getElementById("consent-reject").addEventListener("click", function () {
        localStorage.setItem("analytics-consent", "rejected");
        banner.remove();
    });

})();


// ============================================
// GOOGLE ANALYTICS
// ============================================

function loadGoogleAnalytics() {

    const script = document.createElement("script");

    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-JWXFYPMHR0";

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());

    gtag("config", "G-JWXFYPMHR0");
}