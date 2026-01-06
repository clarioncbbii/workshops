// import { useState } from "react";

// * The useState hook looks like this:
function App() {
  const [myState, setMyState] = useState(0);
  return <div>{myState}</div>;
}

export default App

//* The useState hook with a practical example:
// function App() {
//   const [myCounterState, setMyCounterState] = useState(0);

//   function incrementCounter() {
//     setMyCounterState(myCounterState + 1);
//   }

//   return (
//     <div>
//       <p>{myCounterState} cookies.</p>
//       <button onClick={incrementCounter}>Get another cookie</button>
//       {/* this does the same as: button.addEventListener('click', incrementCounter) */}
//     </div>
//   );
// }

// export default App;

// ==========================  WORKSHOP ===================== //

// TODO:
// (1) Create a react app that has a state variable that increases on the click of a button
// (2) Try adding a button that decreases the number on click
// (3) Add an event listener that resets the number to 0 when you click the number itself

// import { useState } from "react";
import ButtonPlus from "./components/ButtonPlus";
import ButtonMinus from "./components/ButtonMinus";

function App() {
  return (
    <>
      <h1>BUTTONS WITH STATE</h1>
      <ButtonPlus />
      <ButtonMinus />
    </>
  );
}

export default App;
