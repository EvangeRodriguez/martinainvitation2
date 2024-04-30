import './Forms.css';


export default function Forms() {
  const redirectToGoogleForms = () => {
    window.open('https://forms.gle/NfYYR7XPy9AKgcYc9', '_blank');
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
 