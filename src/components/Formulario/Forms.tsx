import './Forms.css';


export default function Forms() {
  const redirectToGoogleForms = () => {
    window.location.href = 'https://docs.google.com/forms/u/0/';
  };

  return (
    <div>
      <img
        src="buton.png"
        alt="Confirmar"
        onClick={redirectToGoogleForms}
        className="boton"
      />
    </div>
  );
}
