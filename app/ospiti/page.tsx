
export default function Ospiti() {
  return (
    <>
      <h2>Ospiti</h2>
      <section className="card">
        <h3>Archivio ospiti</h3>
        <div className="form2">
          <input placeholder="Cognome"/><input placeholder="Nome"/>
          <input placeholder="Telefono"/><input placeholder="Email"/>
          <input placeholder="Documento"/><input placeholder="Nazionalità"/>
          <input placeholder="Data nascita"/><input placeholder="Luogo nascita"/>
        </div><br/>
        <button className="btn">Salva ospite</button>
      </section>
    </>
  );
}
