// function App() {
//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = numbers.map((number) => number * 2);
//   console.log(doubledNumbers);

//   return (
//     <>
//       <p>{doubledNumbers}</p>
//       {/* [2, 4, 6, 8, 10] */}
//     </>
//   );
// }
// export default App;

// ================================================================== //

export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  const htmlItems = items.map((item) => <li key={item}>{item}</li>);

  return <ul>{htmlItems}</ul>;
}
