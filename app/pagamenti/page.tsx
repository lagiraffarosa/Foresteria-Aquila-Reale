
export default function Pagamenti() {
  return (
    <>
      <h2>Pagamenti</h2>
      <section className="card">
        <h3>Pagamento e link carta di credito</h3>
        <div className="form2">
          <input placeholder="Prenotazione / ospite"/>
          <input placeholder="Importo €"/>
          <select><option>Metodo</option><option>Contanti</option><option>Carta</option><option>Bonifico</option><option>Link pagamento</option></select>
          <select><option>Stato</option><option>Da pagare</option><option>Pagato</option><option>Caparra</option></select>
        </div><br/>
        <div className="actions">
          <button className="btn">Registra pagamento</button>
          <button className="btn green">Genera link pagamento</button>
        </div>
        <p className="notice">Il link pagamento sarà collegato a Stripe nella prossima fase.</p>
      </section>
    </>
  );
}
