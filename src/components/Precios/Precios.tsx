import './Precios.css'

export default function Precios() {
  return (
    <div className="precio">
      <div className='valor-tarjeta1'>
          <h1 >Valor de la tarjeta</h1>
          <h2>Menores de 4 años:</h2>          <p>Gratis</p>
        </div>
        <div className='valor-tarjeta2'>
        <h2>De 4 a 12 años:</h2>          
        <p>Hasta 25 de Junio: $20.000 </p>
        <p>Hasta 20 de Septiembre: $23.000</p>
        <p>Hasta 25 de Octubre: $26.000</p>
        </div>
        <div className='valor-tarjeta3'>
        <h2>De 12 años en adelante:</h2>          
        <p>Hasta 25 de Junio: $28.000 </p>
        <p>Hasta 20 de Septiembre: $31.000</p>
        <p>Hasta 25 de Octubre: $34.000</p>
        </div>
        <div className='valor-tarjeta4'>
        <h2>Alias:</h2>          
        <p>JUDEMARINIS</p>
        <p>Recomendamos poner como referencia tu nombre
</p>
        <p>Enviar comprobante al: 3516575608 </p>
        </div>
      </div>
   
  )
}
