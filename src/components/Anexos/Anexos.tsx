import './Anexos.css';

export default function Anexos() {
  const redirectToSpotify = () => {
    window.open("https://open.spotify.com/playlist/1Ms714bHwcSGwjHyitGSLO?si=68266cee2d0b4f2e&pt=43b171126cf8a014cb314474d66a023d", "_blank");
  };

  const redirectToFotos = () => {
    window.open("https://bit.ly/Recuerdos15sMarti", "_blank");
  };

  return (
    <div className="Anexos">
      <a href="https://open.spotify.com/playlist/1Ms714bHwcSGwjHyitGSLO?si=68266cee2d0b4f2e&pt=43b171126cf8a014cb314474d66a023d" target="_blank">
        <img
          src="spotify.png"
          alt="Spotify"
          onClick={redirectToSpotify}
          className="spotifyImg"
          style={{
            width: '300px',
            height: 'auto'
          }}
        />
      </a>
      <a href="https://bit.ly/Recuerdos15sMarti" target="_blank">
        <img
          src="fotos.png"
          alt="Fotos"
          onClick={redirectToFotos}
          className="fotosImg"
          style={{
            width: '300px',
            height: '444px',
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
      </a>
    </div>
  );
}
