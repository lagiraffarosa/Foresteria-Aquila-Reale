
import './globals.css';
import Link from 'next/link';
import { CalendarDays, Home, Hotel, Users, CreditCard, Sparkles, Wrench, Utensils } from 'lucide-react';

export const metadata = { title: 'Foresteria Aquila Reale Manager' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <header className="header">
          <div className="brand">
            <div className="logoBox">🦅</div>
            <div><h1>FORESTERIA AQUILA REALE</h1><p>Manager Cloud</p></div>
          </div>
          <div className="user">Admin</div>
        </header>
        <div className="layout">
          <aside className="sidebar">
            <Link href="/"><Home size={17}/> Dashboard</Link>
            <Link href="/prenotazioni"><CalendarDays size={17}/> Prenotazioni</Link>
            <Link href="/camere"><Hotel size={17}/> Camere</Link>
            <Link href="/ospiti"><Users size={17}/> Ospiti</Link>
            <Link href="/pagamenti"><CreditCard size={17}/> Pagamenti</Link>
            <Link href="/tagliave"><Utensils size={17}/> Tagliavè</Link>
            <Link href="/pulizie"><Sparkles size={17}/> Pulizie</Link>
            <Link href="/manutenzioni"><Wrench size={17}/> Manutenzioni</Link>
          </aside>
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
