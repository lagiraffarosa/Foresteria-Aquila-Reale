
export default function Page() {
  return (
    <>
      <h2>Prenotazioni</h2>
      <section className="grid">
        <div className="card wide"><h3>Nuova prenotazione</h3><div className="form"><input placeholder="Cognome ospite" /><input placeholder="Nome ospite" /><select><option>Camera</option><option>Cielo</option><option>Monte</option><option>Sole</option><option>Bosco</option><option>Valle</option></select><input type="date" /><input type="date" /><input placeholder="Numero persone" /><input placeholder="Tariffa" /><input placeholder="Note / allergie" /></div><br/><button className="btn">Salva prenotazione</button></div><div className="card wide"><h3>Prossime prenotazioni</h3><p>Nessuna prenotazione caricata.</p></div>
      </section>
    </>
  );
}
