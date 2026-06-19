
import { supabase } from '../../lib/supabase';

export default async function UpcomingBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select('id, arrival, departure, adults, children, internal_notes, rooms(name)')
    .order('arrival', { ascending: true })
    .limit(10);

  if (error) return <p className="notice">Database collegato, ma lettura prenotazioni non disponibile: {error.message}</p>;
  if (!data || data.length === 0) return <p>Nessuna prenotazione caricata.</p>;

  return (
    <div>
      {data.map((b: any) => (
        <div className="row" key={b.id}>
          <strong>{b.arrival} → {b.departure}</strong>
          <span>{b.rooms?.name || 'Camera non assegnata'} · {b.adults || 0} adulti · {b.children || 0} bambini</span>
          <span className="actions">
            <button className="btn">Modifica</button>
            <button className="btn secondary">Elimina</button>
          </span>
        </div>
      ))}
    </div>
  );
}
