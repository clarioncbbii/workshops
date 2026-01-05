import "./App.css";

function App() {
  //javascripts
  const username = "Firecrackeress";

  //HTML (using JSX)
  return (
    <>
      <div className="greetings">
        <h1>HAWAIYU!</h1>
        <p>HUZZAHHHHHHH! This is my FIRST REACT APP! </p>
        <p>Welcome to my domain {username}!</p>
        <p>
          Gaze upon this marvel, tis Javascript inside our HTML - without DOM
          MANIPULATION ... HAH! One plus three equals {1 + 3}
        </p>
      </div>

      <div className="button">
        <button>CLICK ME</button>
      </div>

      <div className="marquee">
        <marquee behavior="sliding" direction="left">
          TESTING MY LIL CAROUSEL FOR THE PURPOSES OF THE REACT WORKSHOP - IT
          WORKS!
        </marquee>
      </div>
    </>
  );
}
export default App;
