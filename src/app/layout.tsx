import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HPC Kathmandu University',
  description: 'High Performance Computing facility at Kathmandu University',
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
