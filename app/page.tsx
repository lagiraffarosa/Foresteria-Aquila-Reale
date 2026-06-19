
import { CalendarDays, Home, Hotel, Users, CreditCard, Sparkles, Wrench, Utensils } from 'lucide-react';

const rooms = [
  { name: 'Cielo', status: 'Libera', color: 'green' },
  { name: 'Monte', status: 'Libera', color: 'green' },
  { name: 'Sole', status: 'Libera', color: 'green' },
  { name: 'Bosco', status: 'Libera', color: 'green' },
  { name: 'Valle', status: 'Suite libera', color: 'green' },
];

export default function Dashboard() {
  return (
    <>
      <header className="header">
        <div className="brand"><h1>FORESTERIA AQUILA REALE</h1><p>Manager Cloud</p></div>
        <div>Admin</div>
      </header>
      <div className="layout">
        <aside className="sidebar">
          <a className="active"><Home size={16}/> Dashboard</a>
          <a><CalendarDays size={16}/> Prenotazioni</a>
          <a><Hotel size={16}/> Camere</a>
          <a><Users size={16}/> Ospiti</a>
          <a><CreditCard size={16}/> Pagamenti</a>
          <a><Utensils size={16}/> Tagliavè</a>
          <a><Sparkles size={16}/> Pulizie</a>
          <a><Wrench size={16}/> Manutenzioni</a>
        </aside>
        <main className="main">
          <h2>Dashboard</h2>
          <section className="grid">
            <div className="card"><strong>Check-in oggi</strong><div className="kpi">0</div></div>
            <div className="card"><strong>Check-out oggi</strong><div className="kpi">0</div></div>
            <div className="card"><strong>Ospiti presenti</strong><div className="kpi">0</div></div>
            <div className="card"><strong>Camere libere</strong><div className="kpi">5</div></div>
            <div className="card wide"><h3>Stato camere</h3>
              {rooms.map((room) => (
                <div className="room-row" key={room.name}>
                  <strong><span className={`dot ${room.color}`}></span>{room.name}</strong>
                  <span>{room.status}</span>
                  <span className="badge">Disponibile</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
