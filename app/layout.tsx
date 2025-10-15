import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { 
  metadataBase: new URL('https://bdgwinngames.com'),
  title: 'BDG Win Game — Official Login, Download App & ₹300 Bonus',
  description: 'BDG Win Game (Big Daddy Game) — official info hub for login, download, bonus, colour prediction and withdrawals in India. Register now and claim your ₹300 bonus.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
