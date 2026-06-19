
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

type Room = { id: string; name: string };

export default function BookingForm() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadRooms() {
      const { data } = await supabase.from('rooms').select('id,name').order('sort_order');
      if (data && data.length) setRooms(data);
    }
    loadRooms();
  }, []);

  async function saveBooking(formData: FormData) {
    setMessage('Salvataggio in corso...');
    const surname = String(formData.get('surname') || '').trim();
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const roomId = String(formData.get('room_id') || '').trim();
    const arrival = String(formData.get('arrival') || '').trim();
    const departure = String(formData.get('departure') || '').trim();
    const adults = Number(formData.get('adults') || 0);
    const children = Number(formData.get('children') || 0);
    const notes = String(formData.get('notes') || '').trim();
    const allergies = String(formData.get('allergies') || '').trim();

    if (!surname || !arrival || !departure) {
      setMessage('Inserisci almeno cognome, arrivo e partenza.');
      return;
    }

    const guestRes = await supabase.from('guests').insert({ surname, name, phone, email }).select('id').single();
    if (guestRes.error) {
      setMessage('Errore ospite: ' + guestRes.error.message);
      return;
    }

    const bookingRes = await supabase.from('bookings').insert({
      room_id: roomId || null,
      arrival,
      departure,
      adults,
      children,
      internal_notes: notes + (allergies ? '\nAllergie/esigenze: ' + allergies : '')
    });

    if (bookingRes.error) {
      setMessage('Errore prenotazione: ' + bookingRes.error.message);
      return;
    }

    setMessage('Prenotazione salvata correttamente.');
  }

  return (
    <form action={saveBooking} className="card">
      <h3>Scheda prenotazione completa</h3>
      <div className="form3">
        <label>Cognome<input name="surname"/></label>
        <label>Nome<input name="name"/></label>
        <label>Camera
          <select name="room_id">
            <option value="">Seleziona camera</option>
            {rooms.length ? rooms.map(r => <option key={r.id} value={r.id}>{r.name}</option>) : (
              <>
                <option>Cielo</option><option>Monte</option><option>Sole</option><option>Bosco</option><option>Valle</option>
              </>
            )}
          </select>
        </label>
        <label>Telefono<input name="phone"/></label>
        <label>Email<input name="email"/></label>
        <label>Stato<select name="status"><option>Confermata</option><option>In attesa</option><option>Annullata</option></select></label>
        <label>Arrivo<input name="arrival" type="date"/></label>
        <label>Partenza<input name="departure" type="date"/></label>
        <label>Animali<select name="pets"><option>No</option><option>Sì</option></select></label>
        <label>Adulti<input name="adults" type="number" defaultValue={2}/></label>
        <label>Bambini<input name="children" type="number" defaultValue={0}/></label>
        <label>Tariffa notte €<input name="rate" type="number"/></label>
        <label>Caparra €<input name="deposit" type="number"/></label>
        <label>Saldo pagato €<input name="paid" type="number"/></label>
        <label>Servizi aggiuntivi<textarea name="extras"/></label>
        <label className="full">Note interne<textarea name="notes"/></label>
        <label className="full">Allergie / esigenze particolari<textarea name="allergies"/></label>
      </div>
      <br/>
      <div className="actions">
        <button className="btn" type="submit">Salva prenotazione</button>
        <button className="btn secondary" type="reset">Svuota modulo</button>
      </div>
      {message && <p className="notice">{message}</p>}
    </form>
  );
}
