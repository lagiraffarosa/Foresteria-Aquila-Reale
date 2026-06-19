
const rooms = ['Cielo','Monte','Sole','Bosco','Valle'];

export default function VistaGiornaliera() {
  return (
    <>
      <h2>Vista giornaliera</h2>
      <div className="form2" style={{marginBottom: '16px'}}>
        <label>Giorno<input type="date" defaultValue="2026-06-19"/></label>
        <button className="btn fullbtn">Oggi</button>
      </div>
      <section className="card">
        <h3>Occupazione camere</h3>
        {rooms.map(room => (
          <div className="row" key={room}>
            <strong>{room}</strong><span>Libera</span><span className="badge">Disponibile</span>
          </div>
        ))}
      </section>
      <div className="form2">
        <section className="card"><h3>Check-in</h3><p className="notice">Nessun check-in.</p></section>
        <section className="card"><h3>Check-out</h3><p className="notice">Nessun check-out.</p></section>
      </div>
    </>
  );
}
