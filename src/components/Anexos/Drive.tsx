import './Drive.css'

export default function Drive() {
    const redirectoDrive = () => {
        window.open('https://photos.app.goo.gl/r1DobVsyWHnEH5rT9', '_blank');
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
