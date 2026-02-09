//TODO: set up a context to store and manage our theme state

//import context tools
import { createContext, useContext, useState } from "react";

//* declare all yorur relevant state
//! we will condense all of these variables below in our provider function
// const [light, setLight] = useState("light");
// const [dark, setDark] = useState("dark");
// const [colourblind, setColourblind] = useState("colourblind");
// const [dyslexia, setDyslexia] = useState("dyslexia");

//* declare context
// we need to declare a variable to name our context and give it an initial value
const ThemeContext = createContext("light");

//* provide our context to our whole app --> we use a provider for this
// in the provider function, I will set up the elements I want to provide to our app
// we need a placeholder in our provider to represent our app at this level --> using the keyword 'children'

export function ThemeProvider({ children }) {
  //declare our state in here **inside the provider** --> we are condensing all our state and making it avaialble to our ThemeProvider
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//* (OPTIONAL) - Custom hook that will allow us to access all the values stores in state (this state is part of context)
// you need to call the useContext hook before you can use the values stored in context
//! to avoid the fast refresh error, it is better to create a custom hook in a seperate file --> see Week 7 (usePoll.js in Utils folder)

export function useTheme() {
  return useContext(ThemeContext);
}
//* From this point on my context is fully implemented!
// I can now import useTheme wherever I need to access the values in my context
