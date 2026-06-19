
export default function Page() {
  return (
    <>
      <h2>Manutenzioni</h2>
      <section className="grid">
        <div className="card wide"><h3>Nuova manutenzione</h3><div className="form"><select><option>Camera</option><option>Cielo</option><option>Monte</option><option>Sole</option><option>Bosco</option><option>Valle</option></select><input placeholder="Titolo problema" /><textarea placeholder="Descrizione"></textarea><select><option>Priorità normale</option><option>Urgente</option><option>Bassa</option></select></div><br/><button className="btn">Apri segnalazione</button></div>
      </section>
    </>
  );
}
