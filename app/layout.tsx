
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { Home, CalendarDays, ClipboardList, CalendarRange, Bed, Users, CreditCard, Utensils, Sparkles, Wrench, Archive, BarChart3, DatabaseBackup, Settings } from 'lucide-react';

export const metadata = {
  title: 'Foresteria Aquila Reale Manager',
  description: 'Gestionale prenotazioni Foresteria Aquila Reale',
};

const menu = [
  ['/', 'Dashboard', Home],
  ['/prenotazioni', 'Prenotazioni', CalendarDays],
  ['/vista-giornaliera', 'Vista giornaliera', ClipboardList],
  ['/calendario', 'Calendario', CalendarRange],
  ['/camere', 'Camere', Bed],
  ['/ospiti', 'Ospiti', Users],
  ['/pagamenti', 'Pagamenti', CreditCard],
  ['/tagliave', 'Tagliavè', Utensils],
  ['/pulizie', 'Pulizie', Sparkles],
  ['/manutenzioni', 'Manutenzioni', Wrench],
  ['/archivio', 'Archivio', Archive],
  ['/statistiche', 'Statistiche', BarChart3],
  ['/backup', 'Backup', DatabaseBackup],
  ['/impostazioni', 'Impostazioni', Settings],
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <header className="header">
          <div className="brand">
            <Image className="logo" src="/logo-foresteria.jpg" width={58} height={58} alt="Logo Foresteria Aquila Reale" />
            <div>
              <h1>FORESTERIA AQUILA REALE</h1>
              <p>Manager prenotazioni</p>
            </div>
          </div>
          <div className="user">
            <div>Titolare<br/>Titolare</div>
            <button className="logout">Esci</button>
          </div>
        </header>
        <div className="layout">
          <aside className="sidebar">
            {menu.map(([href, label, Icon]) => (
              <Link href={href} key={href}><Icon size={17}/>{label}</Link>
            ))}
          </aside>
          <main className="main">{children}</main>
        </div>
        <div className="install-box">
          <strong>Vuoi installare l’app?</strong>
          <p className="notice">Puoi aggiungerla come icona sul desktop o sul telefono.</p>
          <div className="install-actions">
            <button className="btn">Installa</button>
            <button className="btn secondary">Più tardi</button>
          </div>
        </div>
      </body>
    </html>
  );
}
