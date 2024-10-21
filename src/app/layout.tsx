import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import '@/styles/globals.css';

import UnderlineLink from '@/components/links/UnderlineLink';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-48-48.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
  authors: [
    {
      name: 'Nick Nijenhuis',
      url: 'https://www.novana.nl',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <title>Dieteren Bouwservice</title>
      </Head>
      <body className='flex flex-col min-h-screen'>
        <header className='bg-blue-600 text-white py-6 px-4 shadow-md'>
          <div className='container mx-auto flex flex-col items-center md:flex-row md:justify-between'>
            <div className='flex items-center mb-4 md:mb-0'>
              <div
                className='bg-white rounded-full p-2 flex items-center justify-center'
                style={{ width: 84, height: 84 }}
              >
                <Image
                  src='/svg/Logo.svg'
                  alt='Dieteren Bouwservice'
                  width={76}
                  height={76}
                />
              </div>
              <div className='ml-4'>
                <h1 className='text-2xl font-bold'>Dieteren Bouwservice</h1>
                <p className='text-sm text-blue-100'>
                  Nieuwbouw, Aanbouw, Verbouwen & Renovatie
                </p>
              </div>
            </div>
            <nav className='mt-4 md:mt-0'>
              <ul className='flex flex-wrap justify-center space-x-6'>
                <li>
                  <Link href='/' className='hover:underline text-lg'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/over-ons' className='hover:underline text-lg'>
                    Over ons
                  </Link>
                </li>
                <li>
                  <Link href='/fotos' className='hover:underline text-lg'>
                    Foto's
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='hover:underline text-lg'>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className='flex-grow container mx-auto mt-8 px-4 mb-12'>
          {children}
        </main>

        <footer className='bg-gray-800 text-white py-6 mt-auto'>
          <div className='container mx-auto text-center'>
            <div className='flex justify-between items-center'>
              <div>© {new Date().getFullYear()} Dieteren Bouw Service</div>
              <div>
                Made by{' '}
                <UnderlineLink
                  href='https://novana.nl'
                  className='text-blue-300 hover:text-blue-100'
                >
                  Novana
                </UnderlineLink>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
