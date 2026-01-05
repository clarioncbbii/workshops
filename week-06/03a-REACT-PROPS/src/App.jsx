import "./App.css";
import GalleryImage from "./components/GalleryImage";

function App() {
  return (
    <>
      <div className="gallery">
        <GalleryImage src="cat.jpg" alt="Sweet kittykats" />
        <GalleryImage src="snow.jpg" alt="A snowy view of London" />
        <GalleryImage src="otter.jpg" alt="Hungry lil otter" />
        <GalleryImage src="pup.jpg" alt="Fun-sized german shepherd" />
      </div>
    </>
  );
}
export default App;
