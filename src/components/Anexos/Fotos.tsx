import './Fotos.css'

export default function Fotos() {
  return (
    <div>
    <div className="fotos" style={{ display: "flex", alignItems: "center" }}>
      <img src="camara.png" alt="camara de fotos" className="camara-img" />
      <div className='asistencia'>
        <p >Si tenemos fotos juntos</p>
        <p>subilas así en la fiesta las compartimos…</p>
      </div>
    </div>
  </div>
  )
}
