
export default function Impostazioni() {
  return (
    <>
      <h2>Impostazioni</h2>
      <section className="card">
        <h3>Camere</h3>
        <textarea defaultValue={"Cielo\nMonte\nSole\nBosco\nValle"}></textarea><br/><br/>
        <button className="btn fullbtn">Salva impostazioni</button>
      </section>
      <section className="card">
        <h3>Legenda stato camera</h3>
        <p><span className="dot green-dot"></span>Libera</p>
        <p><span className="dot blue-dot"></span>Occupata</p>
        <p><span className="dot orange-dot"></span>Check-in oggi</p>
        <p><span className="dot red-dot"></span>Check-out oggi</p>
      </section>
    </>
  );
}
