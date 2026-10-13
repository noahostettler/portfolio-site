import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { absoluteUrl, siteUrl } from './lib/paths';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Noa Hostettler — Game Programmer', template: '%s' },
  description: 'Portfolio de Noa Hostettler, programmeur jeu vidéo C++ et C# spécialisé en gameplay, Unreal Engine 5 et Unity.',
  openGraph: { title: 'Noa Hostettler — Game Programmer', description: 'Gameplay, systèmes C++, Unreal Engine et Unity.', images: [{ url: absoluteUrl('/og.png'), width: 1734, height: 907, alt: 'Noa Hostettler — Game Programmer' }] },
  twitter: { card: 'summary_large_image', images: [absoluteUrl('/og.png')] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
