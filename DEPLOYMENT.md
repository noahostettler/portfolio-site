# Déploiement GitHub Pages

Le portfolio est exporté en fichiers statiques par Vinext/Vite puis publié par le workflow `.github/workflows/deploy-pages.yml`.

## Première mise en ligne

1. Créer un dépôt GitHub pour le contenu de `PortfolioSite`.
2. Initialiser Git dans ce dossier, utiliser la branche `main`, puis pousser le projet.
3. Dans **Settings → Pages → Build and deployment**, sélectionner **GitHub Actions** comme source.
4. Relancer le workflow **Deploy portfolio to GitHub Pages** si le premier push a précédé l’activation de Pages.

Le nom du dépôt est détecté automatiquement. Un dépôt de projet est publié sous `https://<compte>.github.io/<dépôt>/`, tandis qu’un dépôt nommé `<compte>.github.io` utilise directement la racine du domaine.

## Commandes utiles

- `pnpm dev` : aperçu local sur la racine `/`.
- `pnpm run build:pages` : export statique, contrôle des 12 pages et préparation de `dist/pages`.
- `pnpm run lint` : contrôle ESLint.

## Limites de l’hébergement statique

GitHub Pages ne fournit aucun serveur applicatif. Les API routes, Server Actions, cookies ou headers calculés à la requête, middleware, ISR/revalidation et optimisation d’images à la volée ne peuvent donc pas être ajoutés sans changer d’hébergement. Le portfolio actuel n’utilise aucune de ces fonctionnalités.
