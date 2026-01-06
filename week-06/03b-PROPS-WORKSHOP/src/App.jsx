import "./App.css";
import ImageFrame from "./components/ImageFrame";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <>
      <div>
        <AudioPlayer
          src="./Blissful_Sax.mp3"
          type="audio/mp3"
          autoplay
          muted
          loop
          controls
        />
      </div>

      <div className="gallery">
        <ImageFrame src="./beach.webp" alt="beach" caption="A beach" />

        <ImageFrame src="./fruit.webp" alt="fruit" caption="Some fruit" />

        <ImageFrame
          src="./pepper.webp"
          alt="pepper"
          caption="Scotch bonnet pepper"
        />

        <ImageFrame
          src="./road-nigeria.webp"
          alt="road"
          caption="A long road"
        />

        <ImageFrame src="./sunset.webp" alt="sunset" caption="The sunset" />

        <ImageFrame
          src="./trees-nigeria.webp"
          alt="trees"
          caption="Some trees"
        />

        <ImageFrame
          src="./village.webp"
          alt="village"
          caption="A remote village"
        />

        <ImageFrame
          src="./waterfall-nigeria.webp"
          alt="waterfall"
          caption="A beautiful waterfall"
        />
      </div>
    </>
  );
}
export default App;
