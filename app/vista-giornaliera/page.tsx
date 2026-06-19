import { supabase } from '../../lib/supabase';

const rooms = ['Cielo', 'Monte', 'Sole', 'Bosco', 'Valle'];
const today = '2026-06-19';

export default async function VistaGiornaliera() {
  const { data: bookings } = await supabase
    .from('bookings')
    .select('id, arrival, departure, adults, children, internal_notes')
    .lte('arrival', today)
    .gte('departure', today);

  const getRoomName = (notes?: string | null) => {
    const match = notes?.match(/Camera selezionata:\s*([^\n]+)/);
    return match?.[1]?.trim() || '';
  };

  const occupiedRooms = new Set((bookings || []).map((b) => getRoomName(b.internal_notes)));

  const checkIns = (bookings || []).filter((b) => b.arrival === today);
  const checkOuts = (bookings || []).filter((b) => b.departure === today);

  return (
    <>
      <h2>Vista giornaliera</h2>

      <div className="form2" style={{ marginBottom: '16px' }}>
        <label>Giorno<input type="date" defaultValue={today} /></label>
        <button className="btn fullbtn">Oggi</button>
      </div>

      <section className="card">
        <h3>Occupazione camere</h3>
        {rooms.map((room) => {
          const occupied = occupiedRooms.has(room);

          return (
            <div className="row" key={room}>
              <strong>{room}</strong>
              <span>{occupied ? 'Occupata' : 'Libera'}</span>
              <span className="badge">{occupied ? 'Occupata' : 'Disponibile'}</span>
            </div>
          );
        })}
      </section>

      <div className="form2">
        <section className="card">
          <h3>Check-in</h3>
          {checkIns.length ? (
            checkIns.map((b) => (
              <p key={b.id}>{getRoomName(b.internal_notes) || 'Camera non indicata'} · {b.adults || 0} adulti</p>
            ))
          ) : (
            <p className="notice">Nessun check-in.</p>
          )}
        </section>

        <section className="card">
          <h3>Check-out</h3>
          {checkOuts.length ? (
            checkOuts.map((b) => (
              <p key={b.id}>{getRoomName(b.internal_notes) || 'Camera non indicata'} · {b.adults || 0} adulti</p>
            ))
          ) : (
            <p className="notice">Nessun check-out.</p>
          )}
        </section>
      </div>
    </>
  );
}
