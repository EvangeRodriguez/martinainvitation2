import './Direccion.css'

export default function Direccion() {
  const redirectToMap = () => {
    window.open('https://maps.app.goo.gl/xLGS8Zu4yPnsfZY49', '_blank');
  }; 

    return (
      <div>
         <div className="direccion" style={{ display: "flex", alignItems: "center" }}>
        <a href="https://maps.app.goo.gl/xLGS8Zu4yPnsfZY49" target="_blank" rel="noopener noreferrer" onClick={(e) => e.preventDefault()}>
          <img src="maps.png" alt="mapa" style={{ marginRight: "10px", cursor: "pointer" }} onClick={redirectToMap} />
        </a>
        <p className='salon'>
          Casona La Coqueta
          RN19 316, Monte Cristo
        </p>
      </div>
    </div>
  );
  }
 