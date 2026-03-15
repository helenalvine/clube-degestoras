import type { Metadata } from 'next';
import { Montserrat, Lato } from 'next/font/google';
import './globals.css';
import { KeyboardNavigation } from '@/components/keyboard-navigation';
import { Suspense } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clube de Gestoras',
  description: 'Premium course for cleaning company managers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="font-lato">
        <Suspense fallback={null}>
          <KeyboardNavigation />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
