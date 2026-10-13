export type Project = {
  slug: string; index: string; title: string; shortTitle: string; eyebrow: string; summary: string;
  role: string; context: string; year: string; technologies: string[]; contributions: string[];
  systems: { title: string; text: string }[];
  media: { type: 'image' | 'video'; src: string; poster?: string; alt: string };
  secondaryImage?: { src: string; alt: string }; link?: { label: string; href: string };
  theme: 'lime' | 'cyan' | 'amber' | 'violet' | 'red' | 'blue';
};

export const projects: Project[] = [
  {
    slug: 'nelli-the-seer', index: '01', title: 'Nelli The Seer', shortTitle: 'Nelli The Seer', eyebrow: 'Projet vitrine · Jeu publié', year: '2025', role: 'Gameplay programmer', context: 'Production en équipe · Unreal Engine 5', theme: 'lime',
    summary: "Un platformer 3D publié sur Steam. J’ai conçu des systèmes gameplay en C++ — plateformes, pièges et points de vision — puis assuré leur intégration avec les Blueprints et les systèmes partagés du jeu.",
    technologies: ['C++', 'Unreal Engine 5', 'Blueprints', 'Gameplay systems', 'Perforce'],
    contributions: ['Base modulaire pour les plateformes et gameplay elements, avec enregistrement auprès d’un subsystem.', 'Hiérarchie de pièges : pics rétractables, piège à flèches, projectiles, temporisations et événements.', 'Points de vision reliés au subsystem et au changement de caméra.', 'Persistance de l’état gameplay entre sauvegarde, chargement et méditation.'],
    systems: [
      { title: 'Architecture gameplay', text: 'Des acteurs de base extensibles, spécialisés ensuite par comportement. Cette structure limite les duplications et facilite le travail côté Blueprint.' },
      { title: 'Événements & timing', text: 'Timers, delegates et interpolation pilotent les séquences de pièges sans bloquer la boucle de jeu.' },
      { title: 'État persistant', text: 'Les éléments s’enregistrent dans un subsystem pour restaurer leur état et rester cohérents avec la progression.' },
    ],
    media: { type: 'image', src: '/media/nelli/gameplay.webp', alt: 'Nelli dans le Templo Mayor, près d’une plaque de vision' }, secondaryImage: { src: '/media/nelli/menu.webp', alt: 'Écran titre de Nelli The Seer' },
    link: { label: 'Voir Nelli sur Steam', href: 'https://store.steampowered.com/app/3801320/Nelli_The_Seer/' },
  },
  {
    slug: 'eyes-on-the-road', index: '02', title: 'Pokédex — Eyes on the Road', shortTitle: 'Eyes on the Road', eyebrow: 'Prototype data-driven', year: '2025', role: 'IA trafic & données véhicule', context: 'Équipe de 4 · 5 jours', theme: 'cyan',
    summary: 'Un Pokédex automobile connecté à des données réelles, mis en scène dans un environnement routier vivant. Je me suis chargé de l’IA des véhicules et de la récupération de leurs données.',
    technologies: ['Unity', 'C#', 'REST API', 'Supabase', 'Tenkoku'], contributions: ['IA de circulation fondée sur des BoxCast.', 'Gestion des voies, dépassements et vitesses.', 'Requêtes asynchrones pour les données automobiles.', 'Connexion des métadonnées véhicules et de la météo au prototype.'],
    systems: [{ title: 'Traffic AI', text: 'Perception locale, adaptation de vitesse et changement de voie composent un trafic lisible sans système lourd.' }, { title: 'Pipeline de données', text: 'UnityWebRequest récupère les données distantes de manière asynchrone puis alimente les modèles du jeu.' }, { title: 'Monde dynamique', text: 'Les données de météo Open-Meteo sont utilisées par Tenkoku pour faire évoluer l’ambiance de la scène.' }],
    media: { type: 'video', src: '/media/eyes-on-the-road/trailer.mp4', poster: '/media/eyes-on-the-road/poster.jpg', alt: 'Démonstration de Eyes on the Road' },
  },
  {
    slug: 'tankwar', index: '03', title: 'TankWar', shortTitle: 'TankWar', eyebrow: 'Jeu & moteur 2D', year: '2025', role: 'Programmation en binôme', context: 'Projet réalisé conjointement', theme: 'amber',
    summary: 'Un jeu de tanks en C++20 construit sur un moteur 2D développé en cours. Le projet met en pratique une architecture proche de celle d’un moteur de jeu.', technologies: ['C++20', 'SFML 3', 'CMake', 'Game architecture'],
    contributions: ['Travail conjoint sur le jeu et son socle technique.', 'Architecture Actor / Component.', 'Cycle Level, GameMode, PlayerController et Pawn.', 'Systèmes de collision, rendu, entrées, interface et timers.'],
    systems: [{ title: 'Architecture moteur', text: 'Les responsabilités de la boucle de jeu sont réparties entre niveaux, modes de jeu, contrôleurs, acteurs et composants.' }, { title: 'Composants réutilisables', text: 'Collision, rendu et comportements sont composés pour garder les objets de jeu lisibles et extensibles.' }, { title: 'Responsabilité partagée', text: 'Le projet ayant été construit à deux de façon très collaborative, il est présenté comme un travail collectif plutôt que d’attribuer artificiellement chaque classe.' }],
    media: { type: 'video', src: '/media/tankwar/gameplay.mp4', poster: '/media/tankwar/poster.jpg', alt: 'Partie de TankWar en écran partagé' },
  },
  {
    slug: 'unreal-launcher', index: '04', title: 'UnrealLauncher', shortTitle: 'UnrealLauncher', eyebrow: 'Outil desktop', year: '2025', role: 'Développement de la Library', context: 'Projet en binôme', theme: 'violet',
    summary: 'Un launcher WPF capable de recenser des projets Unreal locaux, d’identifier leur version moteur et de les ouvrir dans le bon environnement.', technologies: ['C#', '.NET 9', 'WPF', 'XAML', 'MVVM'],
    contributions: ['Conception et développement de toute la partie Library.', 'Début et fondations du projet réalisés ensemble.', 'Scan des fichiers .uproject et lecture de EngineAssociation.', 'Détection des moteurs installés et lancement de l’éditeur.'],
    systems: [{ title: 'Découverte de projets', text: 'La Library parcourt les emplacements configurés, interprète les descripteurs Unreal et rassemble les métadonnées utiles.' }, { title: 'Résolution moteur', text: 'L’outil rapproche la version déclarée du projet des installations présentes sur la machine.' }, { title: 'Interface WPF', text: 'Une interface XAML structure bibliothèque, recherche et actions, avec séparation claire entre vue et logique.' }],
    media: { type: 'video', src: '/media/unreal-launcher/demo.mp4', poster: '/media/unreal-launcher/poster.jpg', alt: 'Démonstration de la bibliothèque UnrealLauncher' },
  },
  {
    slug: 'monopoly', index: '05', title: 'Monopoly', shortTitle: 'Monopoly', eyebrow: 'Jeu console', year: '2024', role: 'Programmation C++', context: 'Projet académique', theme: 'red',
    summary: 'Une adaptation console de Monopoly centrée sur la modélisation objet, la gestion du tour de jeu et la propriété sûre des données.', technologies: ['C++17', 'OOP', 'STL', 'Smart pointers'],
    contributions: ['Boucle complète de tour et règles principales.', 'Hiérarchie de cartes et événements.', 'Gestion des joueurs avec unique_ptr.', 'Rendu ASCII et navigation en console.'],
    systems: [{ title: 'Modèle objet', text: 'Plateau, cases, cartes et joueurs sont séparés en types dédiés pour refléter les règles du jeu.' }, { title: 'Gestion mémoire', text: 'Les smart pointers donnent une propriété explicite aux objets et évitent les suppressions manuelles fragiles.' }],
    media: { type: 'video', src: '/media/monopoly/gameplay.mp4', poster: '/media/monopoly/poster.jpg', alt: 'Partie de Monopoly dans le terminal' },
  },
  {
    slug: 'la-poste', index: '06', title: 'La Poste VR', shortTitle: 'La Poste VR', eyebrow: 'Serious game VR', year: '2026', role: 'Gameplay & intégration', context: 'Production en équipe · jan. à mars', theme: 'blue',
    summary: 'Une expérience de formation en réalité virtuelle réalisée sous Unity. Mon travail a porté sur les interactions, l’intégration gameplay et la fiabilisation du parcours.', technologies: ['Unity', 'C#', 'VR', 'Perforce'],
    contributions: ['Développement d’interactions gameplay.', 'Intégration des systèmes dans le parcours VR.', 'Debug et stabilisation en contexte d’équipe.', 'Versioning et collaboration avec Perforce.'],
    systems: [{ title: 'Interactions VR', text: 'Des interactions directes et compréhensibles soutiennent le scénario pédagogique sans surcharger l’utilisateur.' }, { title: 'Intégration', text: 'Le travail met l’accent sur la cohérence entre scripts, assets, scènes et progression de l’expérience.' }],
    media: { type: 'video', src: '/media/la-poste/gameplay.mp4', poster: '/media/la-poste/poster.jpg', alt: 'Démonstration de l’expérience La Poste VR' },
  },
];
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
