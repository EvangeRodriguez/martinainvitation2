import './Calendario.css'

export default function Calendario() {
  return (
    <div>
      <div className="calendario" style={{ display: "flex", alignItems: "center" }}>
        <img src="calendar.png" alt="mapa" className="calendar-img" />
        <div className='asistencia'>
          <p >¿Venis?</p>
          <p>¡Confirma asistencia!</p>
        </div>
      </div>
    </div>
  )
}
