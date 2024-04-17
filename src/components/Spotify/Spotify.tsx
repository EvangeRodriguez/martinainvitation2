import './Spotify.css';


export default function Spotify() {
  const redirectToGoogleForms = () => {
    window.open('https://open.spotify.com/playlist/1Ms714bHwcSGwjHyitGSLO?si=68266cee2d0b4f2e&pt=43b171126cf8a014cb314474d66a023d', '_blank');
  };

  return (
    <div>
      <img
        src="spotify.png"
        alt="Confirmar"
        onClick={redirectToGoogleForms}
        className="musica"
      />
    </div>
  );
}
