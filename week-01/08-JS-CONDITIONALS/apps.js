console.log("Hello World!");

//CONDITIONALS
//we will check a condition: we will perform a task only if the condition is applicable

//STRUCTURE:
// if (condition) {
// action
// }

//example: If weather is rainy, I will carry my umbrella
//write symbols first, then add the content!

// (!) ATTENTION:
// = used for value assignment
// == is equal operator
//let weather = "rainy";
//if (weather == "rainy") {
//  console.log("I will carry my umbrella");
// }

//The condition is unmet, so code is skipped by JS:
//weather = "sunny";
// if (weather == "rainy") {
//  console.log("I will carry my umbrella");
// }

// if (myVariable) {}
// So, if (username) {
// console.log("Welcome ") + username
// } else {(console.log ("Error: no user found.")
// }
//example of good UX (=user experience)

let weather = "sunny";
if (weather == "rainy") {
  console.log("I will carry my umbrella!");
} else if (weather == "sunny") {
  console.log("Enjoy the sunshine, love!");
} else if (weather == "foggy") {
  console.log("Keep your eyes on the road - doors and corners!");
} else {
  console.log("Check the weather forecast before you head out oo, tenks!");
}
//GOOD PRACTICE: the last else statement is a catch-all which covers all the conditions we did not account for
//Once the browser finds a condition that is true, it will stop executing the rest of the conditions
//If a condition is false, the browser will skip the actions and try the next condition.

//EXAMPLE:

let apples = 6;
let pears = 8;
let cherries = 6;

//TODO: I want to compare the quantities of the fruits in my fruit bowl
//If the number of apples is <1, send a message to buy more apples
// less than is a comparison operators '<'
if (apples < 1) {
  console.log("Buy more apples, you silly goose!");
} else if (apples > pears) {
  console.log("Easy on the pears when you go shopping though, istoomachhh!");
} else if (apples === cherries) {
  console.log("Thou hast achieved true balance.");
} else {
  console.log("Check the weather forecast before you head out oo, tenks!");
}

// (!) the order of conditions really matters - whichever is met first will stop the script from running further!

// the double equals '==' compares value only
// the triple equasls '===' compares values and data type
//TIP: use '===' to have full control of your data; avoids JS messing up your data types

// '>=' is an operator => is a fat arrow; DO NOT MIX THEM UP! - ARROW FIRST, THEN EQUAL SIGNS!
// '!=' is not equal to

//to check more than one operator use '&&' which is the and operator; both conditions have to be met!
