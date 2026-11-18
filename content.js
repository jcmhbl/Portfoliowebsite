/* ============================================================
   TOUS LES TEXTES DU SITE SONT ICI. Modifie librement les valeurs
   entre guillemets, en français (fr) et en anglais (en).
   Pour ajouter un article ou une création : ajoute un bloc
   { title: "...", text: "...", href: "https://..." } dans la liste.
   ============================================================ */
const SITE = {
  email: "djamila.chaibi.pro@gmail.com",
  // À remplacer par tes vraies URL
  links: { linkedin: "#", github: "#", linktree: "#" },
  // Destination de chaque entrée du menu ("#" = page pas encore créée)
  navLinks: { data: "#", articles: "#articles", creations: "#creations", hobbies: "#", about: "about.html", reco: "#", contact: "#contact" },

  fr: {
    name: "Djamila Chaïbi",
    h1: "Tisser des liens, j’en fais ma méthode : entre les métiers, les outils et les individus.",
    role: "Chargée de projet digital, entre communication, data et coordination.",
    cta1: "Voir mon parcours",
    cta2: "Me contacter",
    nav: { data: "Data", articles: "Articles", creations: "Créations", hobbies: "Hobbies", about: "À propos", reco: "Recommandations", contact: "Contact" },
    statsTitle: "Quelques repères",
    stats: [
      ["50+", "sites web pays gérés chez Coface"],
      ["30+", "filiales internationales accompagnées"],
      ["150+", "pays suivis dans un tableau de leads"]
    ],
    articlesTitle: "Articles",
    creationsTitle: "Créations",
    empty: "Les premiers contenus arrivent bientôt.",
    articles: [],
    creations: [],
    timelineTitle: "Mon parcours",
    timeline: [
      ["2020", "Gestionnaire de la communication", "Niki Solidarité, Sénégal"],
      ["2021", "Chargée marketing et communication", "BOGO Home, Genève"],
      ["2023", "Chargée de communication digitale", "Civic Fab, Paris"],
      ["2023-2024", "Alternance en communication digitale", "Coface, Bois-Colombes"],
      ["2025", "Consultante data et communication", "Freelance, Île-de-France"]
    ],
    contactTitle: "Me contacter",
    contactText: "Un projet, une opportunité, une question ? Écris-moi.",
    linkedin: "LinkedIn", github: "GitHub", linktree: "Linktree"
  },

  en: {
    name: "Djamila Chaïbi",
    h1: "Linking is my method: between professions, tools and people.",
    role: "Digital project manager, working across communication, data and coordination.",
    cta1: "See my background",
    cta2: "Get in touch",
    nav: { data: "Data", articles: "Articles", creations: "Creations", hobbies: "Hobbies", about: "About", reco: "Recommendations", contact: "Contact" },
    statsTitle: "At a glance",
    stats: [
      ["50+", "country websites managed at Coface"],
      ["30+", "international subsidiaries supported"],
      ["150+", "countries tracked in a leads dashboard"]
    ],
    articlesTitle: "Articles",
    creationsTitle: "Creations",
    empty: "First pieces coming soon.",
    articles: [],
    creations: [],
    timelineTitle: "My background",
    timeline: [
      ["2020", "Communication manager", "Niki Solidarité, Senegal"],
      ["2021", "Marketing and communication officer", "BOGO Home, Geneva"],
      ["2023", "Digital communication officer", "Civic Fab, Paris"],
      ["2023-2024", "Digital communication apprenticeship", "Coface, Bois-Colombes"],
      ["2025", "Data and communication consultant", "Freelance, Île-de-France"]
    ],
    contactTitle: "Get in touch",
    contactText: "A project, an opportunity, a question? Write to me.",
    linkedin: "LinkedIn", github: "GitHub", linktree: "Linktree"
  }
};

/* ============================================================
   PAGE À PROPOS (about.html) - à relire et réécrire avec tes mots
   Frise : un bloc par étape. "key: true" = étape mise en avant
   (le Master), ouverte par défaut.
   Choix de dates : seules les années figurent, le Master sert d’ancre.
   ============================================================ */
SITE.cvFile = "cv-djamila-chaibi.pdf"; // dépose ton CV (sans numéro de téléphone) sous ce nom

