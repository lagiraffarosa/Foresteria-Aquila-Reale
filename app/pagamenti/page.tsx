
export default function Page() {
  return (
    <>
      <h2>Pagamenti</h2>
      <section className="grid">
        <div className="card wide"><h3>Pagamenti</h3><div className="form"><input placeholder="Prenotazione" /><input placeholder="Importo" /><select><option>Metodo</option><option>Contanti</option><option>Carta</option><option>Bonifico</option></select><select><option>Stato</option><option>Da pagare</option><option>Pagato</option><option>Caparra</option></select></div><br/><button className="btn">Registra pagamento</button></div>
      </section>
    </>
  );
}
