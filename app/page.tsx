
const rooms = ['Cielo','Monte','Sole','Bosco','Valle'];

export default function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <div className="form2" style={{marginBottom: '16px'}}>
        <label>Giorno<input type="date" defaultValue="2026-06-19"/></label>
        <button className="btn fullbtn">Oggi</button>
      </div>
      <section className="grid4">
        <div className="kpi"><strong>Check-in oggi</strong><span>0</span></div>
        <div className="kpi"><strong>Check-out oggi</strong><span>0</span></div>
        <div className="kpi"><strong>Ospiti presenti</strong><span>0</span></div>
        <div className="kpi"><strong>Camere libere</strong><span>5</span></div>
      </section>
      <section className="card">
        <h3>Stato camere</h3>
        {rooms.map(room => (
          <div className="row" key={room}>
            <strong><span className="dot green-dot"></span>{room}</strong>
            <span>{room === 'Valle' ? 'Suite libera' : 'Libera'}</span>
            <span className="badge">Disponibile</span>
          </div>
        ))}
      </section>
      <section className="card">
        <h3>Avvisi importanti</h3>
        <p className="notice">Nessun avviso.</p>
      </section>
    </>
  );
}
