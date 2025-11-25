console.log("Hawaiyu!");

//FUNCTIONS
//Organise complex tasks
//Reusable

//EXAMPLES

//TODO: Say welcome in the console

//STRUCTURE: function functionName() {}
function sayWelcome() {
  console.log("Welcome");
}

//TODO: Say the name of the user in the console
function sayName() {
  console.log("Shey you be Nene");
}

//For a function to execute, we need to invoke it (=call it)
//function invocation or function call
//Functions being reusable = I can call a function as many times as I need (no need to rewrite code)
sayWelcome();
sayWelcome();
sayWelcome();
sayName();
sayName();

//NOTE: Browsers skip functions until it finds the call

//PARAMETERS
//A parameter is a placeholder in our function that we can replace later with the actual value. This makes our function more reusable.
//Parameters work like variables -> they store one piece of data & we can use the parameter name to represent the actual value
function sayName(username) {
  console.log(`Your name is ${username}`);
}

//ARGUMENT
//-> a value assigned to a parameter.
//we add the argument(s) in the function call
sayName("Nene");
sayName("Nnamdi");

//SCOPE
//scope is the area where my code is available
//two types of scope:
//-> global scope; a value is available anywhere in my code
//-> block scope; a value is available within its code block

//the scope of 'username' in the function further up is block scope; I can only use it inside its own function
let username = "Nene"; //this variable has global scope; I can use it anywhere
console.log(username);

//TODO: say the user's location
function sayLocation(myLocation) {
  let username = "Nina";
  console.log(`${username}, your location is ${myLocation}`);
}

sayLocation("Leics");

//(!) BAD PRACTICE - USE UNIQUE VARIABLE NAMES!

//TODO: say username and location in console

username = "Arabella";
userLocation = "Hawaii";

function sayUsernameLocation(username, userLocation) {
  console.log(`${username}, your location is ${userLocation}. Welcome!`);
}
sayUsernameLocation("Arabella", "Hawaii");
sayUsernameLocation("Rubinette", "Bora Bora");

//What if we have a block-scoped value that we want to use outside its scope?
//We can make a block-scope value available using 'return'

//TODO: Add two numbers and log them

// function add(a, b) {
//  console.log(a + b);
// }

// add(2, 5);
//console will show 7

function add(a, b) {
  return a + b;
}

console.log(add(4, 6));

//my console can log the addition a +b because with the keyword retur, I made that operation available outisde its scope
//return is not an equivalent of console.log
