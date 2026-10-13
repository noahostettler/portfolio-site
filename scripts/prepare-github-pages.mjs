import { access, cp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist/client');
const pagesDirectory = path.resolve('dist/pages');
const projectSlugs = [
  'nelli-the-seer',
  'eyes-on-the-road',
  'tankwar',
  'unreal-launcher',
  'monopoly',
  'la-poste',
];

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? process.env.GITHUB_REPOSITORY?.split('/')[0] ?? '';
const inferredBasePath = repository && repository.toLowerCase() !== `${owner.toLowerCase()}.github.io`
  ? `/${repository}`
  : '';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath;
const exportDirectory = basePath
  ? path.join(outputDirectory, basePath.slice(1))
  : outputDirectory;

const requiredFiles = [
  'index.html',
  'about/index.html',
  'contact/index.html',
  'projects/index.html',
  'skills/index.html',
  ...projectSlugs.map((slug) => `projects/${slug}/index.html`),
];

for (const relativePath of requiredFiles) {
  await access(path.join(exportDirectory, relativePath));
}
await access(path.join(outputDirectory, '404.html'));

const homeHtml = await readFile(path.join(exportDirectory, 'index.html'), 'utf8');

for (const assetPath of ['/media/nelli/gameplay.webp', '/og.png']) {
  const expectedPath = `${basePath}${assetPath}`;
  if (!homeHtml.includes(expectedPath)) {
    throw new Error(`Static export is missing the expected asset path: ${expectedPath}`);
  }
}

if (homeHtml.includes('/projects/[slug]')) {
  throw new Error('A dynamic project route leaked into the static export.');
}

await rm(pagesDirectory, { recursive: true, force: true });
await cp(exportDirectory, pagesDirectory, { recursive: true });
await cp(path.join(outputDirectory, '404.html'), path.join(pagesDirectory, '404.html'));
await cp(path.join(outputDirectory, '404'), path.join(pagesDirectory, '404'), { recursive: true });
await writeFile(path.join(pagesDirectory, '.nojekyll'), '');
console.log(`Verified ${requiredFiles.length + 1} static pages and prepared ${pagesDirectory}`);
