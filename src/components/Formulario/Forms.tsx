import './Forms.css';


export default function Forms() {
  const redirectToGoogleForms = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeovlhXhyzT4kcL07ciHa3y6ihyLLHTBUONoJVufkOjqjqKWw/viewform', '_blank');
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
