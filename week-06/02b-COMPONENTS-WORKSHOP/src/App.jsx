import "./App.css";
import Button from "./components/Button";
import GalleryImage from "./components/GalleryImage";

function App() {
  return (
    <>
      <div>
        <h1>HOLA, BUENAS TARDES, BIENVENIDOS!</h1>
      </div>

      <div>
        <Button />
        <GalleryImage />
        <GalleryImage />
        <GalleryImage />
        <GalleryImage />
      </div>
    </>
  );
}
export default App;
