
export default function Archivio() {
  return (
    <>
      <h2>Archivio prenotazioni</h2>
      <section className="card">
        <h3>Cerca</h3>
        <input className="search" placeholder="Cognome, camera, note..." />
        <p className="notice">Prenotazioni: 0 · Visualizzate: 0</p>
        <p>Nessuna prenotazione.</p>
      </section>
    </>
  );
}
