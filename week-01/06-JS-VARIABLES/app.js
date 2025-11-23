// TODO: I want to log a message to the console
console.log("Hello world!");

// VARIABLES
// we use variables to store data -> one piece of data at a time

// STRUCTURE: let OR const variableName = value (see examples)
//  variable declarations:

let myName = "Nene";
let boolLight = "true";
let myAge = "30";

// TODO: I want to log a variable to the console
// The variable name represents the value
console.log(myName);

// TODO: I want to log my name and age to the console as part of a message
// concatenation -> chaining more than one value together
// console.log ("My name is Nene and I am 30 years old.")

console.log("My name is " + myName + " and I am " + myAge + " years old.");
// We can update variable values if they are declared with the keyword 'let'. If it is a 'const' variable, you CANNOT change the value - will cause error

myName = "Nnamdi";
myAge = "37";

// EXTRA: template literals
// How can we refactor (rewrite) the above code easier? this way:
console.log(`My name is ${myName} and I am ${myAge} years old.`);

// Instead of the 'let', use 'const' when you do not want a variable to change. This value can then not be updated.
// You cannot re-declare a variable with the same name twice - you have to pick one.
