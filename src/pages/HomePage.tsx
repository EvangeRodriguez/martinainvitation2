import Agenda from "../components/Agenda/Agenda";
import Calendario from "../components/Calendario/Calendario";
import Direccion from "../components/Direccion/Direccion";
import Fecha from "../components/Fecha/Fecha";
import Forms from "../components/Formulario/Forms";
import Oufit from "../components/Oufit/Oufit";
import Quince from "../components/Quince/Quice";
import Reloj from "../components/Reloj/Reloj";
import Spotify from "../components/Spotify/Spotify";

 

 export default function HomePage() {
    return (
    <><div className='agenda'>
        <Agenda />
      </div>
      <div className='quince'>
          <Quince />
        </div>
        <div className='fecha'>
          <Fecha />
        </div>
        <div className='reloj'>
          <Reloj />
        </div>
        <div className='reloj'>
          <Direccion />
        </div>
        <div className='reloj'>
          <Oufit/>
        </div>
        <div className='reloj'>
          <Calendario />
        </div>
        <div className='reloj'>
          <Forms/>
        </div>
        <div className='reloj'>
          <Spotify/>
        </div>
        </>
       
    )
  }
  