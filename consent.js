/*
  Author: Nicolas Dos Santos
  Created: 2026

  File: consent.js
  Description: Cookie consent for the Google Maps embed.

  © Nicolas Dos Santos. All rights reserved.
*/

(() => {
  const KEY = "choix-cookies";
  const MAX_AGE = 1000 * 60 * 60 * 24 * 182;

  const read = () => {
    try {
      const c = JSON.parse(localStorage.getItem(KEY));
      return c && Date.now() - c.date < MAX_AGE ? c : null;
    } catch {
      return null;
    }
  };

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
    <div class="consent__details">
      <label class="consent__option">
        <input type="checkbox" id="consent-maps">
        <span><strong>Carte Google Maps</strong> (Google) : afficher le plan d'accès interactif.</span>
      </label>
      <button type="button" class="btn btn--primary" data-consent="save">Enregistrer mes choix</button>
    </div>
    <div class="consent__actions">
      <button type="button" class="btn btn--primary" data-consent="refuse">Tout refuser</button>
      <button type="button" class="btn btn--primary" data-consent="accept">Tout accepter</button>
    </div>`;
  document.body.append(banner);
  const mapsBox = banner.querySelector("#consent-maps");

  const save = (maps) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ maps, date: Date.now() }));
    } catch {
    }
    applyMaps(maps);
    const hadFocus = banner.contains(document.activeElement);
    banner.hidden = true;
    if (hadFocus) opener?.focus();
  };

  let opener;
  const open = () => {
    mapsBox.checked = !!read()?.maps;
    banner.hidden = false;
    mapsBox.focus();
  };

  banner.addEventListener("click", (e) => {
    const action = e.target.closest("[data-consent]")?.dataset.consent;
    if (action === "accept") save(true);
    if (action === "refuse") save(false);
    if (action === "save") save(mapsBox.checked);
  });

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-consent-open]");
    if (trigger) {
      opener = trigger;
      open();
    }
    if (e.target.closest("[data-consent-maps]")) save(true);
  });

  const choice = read();
  applyMaps(!!choice?.maps);
  if (!choice) banner.hidden = false;
})();
