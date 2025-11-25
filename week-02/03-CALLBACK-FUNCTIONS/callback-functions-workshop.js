console.log("Hawaiyu!");

//CALLBACK FUNCTIONS

function notifyUser() {
  console.log("notifyUser function was called!");
}
notifyUser();

console.log(notifyUser);

function myCallbackFunction(notifyUserCallback) {
  console.log("My callback function works.");
  notifyUserCallback();
}
myCallbackFunction(notifyUser);

//NOTE
//Notice that we don’t use () when we pass a function as a parameter, but rather when we want to run the function - inside the argument
//when using the name of the function as a reference, we do not use brackets/syntax
//in the action part of the block of text
