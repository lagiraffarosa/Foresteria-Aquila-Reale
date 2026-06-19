
const rooms = [['Cielo','Camera standard'],['Monte','Camera standard'],['Sole','Camera standard'],['Bosco','Camera standard'],['Valle','Suite']];

export default function Camere() {
  return (
    <>
      <h2>Camere</h2>
      <section className="card">
        <h3>Elenco camere</h3>
        {rooms.map(([room,type]) => (
          <div className="row" key={room}><strong>{room}</strong><span>{type}</span><span className="badge">Libera</span></div>
        ))}
      </section>
    </>
  );
}
