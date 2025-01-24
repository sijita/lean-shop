import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/ui/providers';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LeanShop',
  description: 'LeanShop is a simple e-commerce platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
