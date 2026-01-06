// NOTE: IF FULLY UNCOMMENTED - THIS APP WON'T WORK

//! THE OLDEN DAYS METHOD - VANILLA JS
// document.querySelector("button").addEventListener("click", myFunction);

// ! VERSION 1 - WITH EVENT HANDLER  --> TIM'S PREFERENCE AS MORE READABLE & REUSABLE!
function App() {
  // this function is an event handler
  function handleClick() {
    console.log("I was cliqued.");
  }

  return (
    <>
      <h1>THIS IS AN EVENT</h1>
      <button onClick={handleClick}>CLICKEZ MOI!</button>
    </>
  );
}
export default App;

// ! VERSION 2
// function App() {
//   return (
//     <>
//       <h1>THIS IS ANOTHER EVENT</h1>
//       <button onClick={() => console.log("I was cliqued through arrow func.")}>
//         ARROW FUNCTION
//       </button>
//       <button
//         onClick={function () {
//           console.log("I was cliqued through trad func.");
//         }}
//       >
//         TRAD FUNCTION
//       </button>
//     </>
//   );
// }
// export default App;

// ! VERSION 3 - HANDLER WITH PARAMETER
// function App() {
//   // this function is an event handler
//   function handleClick(username) {
//     console.log(`Hello ${username}, you cliqued.`);
//   }

//   return (
//     <>
//       <h1>THIS IS YET ANOTHER EVENT</h1>
//       <button onClick={() => handleClick("Amorrrrr")}>CLICKEZ ici!</button> //the arrow function stops auto-run
//       <button onClick={() => handleClick("Cheriiii")}>CLICKEZ la!</button>
//     </>
//   );
// }
// export default App;
