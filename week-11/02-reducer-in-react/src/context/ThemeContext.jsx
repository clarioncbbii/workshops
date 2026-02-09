//TODO: add a reducer function to contain all of our state possible updates
// we will add the reduced function here, so it can interact with the state

//import useReducer
import { createContext, useContext, useReducer } from "react";

//* Declare a reducer function first to contain our conditional logic (which before refactoring is in  HeroSection.jsx)

//- the state parameter represents our state value
//- the action parameter contains a property called type. Type will store a state update value
// state and action are objects
//! PLEASE, ABEG, BIKONU ... WRITE THEM IN THE SAME ORDER!

function themeReducer(state, action) {
  //conditional logic to update the value of the theme stae
  //if statement or switch...case
  //the return keyword breaks the execution of the code; we do not need the break keyword

  switch (action.type) {
    case "light":
      return { theme: action };
    case "dark":
      return { theme: (state.theme = "dark") };
    case "colourblind":
      return { theme: (state.theme = "colourblind") };
    case "dyslexia":
      return { theme: (state.theme = "dyslexia") };
    case "default":
      return { theme: (state.theme = "light") };
  }
}

//* REFACTORING:
// switch (action.type) {
//   case "light":
//   case "dark":
//   case "colourblind":
//   case "dyslexia":
//     return { theme: action.type };
//   case "default":
//     return { theme: action.type };
// }

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  //replace our useState hook with a useReducer hook
  //dispatch is how we are going to trigger the state update --> we will specify which update depending on the action type

  // const [theme, setTheme] = useState("light"); --> we refactor this with useReducer
  const [state, dispatch] = useReducer(themeReducer, { theme: "" });

  //update the value prop to be state and dispatch
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
