import Link from 'next/link';
import { supabase } from '../../lib/supabase';

const rooms = ['Cielo', 'Monte', 'Sole', 'Bosco', 'Valle'];

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function toISO(date: Date) {
  return date.toISOString().slice(0, 10);
}

function toIT(date: Date) {
  return date.toLocaleDateString('it-IT');
}

function getRoomName(notes?: string | null) {
  const match = notes?.match(/Camera selezionata:\s*([^\n]+)/);
  return match?.[1]?.trim() || '';
}

export default async function Calendario({
  searchParams,
}: {
  searchParams?: { da?: string; giorni?: string };
}) {
  const start = searchParams?.da || '2026-06-19';
  const totalDays = Number(searchParams?.giorni || 31);

  const startDate = new Date(start);
  const days = Array.from({ length: totalDays }, (_, i) => {
    const date = addDays(startDate, i);
    return {
      iso: toISO(date),
      label: toIT(date),
    };
  });

  const end = days[days.length - 1]?.iso || start;

  const { data: bookings } = await supabase
    .from('bookings')
    .select('id, arrival, departure, adults, children, internal_notes')
    .lte('arrival', end)
    .gte('departure', start);

  function isOccupied(room: string, day: string) {
    return (bookings || []).some((b) => {
      const bookingRoom = getRoomName(b.internal_notes);
      return bookingRoom === room && b.arrival <= day && b.departure >= day;
    });
  }

  return (
    <>
      <h2>Calendario</h2>

      <form className="form2" style={{ marginBottom: '12px' }}>
        <label>
          Da
          <input type="date" name="da" defaultValue={start} />
        </label>

        <label>
          Numero giorni
          <input type="number" name="giorni" defaultValue={totalDays} min={1} max={60} />
        </label>

        <button className="btn fullbtn" type="submit">Aggiorna</button>
      </form>

      <div className="actions" style={{ marginBottom: '12px' }}>
        <Link className="btn green" href="/prenotazioni">Nuova prenotazione</Link>
      </div>

      <section className="card table-wrap">
        <table className="calendar-table">
          <thead>
            <tr>
              <th>Camera</th>
              {days.map((d) => <th key={d.iso}>{d.label}</th>)}
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr key={room}>
                <td><strong>{room}</strong></td>
                {days.map((day) => (
                  <td key={day.iso} className={isOccupied(room, day.iso) ? 'occupied' : ''}>
                    {isOccupied(room, day.iso) ? 'Occupata' : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
