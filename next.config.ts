import type { NextConfig } from 'next';

const [repositoryOwner = '', repositoryName = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserOrOrganizationSite =
  repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;
const inferredBasePath = repositoryName && !isUserOrOrganizationSite ? `/${repositoryName}` : '';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (repositoryOwner
    ? `https://${repositoryOwner}.github.io${basePath}`
    : 'http://localhost:3000');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
