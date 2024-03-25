import './Direccion.css'

export default function Direccion() {
    return (
      <div>
        <div className="direccion" style={{ display: "flex", alignItems: "center" }}>
          <img src="maps.png" alt="mapa" style={{ marginRight: "10px" }} />
          <p className='salon'>
            Casona La Coqueta
            RN19 316, Monte Cristo
          </p>
        </div>
      </div>
    );
  }
  