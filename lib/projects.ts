export type Project = {
  slug: string;
  name: string;
  label: string;
  status: string;
  title: string;
  description: string;
  url: string;
  logo: string;
  shot: string;
  tone: "dark" | "light";
  facts: [string, string][];
  scope: string[];
  challenge: string;
  response: string;
};

export const projects: Project[] = [
  {
    slug: "the-tag",
    logo: "/clients/the-tag.svg",
    shot: "/shots/the-tag.webp",
    name: "The Tag",
    label: "SaaS · Restauration",
    status: "EN LIGNE",
    title: "Le service en salle déclenché d’un simple geste",
    description:
      "Une solution NFC pour appeler un serveur, demander l’addition, commander et piloter l’activité depuis un back-office complet.",
    url: "https://thetagpoint.com/",
    tone: "dark",
    facts: [
      ["Produit", "SaaS + NFC"],
      ["Marché", "France"],
      ["Priorité", "Adoption"],
      ["Surface", "Écosystème"],
    ],
    scope: ["Expérience SaaS", "Back-office", "Parcours NFC", "Site web"],
    challenge:
      "Présenter deux offres de restauration, du matériel et un abonnement sans compliquer l’essai ni le déploiement en établissement.",
    response:
      "Deux parcours métiers distincts, une démonstration en étapes et une lecture coordonnée du service client, du matériel et du tableau de bord.",
  },
  {
    slug: "bastp",
    logo: "/clients/bastp.webp",
    shot: "/shots/bastp.webp",
    name: "BASTP",
    label: "Plateforme B2B · Matching IA",
    status: "EN LIGNE",
    title: "La sous-traitance industrielle algérienne enfin connectée",
    description:
      "Un produit national qui rassemble entreprises, opportunités ciblées, annuaire qualifié et matching intelligent.",
    url: "https://bastp.indevtech.dev/",
    tone: "light",
    facts: [
      ["Produit", "Plateforme B2B"],
      ["Marché", "Algérie"],
      ["Priorité", "Matching"],
      ["Surface", "App web"],
    ],
    scope: ["Architecture produit", "Next.js", "Recherche", "Matching IA"],
    challenge:
      "Rendre immédiatement utiles un grand annuaire industriel et un flux d’opportunités, pour des entreprises aux profils et besoins très différents.",
    response:
      "Un moteur de découverte centré sur la recherche, des opportunités lisibles en direct et un matching IA intégré au parcours d’adhésion.",
  },
  {
    slug: "wajed",
    logo: "/clients/wajed.webp",
    shot: "/shots/wajed.webp",
    name: "Wajed",
    label: "Super app · Marketplace",
    status: "EN LIGNE",
    title: "La super app des services et loisirs en Algérie",
    description:
      "Une plateforme qui réunit services à domicile, expériences, mobilité et avantages dans une présence digitale cohérente.",
    url: "https://wajed-algerie.com/",
    tone: "light",
    facts: [
      ["Produit", "Super app"],
      ["Marché", "Algérie"],
      ["Priorité", "Découverte"],
      ["Surface", "Landing web"],
    ],
    scope: ["Product design", "Développement front", "Responsive", "Contenu"],
    challenge:
      "Faire comprendre plusieurs univers de services au sein d’une seule marque, sans créer une navigation complexe ni diluer la proposition de valeur.",
    response:
      "Une landing organisée autour des quatre expériences Wajed, avec un accès direct au téléchargement et des parcours courts vers chaque service.",
  },
  {
    slug: "n-vibe",
    logo: "/clients/n-vibe.webp",
    shot: "/shots/n-vibe.webp",
    name: "N-Vibe",
    label: "Accessibilité · Produit web",
    status: "EN LIGNE",
    title: "Le GPS vibrant pensé pour les personnes malvoyantes",
    description:
      "Une expérience produit claire et accessible pour présenter un système de guidage qui libère l’ouïe grâce à deux bracelets vibrants.",
    url: "https://www.n-vibe.com/",
    tone: "light",
    facts: [
      ["Produit", "GPS haptique"],
      ["Marché", "France"],
      ["Priorité", "Accessibilité"],
      ["Surface", "Site produit"],
    ],
    scope: ["UX/UI", "Développement web", "Accessibilité", "Performance"],
    challenge:
      "Expliquer une technologie d’assistance innovante sans alourdir le parcours, tout en servant plusieurs publics: utilisateurs, accompagnants et institutions.",
    response:
      "Une hiérarchie orientée usage, des parcours d’achat et de test visibles, puis un socle éditorial capable d’accueillir partenaires et témoignages.",
  },
  {
    slug: "circular",
    logo: "/clients/circular.webp",
    shot: "/shots/circular.webp",
    name: "Circular",
    label: "E-commerce · Healthtech",
    status: "EN LIGNE",
    title: "La smart ring qui rend les données de santé actionnables",
    description:
      "Une vitrine e-commerce française dense et immersive pour présenter Circular Ring 2, ses biomarqueurs et son coach santé Kira.",
    url: "https://fr.circular.xyz/",
    tone: "dark",
    facts: [
      ["Produit", "Smart ring"],
      ["Marché", "France"],
      ["Priorité", "Conversion"],
      ["Surface", "E-commerce"],
    ],
    scope: ["Localisation FR", "E-commerce", "Direction web", "Optimisation"],
    challenge:
      "Présenter plus de 140 biomarqueurs et une forte profondeur produit sans perdre la promesse principale ni le chemin vers l’achat.",
    response:
      "Une narration progressive qui part du bénéfice, montre le produit, détaille les usages et conserve des actions d’achat accessibles tout au long de la page.",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
