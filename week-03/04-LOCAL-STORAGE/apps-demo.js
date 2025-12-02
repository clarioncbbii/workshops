console.log("HAWAIYU!");

//TODO: LOCAL STORAGE
//to store non-sensitive data we want to keep between user sessions (=data persistence)

//localStorage is an object
//in this object we have methods to store, read, delete data from local storage

//we can only store STRINGS in local storage

const userPreferences = {
  theme: "dark",
  font: "large",
  contrast: "high",
  colourBlindMode: true,
};

//TODO: Store new data in local storage

//STEP 1: stringify the data

const stringifiedPreferences = JSON.stringify(userPreferences);

//STEP 2: add stringified data to local storage
// local storage exists in the browser; without a DOM, we have no DOM and no local storage

localStorage.setItem("user preferences", stringifiedPreferences);

//setItem uses two parameters: the first is the key & the second is the value

//TODO: Read data from local storage

//STEP 1: get the data from local storage
//getItem uses one argument: the key

const storedPreferences = localStorage.getItem("user preferences");

//STEP 2: parse the stringified data to its original shape

const parsedReferences = JSON.parse(storedPreferences);
console.log(parsedReferences);

const theme = parsedReferences.theme; //wrangled (filtered) data

//TODO: I want to remove data from local storage

localStorage.removeItem("userPreferences");
