'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function UpcomingBookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [message, setMessage] = useState('');

  async function loadBookings() {
    const { data, error } = await supabase
      .from('bookings')
      .select('id, arrival, departure, adults, children, internal_notes, rooms(name, room_number)')
      .order('arrival', { ascending: true })
      .limit(50);

    if (error) {
      setMessage('Errore lettura prenotazioni: ' + error.message);
      return;
    }

    setBookings(data || []);
  }

  useEffect(() => {
    loadBookings();
  }, []);

  async function deleteBooking(id: string) {
    const ok = window.confirm('Vuoi davvero eliminare questa prenotazione?');
    if (!ok) return;

    const { error } = await supabase
      .from('bookings')
      .delete()
      .eq('id', id);

    if (error) {
      setMessage('Errore eliminazione: ' + error.message);
      return;
    }

    setMessage('Prenotazione eliminata.');
    loadBookings();
  }

  if (bookings.length === 0) {
    return <p>Nessuna prenotazione caricata.</p>;
  }

  return (
    <div>
      {message && <p className="notice">{message}</p>}

      {bookings.map((b: any) => {
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
              <button
                className="btn secondary"
                onClick={() => deleteBooking(b.id)}
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
