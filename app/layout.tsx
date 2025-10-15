import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = { 
  metadataBase: new URL('https://bdgwinngames.com'),
  title: 'BDG Win Game — Official Login, Download App & ₹500 Bonus',
  description: 'BDG Win Game (Big Daddy Game) — official info hub for login, download, bonus, colour prediction and withdrawals in India. Register now and claim your ₹500 bonus.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
        <FloatingButton />
        <SpeedInsights />
      </body>
    </html>
  );
}
