// ============================================================
//  TOUT le contenu modifiable du site est ici.
//  Pour adapter le site à une vraie boulangerie, ne modifier que ce fichier
//  (+ les balises <title>/<meta> en haut de index.html, voir le commentaire là-bas,
//  + les pages mentions-legales.html et politique-confidentialite.html).
// ============================================================

const SITE = {
  name: "Maison Fournil",
  tagline: "Boulangerie artisanale à Lyon",

  // Bandeau affiché en haut de page tant que le site est une démo.
  // Mettre demo: false pour une vraie boulangerie (retire aussi la mention « avis fictifs »).
  demo: true,
  demoNotice: "Site de démonstration : Maison Fournil est une boulangerie fictive.",

  // Coordonnées FICTIVES :
  // - numéro dans la plage ARCEP réservée à la fiction (04 65 71 xx xx, décision n° 2018-0881) : il n'appartient à personne ;
  // - domaine .example réservé à la documentation (RFC 2606) : aucun email ne part chez un tiers ;
  // - rue réelle mais sans numéro, pour ne désigner aucun commerce existant.
  address: {
    street: "Rue Mercière",
    postalCode: "69002",
    city: "Lyon",
  },
  phone: "04 65 71 20 12",       // affiché
  phoneIntl: "+33465712012",     // utilisé pour le lien tel:
  email: "bonjour@maison-fournil.example",

  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },

  hero: {
    title: "Le bon pain, pétri chaque matin",
    subtitle:
      "Levain naturel, farines de la région et beurre de baratte : depuis 2012, nous façonnons à la main le pain et les viennoiseries du quartier.",
    image: "images/hero.jpg",
    imageAlt: "Pains de campagne aux graines et épis de blé sur un plan de travail fariné",
  },

  story: {
    title: "Notre histoire",
    paragraphs: [
      "Tout a commencé avec un four, un sac de farine et l'envie de faire du vrai pain. Aujourd'hui encore, notre équipe d'artisans commence à 3 heures du matin pour que tout soit prêt à l'ouverture.",
      "Nos farines viennent de moulins de la région, notre levain a plus de dix ans, et rien ne sort de notre fournil sans avoir été façonné à la main.",
    ],
    image: "images/histoire.jpg",
    imageAlt: "Boulanger tenant entre ses mains un pain de campagne tout juste sorti du four",
    // icon : "wheat", "clock" ou "heart"
    highlights: [
      { icon: "wheat", title: "Farines locales", text: "Blés de la région, moulus sur meule de pierre." },
      { icon: "clock", title: "Fait chaque matin", text: "Cuissons tout au long de la journée, rien de la veille." },
      { icon: "heart", title: "100 % fait maison", text: "Du levain aux crèmes, tout est préparé sur place." },
    ],
  },

  gallery: {
    title: "Nos produits",
    description:
      "Pains, viennoiseries et pâtisseries sortent du four tout au long de la journée. Faites glisser pour découvrir, cliquez pour agrandir.",
    // span (grille à partir de 768px) : "" = 1 case, "wide" = 2 colonnes, "tall" = 2 lignes, "wide tall" = 2x2
    items: [
      { title: "Baguettes & ficelles", desc: "Farine de meule, croûte craquante.", alt: "Baguettes rustiques farinées sur un fond sombre", url: "images/baguettes.jpg", span: "wide tall" },
      { title: "Croissants pur beurre", desc: "Feuilletage au beurre de baratte.", alt: "Deux croissants dorés saupoudrés de sucre glace", url: "images/croissants.jpg", span: "" },
      { title: "Pains au chocolat", desc: "Deux barres de chocolat noir.", alt: "Plateau de pains au chocolat en vitrine de boulangerie", url: "images/pains-au-chocolat.jpg", span: "" },
      { title: "Pain de campagne", desc: "Au levain naturel, longue fermentation.", alt: "Grosse miche de pain de campagne farinée sur une planche en bois", url: "images/pain-de-campagne.jpg", span: "tall" },
      { title: "Tartes aux fruits", desc: "Fruits de saison sur pâte sablée.", alt: "Tartelettes aux fruits rouges avec croisillons de pâte", url: "images/tartes-fruits.jpg", span: "" },
      { title: "Tarte au citron meringuée", desc: "Crème citron et meringue flambée.", alt: "Tarte au citron meringuée entamée, meringue dorée au chalumeau", url: "images/tarte-citron.jpg", span: "" },
      { title: "Brioche maison", desc: "Moelleuse, au beurre et aux œufs frais.", alt: "Brioche Nanterre dorée posée sur un linge blanc", url: "images/brioche.jpg", span: "" },
      { title: "Macarons", desc: "Coques fondantes, parfums du moment.", alt: "Macarons colorés empilés", url: "images/macarons.jpg", span: "" },
    ],
  },

  specialties: {
    title: "Nos spécialités",
    description: "Une sélection de nos incontournables. Prix indicatifs, susceptibles de varier.",
    items: [
      { name: "Baguette de campagne", description: "Farine de meule, pétrissage lent.", price: "1,30 €" },
      { name: "Pain de campagne au levain", description: "Seigle et blé, 800 g.", price: "4,80 €" },
      { name: "Croissant pur beurre", description: "Beurre de baratte, feuilletage maison.", price: "1,40 €" },
      { name: "Pain au chocolat", description: "Feuilletage maison, chocolat noir.", price: "1,50 €" },
      { name: "Tarte aux pralines", description: "La spécialité lyonnaise, part individuelle.", price: "3,90 €" },
      { name: "Éclair au café", description: "Crème pâtissière au café torréfié.", price: "3,50 €" },
    ],
  },

  reviews: {
    title: "Ils nous font confiance",
    // Pour une vraie boulangerie : n'afficher que des avis réels et vérifiables (art. L121-4 du Code de la consommation).
    items: [
      { name: "Claire M.", rating: 5, text: "Une baguette croustillante comme je les aime. Et l'accueil est toujours adorable." },
      { name: "Thomas R.", rating: 5, text: "Des croissants comme on n'en trouve plus : feuilletés, légers, vraiment au beurre." },
      { name: "Sophie L.", rating: 4, text: "Leur tarte aux pralines est délicieuse. Il y a parfois la queue le dimanche, mais ça vaut le coup." },
    ],
  },

  // Horaires au format "HH:MM". Laisser open/close vides pour un jour fermé.
  hours: [
    { day: "Lundi", open: "", close: "" },
    { day: "Mardi", open: "07:00", close: "19:30" },
    { day: "Mercredi", open: "07:00", close: "19:30" },
    { day: "Jeudi", open: "07:00", close: "19:30" },
    { day: "Vendredi", open: "07:00", close: "19:30" },
    { day: "Samedi", open: "07:00", close: "19:30" },
    { day: "Dimanche", open: "07:00", close: "13:00" },
  ],
  hoursSummary: "Du mardi au samedi 7h–19h30, dimanche 7h–13h. Fermé le lundi.",
};
