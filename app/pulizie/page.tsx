
export default function Page() {
  return (
    <>
      <h2>Pulizie</h2>
      <section className="grid">
        <div className="card wide"><h3>Stato pulizie</h3>{["Cielo","Monte","Sole","Bosco","Valle"].map((c)=><div className="list-row" key={c}><strong>{c}</strong><span>Da controllare</span><span className="badge">Da pulire</span></div>)}</div>
      </section>
    </>
  );
}
