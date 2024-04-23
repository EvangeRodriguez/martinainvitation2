import Agenda from "../components/Agenda/Agenda";
import Anexos from "../components/Anexos/Anexos";
import Calendario from "../components/Calendario/Calendario";
import Direccion from "../components/Direccion/Direccion";
import Fecha from "../components/Fecha/Fecha";
import Forms from "../components/Formulario/Forms";
import Fotos from "../components/Fotos/Fotos";
import Oufit from "../components/Oufit/Oufit";
import Quince from "../components/Quince/Quince";
import Reloj from "../components/Reloj/Reloj";
import Spotify from "../components/Spotify/Spotify";
import "./HomePage.css";



export default function HomePage() {
  return (
    <>
      <div className="container">

        <div className='agenda'>
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

        <div className='direccion'>
          <Direccion />
        </div>

        <div className='oufit'>
          <Oufit />
        </div>

        <div className='calendario'>
          <Calendario />
        </div>

        <div className='forms'>
          <Forms />
        </div>

        <div className="anexo">
          <Anexos />
        </div>
      </div>
    </>

  )
}
