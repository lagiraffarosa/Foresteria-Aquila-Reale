
const rooms = ['Cielo','Monte','Sole','Bosco','Valle'];

export default function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <section className="grid">
        <div className="card"><strong>Check-in oggi</strong><div className="kpi">0</div></div>
        <div className="card"><strong>Check-out oggi</strong><div className="kpi">0</div></div>
        <div className="card"><strong>Ospiti presenti</strong><div className="kpi">0</div></div>
        <div className="card"><strong>Camere libere</strong><div className="kpi">5</div></div>
        <div className="card wide"><h3>Stato camere</h3>
          {rooms.map((room) => (
            <div className="room-row" key={room}>
              <strong><span className="dot green"></span>{room}</strong>
              <span>{room === 'Valle' ? 'Suite libera' : 'Libera'}</span>
              <span className="badge">Disponibile</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
