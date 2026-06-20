import { supabase } from '../../lib/supabase';

export default async function UpcomingBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select('id, arrival, departure, adults, children, internal_notes, rooms(name, room_number)')
    .order('arrival', { ascending: true })
    .limit(50);

  if (error) {
    return <p className="notice">Errore lettura prenotazioni: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>Nessuna prenotazione caricata.</p>;
  }

  return (
    <div>
      {data.map((b: any) => {
        const roomLabel = b.rooms
          ? `${b.rooms.room_number || ''} - ${b.rooms.name}`.trim()
          : b.internal_notes || 'Camera non indicata';

        return (
          <div className="row" key={b.id}>
            <strong>{b.arrival} → {b.departure}</strong>
            <span>
              {roomLabel} · {b.adults || 0} adulti · {b.children || 0} bambini
            </span>
            <span className="actions">
              <button className="btn">Modifica</button>
              <button className="btn secondary"
  onClick={() => alert('Click rilevato')}
>
  Elimina
</button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
