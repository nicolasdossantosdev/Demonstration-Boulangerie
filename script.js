/*
  Author: Nicolas Dos Santos
  Created: 2026

  File: script.js
  Description: Fills the page from config.js; menu, gallery and animations.

  © Nicolas Dos Santos. All rights reserved.
*/

(() => {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

  const { address } = SITE;
  SITE.fullAddress = `${address.street}, ${address.postalCode} ${address.city}`;

  const ICONS = {
    wheat: '<path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    heart: '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',
    star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
    menu: '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    "chevron-left": '<path d="m15 18-6-6 6-6"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
    mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

  const get = (path) => path.split(".").reduce((o, k) => o[k], SITE);
  $$("[data-text]").forEach((el) => (el.textContent = get(el.dataset.text)));
  $$("[data-tel]").forEach((a) => (a.href = `tel:${SITE.phoneIntl}`));
  $$("[data-mail]").forEach((a) => (a.href = `mailto:${SITE.email}`));
  $$("[data-social]").forEach((a) => (a.href = SITE.social[a.dataset.social]));
  $("#year").textContent = new Date().getFullYear();

  if (SITE.demo) {
    $("#demo-notice").textContent = SITE.demoNotice;
    $("#demo-notice").hidden = false;
    $("#reviews-note").hidden = false;
    $(".socials").hidden = true;
  }

  Object.assign($("#story-img"), { src: SITE.story.image, alt: SITE.story.imageAlt });

  $("#story-text").insertAdjacentHTML("beforeend", SITE.story.paragraphs.map((p) => `<p>${esc(p)}</p>`).join(""));
  $("#highlights").innerHTML = SITE.story.highlights
    .map((h) => `<div class="highlight reveal">${icon(h.icon, "icon icon--lg")}<div><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></div></div>`)
    .join("");

  const spanClass = (span) => span.split(" ").filter(Boolean).map((s) => `tile--${s}`).join(" ");
  $("#gallery").innerHTML = SITE.gallery.items
    .map(
      (item, i) => `
      <button type="button" class="tile ${spanClass(item.span)}" data-index="${i}" aria-label="Agrandir : ${esc(item.title)}">
        <img src="${esc(item.url)}" alt="${esc(item.alt)}" loading="lazy" draggable="false">
        <span class="tile__caption"><span class="tile__title">${esc(item.title)}</span><span class="tile__desc">${esc(item.desc)}</span></span>
      </button>`,
    )
    .join("");

  $("#specialties").innerHTML = SITE.specialties.items
    .map((s) => `<article class="card reveal"><div class="card__head"><h3>${esc(s.name)}</h3><span class="price">${esc(s.price)}</span></div><p>${esc(s.description)}</p></article>`)
    .join("");

  $("#reviews").innerHTML = SITE.reviews.items
    .map(
      (r) => `
      <figure class="review reveal">
        <div class="stars" role="img" aria-label="Note : ${r.rating} sur 5">
          ${Array.from({ length: 5 }, (_, n) => icon("star", n < r.rating ? "icon star star--on" : "icon star")).join("")}
        </div>
        <blockquote>« ${esc(r.text)} »</blockquote>
        <figcaption>${esc(r.name)}</figcaption>
      </figure>`,
    )
    .join("");

  const h = (t) => t.replace(/^0/, "").replace(":00", "h").replace(":", "h");
  $("#hours").innerHTML = SITE.hours
    .map((d) => `<tr><th scope="row">${esc(d.day)}</th>${d.open ? `<td>${h(d.open)} – ${h(d.close)}</td>` : `<td class="closed">Fermé</td>`}</tr>`)
    .join("");
  $("#map").dataset.src = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.fullAddress)}&z=16&output=embed`;
  $("#map").title = `Plan d'accès à ${SITE.name}`;

  $$("svg[data-icon]").forEach((el) => (el.outerHTML = icon(el.dataset.icon)));

  const burger = $(".burger");
  const nav = $("#nav");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    burger.innerHTML = icon(open ? "x" : "menu");
  };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && nav.classList.contains("is-open") && (setMenu(false), burger.focus()));

  const track = $("#gallery");
  let dragStartX = 0, startScroll = 0, dragging = false, moved = false;
  track.addEventListener("pointerdown", (e) => {
    moved = false;
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    dragging = true;
    dragStartX = e.clientX;
    startScroll = track.scrollLeft;
  });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 5) {
      moved = true;
      track.classList.add("is-dragging");
    }
    track.scrollLeft = startScroll - dx;
  });
  window.addEventListener("pointerup", () => {
    dragging = false;
    track.classList.remove("is-dragging");
  });

  const prev = $("#slider-prev");
  const next = $("#slider-next");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const slide = (dir) =>
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: reduceMotion.matches ? "auto" : "smooth" });
  const updateArrows = () => {
    prev.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
    $(".slider__controls").hidden = prev.disabled && next.disabled;
  };
  prev.addEventListener("click", () => slide(-1));
  next.addEventListener("click", () => slide(1));
  track.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows);
  updateArrows();

  const lightbox = $("#lightbox");
  track.addEventListener("click", (e) => {
    const tile = e.target.closest(".tile");
    if (!tile || moved) return;
    const item = SITE.gallery.items[tile.dataset.index];
    Object.assign($("#lightbox-img"), { src: item.url, alt: item.alt });
    $("#lightbox-caption").textContent = `${item.title} — ${item.desc}`;
    lightbox.showModal();
  });
  lightbox.addEventListener("click", (e) => {
    if (!e.target.closest("#lightbox-img, #lightbox-caption")) lightbox.close();
  });

  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && (en.target.classList.add("is-visible"), io.unobserve(en.target))),
    { threshold: 0.15 },
  );
  $$(".reveal").forEach((el) => io.observe(el));
})();
