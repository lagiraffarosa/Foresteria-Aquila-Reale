
export default function Page() {
  return (
    <>
      <h2>Camere</h2>
      <section className="grid">
        <div className="card wide"><h3>Camere</h3>{["Cielo","Monte","Sole","Bosco","Valle"].map((c)=><div className="list-row" key={c}><strong>{c}</strong><span>{c==="Valle" ? "Suite" : "Camera standard"}</span><span className="badge">Libera</span></div>)}</div>
      </section>
    </>
  );
}
