'use client';
import { useEffect } from 'react';
import './globals.css';
import { cx } from '@/src/utils';
import { Montserrat, Inter } from 'next/font/google';
import Header from '@/src/components/Header';
import Footer from '../components/Footer';
import ThemeScript from '../components/ThemeScript';
import { Analytics } from '@vercel/analytics/react';
import { metadata } from './metadata';
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ms'
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in'
});
export default function RootLayout({ children }) {
  useEffect(() => {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', 'mgkdtpgp0u');
  }, []);
  return (
    <html lang="pt-br">
      <head></head>
      <body
        className={cx(
          montserrat.variable,
          inter.variable,
          'font-ms bg-light dark:bg-dark'
        )}>
        <ThemeScript />
        <Header />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}