import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AgriTech Equipment',
  description: 'Your one-stop shop for agricultural equipment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}