SITE.fr.about = {
  title: "À propos",
  intro: "Diplômée d’un Master Information-Communication, spécialité Données et société, je travaille à la jonction de la communication digitale, de la data et de la coordination de projets web.",
  howTitle: "Comment je travaille",
  how: [
    "Je suis curieuse : j’aime comprendre un sujet en profondeur avant de le raconter.",
    "Je traduis : je rends les chiffres et les sujets techniques lisibles pour celles et ceux qui décident.",
    "Je m’adapte : changer de contexte, de pays ou d’outil me stimule."
  ],
  tlTitle: "Mon parcours",
  tlHint: "Clique sur une étape pour la déplier.",
  tl: [
    { when: "2020-2021", title: "Premières expériences en communication", place: "Niki Solidarité (Sénégal), BOGO Home (Genève)",
      points: ["Gestion de réseaux sociaux, newsletters et communiqués de presse", "Calendrier éditorial et référencement naturel des contenus", "Prospection et partenariats pour développer la notoriété"] },
    { when: "2021 et 2022", title: "Deux licences", place: "INALCO et Sorbonne Nouvelle",
      points: ["Licence LLCER Arabe oriental et Communication, obtenue en 2021 avec mention", "Licence Lettres modernes et Information-Communication, obtenue en 2022 avec mention"] },
    { when: "2023", title: "Chargée de communication digitale", place: "Civic Fab, Paris",
      points: ["Stratégie de communication, veille et rédaction d’articles", "Coordination d’événements", "Analyse des campagnes numériques pour ajuster les actions"] },
    { when: "2023-2024", title: "Alternance en communication digitale", place: "Coface, Bois-Colombes",
      points: ["Refonte et gestion de sites web multi-filiales : 50+ sites pays (Ibexa, WordPress)", "SEO et web analytics avec GA4 et Search Console", "Conformité RGPD et gestion des cookies avec Didomi", "Formation des correspondants internationaux aux outils digitaux", "Tableau de suivi des leads sur 150+ pays (Excel)", "Contenus multimédias : articles, vidéos, podcasts"] },
    { when: "2024", title: "Master 2 Information-communication, Données et société", place: "Université Paris Nanterre, obtenu avec mention", key: true,
      points: ["Réalisé en alternance chez Coface", "Outils vus : R, RStudio, Jamovi, Tableau, Python, SQL"] },
    { when: "Depuis 2025", title: "Consultante data et communication, et formation Data Analyst", place: "Freelance, Île-de-France, et OpenClassrooms",
      points: ["Stratégie digitale, SEO, suivi de performance et appui web (HTML/CSS)", "Formation Data Analyst : modélisation, SQL, dashboards, nettoyage de données"] }
  ],
  cvTitle: "Mon CV",
  cvText: "Une page résume l’essentiel : parcours, compétences, outils.",
  cvBtn: "Télécharger mon CV (PDF)",
  certTitle: "Certifications",
  certEmpty: "Les certifications seront ajoutées ici.",
  certs: [],
  consultTitle: "Missions de conseil",
  consultText: "Depuis octobre 2025, je suis consultante en data et communication : stratégie digitale, SEO, analyse de performance et appui technique web."
};

SITE.en.about = {
  title: "About",
  intro: "I hold a Master’s degree in Information and Communication (Data and Society), and I work where digital communication, data and web project coordination meet.",
  howTitle: "How I work",
  how: [
    "I’m curious: I like to understand a topic in depth before telling its story.",
    "I translate: I make figures and technical topics readable for the people who decide.",
    "I adapt: a new context, country or tool energises me."
  ],
  tlTitle: "My background",
  tlHint: "Click a step to open it.",
  tl: [
    { when: "2020-2021", title: "First communication roles", place: "Niki Solidarité (Senegal), BOGO Home (Geneva)",
      points: ["Social media, newsletters and press releases", "Editorial calendar and SEO for content", "Prospecting and partnerships to build awareness"] },
    { when: "2021 and 2022", title: "Two bachelor’s degrees", place: "INALCO and Sorbonne Nouvelle",
      points: ["Bachelor’s in Oriental Arabic and Communication, 2021, with honours", "Bachelor’s in Modern Literature and Information-Communication, 2022, with honours"] },
    { when: "2023", title: "Digital communication officer", place: "Civic Fab, Paris",
      points: ["Communication strategy, monitoring and article writing", "Event coordination", "Campaign analysis to adjust actions"] },
    { when: "2023-2024", title: "Digital communication apprenticeship", place: "Coface, Bois-Colombes",
      points: ["Redesign and management of multi-subsidiary websites: 50+ country sites (Ibexa, WordPress)", "SEO and web analytics with GA4 and Search Console", "GDPR compliance and cookie management with Didomi", "Training international correspondents on digital tools", "Leads tracking dashboard covering 150+ countries (Excel)", "Multimedia content: articles, videos, podcasts"] },
    { when: "2024", title: "Master’s in Information-Communication, Data and Society", place: "Université Paris Nanterre, with honours", key: true,
      points: ["Completed as an apprenticeship at Coface", "Tools covered: R, RStudio, Jamovi, Tableau, Python, SQL"] },
    { when: "Since 2025", title: "Data and communication consultant, and Data Analyst training", place: "Freelance, Île-de-France, and OpenClassrooms",
      points: ["Digital strategy, SEO, performance tracking and web support (HTML/CSS)", "Data Analyst training: modelling, SQL, dashboards, data cleaning"] }
  ],
  cvTitle: "My CV",
  cvText: "One page with the essentials: background, skills, tools.",
  cvBtn: "Download my CV (PDF)",
  certTitle: "Certifications",
  certEmpty: "Certifications will be added here.",
  certs: [],
  consultTitle: "Consulting",
  consultText: "Since October 2025, I work as a data and communication consultant: digital strategy, SEO, performance analysis and web technical support."
};
