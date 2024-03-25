import Agenda from "../components/Agenda/Agenda";
import Fecha from "../components/Fecha/Fecha";
import Quince from "../components/Quince/Quice";
import Reloj from "../components/Reloj/Reloj";

 

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
        
        </>
       
    )
  }
  