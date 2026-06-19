
const rooms = ['Cielo','Monte','Sole','Bosco','Valle'];
const days = Array.from({length:31}, (_,i)=>String(i+1).padStart(2,'0') + '/07/2026');

export default function Calendario() {
  return (
    <>
      <h2>Calendario</h2>
      <div className="form2" style={{marginBottom: '12px'}}>
        <label>Da<input type="date" defaultValue="2026-07-01"/></label>
        <label>Numero giorni<input type="number" defaultValue={31}/></label>
      </div>
      <div className="actions" style={{marginBottom: '12px'}}>
        <button className="btn">Aggiorna</button>
        <button className="btn green">Nuova prenotazione</button>
      </div>
      <section className="card table-wrap">
        <table className="calendar-table">
          <thead><tr><th>Camera</th>{days.map(d=><th key={d}>{d}</th>)}</tr></thead>
          <tbody>
            {rooms.map(r => <tr key={r}><td>{r}</td>{days.map(d=><td key={d}></td>)}</tr>)}
          </tbody>
        </table>
      </section>
    </>
  );
}
