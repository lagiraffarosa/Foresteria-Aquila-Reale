
export default function Backup() {
  return (
    <>
      <h2>Backup dati</h2>
      <section className="card">
        <div className="form2">
          <button className="btn fullbtn">Scarica backup</button>
          <label>Importa backup<input type="file"/></label>
        </div>
      </section>
    </>
  );
}
