import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <nav className={styles.nav}>
          <Link href={`/`}>
            Home
          </Link>
          <Link href={`/products/`}>
            Products
          </Link>
          <Link href={`/users/`}>
            Users
          </Link>
          <Link href={`/beers/`}>
            Beers
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
