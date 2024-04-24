import './Drive.css'

export default function Drive() {
    const redirectoDrive = () => {
        window.open('https://bit.ly/Recuerdos15sMarti', '_blank');
      };
  return (
    <div>
<img src="fotosboton.png"
          alt= "Subir fotos"
          onClick={redirectoDrive}
          className='boton-fotos'/>
    </div>
  )
}
