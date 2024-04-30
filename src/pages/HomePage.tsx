import Agenda from "../components/Agenda/Agenda";
import Drive from "../components/Anexos/Drive";
import Fotos from "../components/Anexos/Fotos";
import Calendario from "../components/Calendario/Calendario";
import Direccion from "../components/Direccion/Direccion";
import Mapa from "../components/Direccion/Mapa";
import Fecha from "../components/Fecha/Fecha";
import Fin from "../components/Fin/Fin";
import Forms from "../components/Formulario/Forms";
import Oufit from "../components/Oufit/Oufit";
import Quince from "../components/Quince/Quince";
import Reloj from "../components/Reloj/Reloj";
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

        <div className='mapa'>
          <Mapa />
        </div>

        <div className='calendario'>
          <Calendario />
        </div>

        <div className='forms'>
          <Forms />
        </div>

        <div className='oufit'>
          <Oufit />
        </div>

        <div className='fotos'>
          <Fotos />
        </div>

        <div className='fotos'>
          <Drive />
        </div>

      <div className="saludo">
    <Fin/>
      </div>

      </div>
    </>

  )
}
