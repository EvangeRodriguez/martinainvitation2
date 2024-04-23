import './Oufit.css'

export default function Oufit() {
  return (
    <div>
      <div className="outfit" style={{ display: "flex", alignItems: "center" }}>
        <img src="oufit.png" alt="outfit" className="map-image"/>
        <p className='ropa'>
          Outfit: Formal
        </p>
      </div>
    </div>
  )
}
