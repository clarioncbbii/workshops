console.log("Hawaiyu!");

//GLOBAL v. FUNCTION SCOPE

//GLOBAL SCOPE
//A variable that has been declared globally is accessible from any part of a program; can be used by any function or block of code.

myName = "Nene";

function sayHello1() {
  console.log("Hello " + myName + "!");
}
sayHello1();
console.log(myName);

//FUNCTION SCOPE
//Variables defined inside a function are only available inside that function. They’re not available outside of the function.

function sayHello2() {
  const myName = "Nina";
  console.log("Hello " + myName + "!");
}
sayHello2();

console.log(myName);

//TODO: MINI CHALLENGE

//Create a variable called favoriteColour and assign it a string value in the global scope (outside of any function).

const favoriteColour = "Black";
console.log(favoriteColour);

function printColour() {
  const favoriteColour = "White";
  console.log(favoriteColour);
}

printColour();
