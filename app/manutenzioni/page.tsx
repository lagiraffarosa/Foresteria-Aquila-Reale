
export default function Manutenzioni() {
  return (
    <>
      <h2>Manutenzioni</h2>
      <section className="card">
        <h3>Nuova manutenzione</h3>
        <div className="form2">
          <select><option>Camera</option><option>Cielo</option><option>Monte</option><option>Sole</option><option>Bosco</option><option>Valle</option></select>
          <input placeholder="Titolo problema"/>
          <textarea placeholder="Descrizione"></textarea>
          <select><option>Priorità normale</option><option>Urgente</option><option>Bassa</option></select>
        </div><br/>
        <button className="btn">Apri segnalazione</button>
      </section>
    </>
  );
}
