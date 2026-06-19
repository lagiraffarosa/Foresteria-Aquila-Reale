
export default function Page() {
  return (
    <>
      <h2>Ospiti</h2>
      <section className="grid">
        <div className="card wide"><h3>Archivio ospiti</h3><div className="form"><input placeholder="Cognome" /><input placeholder="Nome" /><input placeholder="Telefono" /><input placeholder="Email" /><input placeholder="Documento" /><input placeholder="Nazionalità" /></div><br/><button className="btn">Salva ospite</button></div>
      </section>
    </>
  );
}
