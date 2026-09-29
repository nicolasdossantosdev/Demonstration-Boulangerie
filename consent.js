// Consentement aux cookies (recommandations CNIL, délibération n° 2020-091).
// Seul traceur non nécessaire du site : la carte Google Maps de la section « Horaires & accès ».
// - rien n'est chargé avant l'accord ;
// - « Tout refuser » est aussi visible et aussi simple que « Tout accepter » ;
// - le choix est conservé 6 mois maximum, puis le bandeau réapparaît ;
// - le lien « Gérer mes cookies » du pied de page permet de changer d'avis à tout moment.
// Le stockage du choix lui-même (localStorage) est strictement nécessaire : il ne demande pas de consentement.

(() => {
  const KEY = "choix-cookies";
  const MAX_AGE = 1000 * 60 * 60 * 24 * 182; // 6 mois

  const read = () => {
    try {
      const c = JSON.parse(localStorage.getItem(KEY));
      return c && Date.now() - c.date < MAX_AGE ? c : null;
    } catch {
      return null;
    }
  };

  // ---------- Carte Google Maps (présente seulement sur la page d'accueil) ----------
  const map = document.getElementById("map");
  const placeholder = document.getElementById("map-placeholder");
  const applyMaps = (allowed) => {
    if (!map) return;
    if (allowed) {
      if (map.getAttribute("src") !== map.dataset.src) map.src = map.dataset.src;
    } else {
      map.removeAttribute("src");
    }
    map.hidden = !allowed;
    placeholder.hidden = allowed;
  };

  // ---------- Bandeau ----------
  const banner = document.createElement("div");
  banner.className = "consent";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-labelledby", "consent-title");
  banner.hidden = true;
  banner.innerHTML = `
    <p class="consent__title" id="consent-title">Vos choix sur les cookies</p>
    <p>Un seul service de ce site dépose des cookies : la <strong>carte Google Maps</strong> du plan d'accès.
      Elle reste masquée tant que vous ne l'avez pas acceptée. Votre choix est conservé 6 mois.
      <a href="politique-confidentialite.html#cookies">En savoir plus</a></p>
    <div class="consent__details" hidden>
      <label class="consent__option">
        <input type="checkbox" id="consent-maps">
        <span><strong>Carte Google Maps</strong> (Google) : afficher le plan d'accès interactif.</span>
      </label>
      <button type="button" class="btn btn--primary" data-consent="save">Enregistrer mes choix</button>
    </div>
    <div class="consent__actions">
      <button type="button" class="btn btn--primary" data-consent="refuse">Tout refuser</button>
      <button type="button" class="btn btn--primary" data-consent="accept">Tout accepter</button>
      <button type="button" class="btn btn--outline" data-consent="customize">Personnaliser</button>
    </div>`;
  document.body.append(banner);
  const details = banner.querySelector(".consent__details");
  const mapsBox = banner.querySelector("#consent-maps");

  const save = (maps) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ maps, date: Date.now() }));
    } catch {
      /* navigation privée : le choix vaut pour la page en cours */
    }
    applyMaps(maps);
    banner.hidden = true;
  };

  const open = (withDetails) => {
    mapsBox.checked = !!read()?.maps;
    details.hidden = !withDetails;
    banner.hidden = false;
    (withDetails ? mapsBox : banner.querySelector(".consent__actions button")).focus();
  };

  banner.addEventListener("click", (e) => {
    const action = e.target.closest("[data-consent]")?.dataset.consent;
    if (action === "accept") save(true);
    if (action === "refuse") save(false);
    if (action === "save") save(mapsBox.checked);
    if (action === "customize") {
      details.hidden = false;
      mapsBox.focus();
    }
  });

  // « Gérer mes cookies » (pied de page) et « Afficher la carte » (encart à la place de la carte)
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-consent-open]")) open(true);
    if (e.target.closest("[data-consent-maps]")) save(true);
  });

  const choice = read();
  applyMaps(!!choice?.maps);
  if (!choice) banner.hidden = false;
})();
