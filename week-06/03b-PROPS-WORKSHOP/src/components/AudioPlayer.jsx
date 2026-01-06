function AudioPlayer({ src, type }) {
  return (
    <audio autoplay muted loop controls>
      <source src={src} type={type} />
    </audio>
  );
}

export default AudioPlayer;
