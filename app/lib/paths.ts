const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string) {
  if (!path.startsWith('/') || !basePath) return path;
  return `${basePath}${path}`;
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export function absoluteUrl(path: string) {
  return new URL(withBasePath(path), new URL(siteUrl).origin).toString();
}
