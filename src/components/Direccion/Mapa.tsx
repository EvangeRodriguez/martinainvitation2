import './Mapa.css';

export default function Mapa() {
    const redirectToMap = () => {
        window.open('https://maps.app.goo.gl/xLGS8Zu4yPnsfZY49', '_blank');
      };
  return (
    <div>
<img src="vermapa1.png"
          alt= "Mapa"
          onClick={redirectToMap}
          className='boton-mapa'/>
    </div>
  )
}
