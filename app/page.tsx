import { supabase } from '../lib/supabase';

const rooms = ['Cielo', 'Monte', 'Sole', 'Bosco', 'Valle'];
const today = '2026-06-19';

export default async function Dashboard() {
  const { data: bookings } = await supabase
    .from('bookings')
    .select('id, arrival, departure, adults, children, internal_notes')
    .lte('arrival', today)
    .gte('departure', today);

  const getRoomName = (notes?: string | null) => {
    const match = notes?.match(/Camera selezionata:\s*([^\n]+)/);
    return match?.[1]?.trim() || '';
  };

  const occupiedRooms = new Set((bookings || []).map((b) => getRoomName(b.internal_notes)).filter(Boolean));
  const checkIns = (bookings || []).filter((b) => b.arrival === today);
  const checkOuts = (bookings || []).filter((b) => b.departure === today);
  const guestsPresent = (bookings || []).reduce((sum, b) => sum + (b.adults || 0) + (b.children || 0), 0);
  const freeRooms = rooms.length - occupiedRooms.size;

  return (
    <>
      <h2>Dashboard</h2>

      <div className="form2" style={{ marginBottom: '16px' }}>
        <label>Giorno<input type="date" defaultValue={today} /></label>
        <button className="btn fullbtn">Oggi</button>
      </div>

      <section className="grid4">
        <div className="kpi"><strong>Check-in oggi</strong><span>{checkIns.length}</span></div>
        <div className="kpi"><strong>Check-out oggi</strong><span>{checkOuts.length}</span></div>
        <div className="kpi"><strong>Ospiti presenti</strong><span>{guestsPresent}</span></div>
        <div className="kpi"><strong>Camere libere</strong><span>{freeRooms}</span></div>
      </section>

      <section className="card">
        <h3>Stato camere</h3>
        {rooms.map((room) => {
          const occupied = occupiedRooms.has(room);
          return (
            <div className="row" key={room}>
              <strong><span className="dot green-dot"></span>{room}</strong>
              <span>{occupied ? 'Occupata' : room === 'Valle' ? 'Suite libera' : 'Libera'}</span>
              <span className="badge">{occupied ? 'Occupata' : 'Disponibile'}</span>
            </div>
          );
        })}
      </section>

      <section className="card">
        <h3>Avvisi importanti</h3>
        <p className="notice">
          {bookings && bookings.length ? 'Controlla le prenotazioni attive della giornata.' : 'Nessun avviso.'}
        </p>
      </section>
    </>
  );
}
