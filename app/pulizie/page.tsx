
const rooms = ['Cielo','Monte','Sole','Bosco','Valle'];

export default function Pulizie() {
  return (
    <>
      <h2>Pulizie</h2>
      <section className="card">
        <h3>Stato pulizie</h3>
        {rooms.map(room => (
          <div className="row" key={room}>
            <strong>{room}</strong><span>Da controllare</span><span className="badge">Da pulire</span>
          </div>
        ))}
      </section>
    </>
  );
}
