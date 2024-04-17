export default function Anexos() {
  const redirectToSpotify = () => {
    window.open("https://open.spotify.com/playlist/1Ms714bHwcSGwjHyitGSLO?si=68266cee2d0b4f2e&pt=43b171126cf8a014cb314474d66a023d", "_blank");
  };

  const redirectToFotos = () => {
    window.open("https://bit.ly/Recuerdos15sMarti", "_blank");
  };

  return (
    <div className="Anexos">
      <img
        src="spotify.png"
        alt="Spotify"
        onClick={redirectToSpotify}
        className="spotifyImg"
      />
      <img
        src="fotos.png"
        alt="Fotos"
        onClick={redirectToFotos}
        className="fotosImg"
      />
    </div>
  );
}
