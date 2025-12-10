// Examples of arrow functions
//! Note: by removing the signposts traditional functions give us, the syntax becomes harder to understand. So be mindful when using them to understand what is happening.

//TRADITIONAL FUNCTION
function add(a, b) {
  return a + b;
}

//ARROW FUNCTION
//in arrow functions we can imply the keyword return
const add = (a, b) => {
  return a + b;
};

//can be simplified even further
const add = (a, b) => a + b;

// ============================

//traditional function
function greet(username) {
  console.log(`Welcome ${username}`);
}

//arrow function
//when there is one parameter only, you can omit the regular brackets
//Prettier adds the brackets around username, but you do not need them
// e.g. const greet = username => console.log(`Welcome ${username}`);

const greet = (username) => console.log(`Welcome ${username}`);

// ============================

const array = [1, 2, 3];

//traditonal function
array.forEach(function (item) {
  console.log(item);
});

//arrow function
//we can also use the same princinples to rewrite callback functions with the arrow functions syntax
//again, Prettier adds the brackets around item, but you do not need them
// array.forEach(item => console.log(item));

array.forEach((item) => console.log(item));

//even in the simplified format, the rules of scope still apply

//! For more examples for different syntax scenarions, visit Arrow functions on MDN

// ============================ MANNY'S PREFERENCE ============================ //
//He uses arrow functions mainly for callback functions and anonymous functions or when using methods
//When declaring a function, with a name as a block of code, he will use traditional functions for the structure it provides

//! WHEN WORKING AS A GROUP, AGREE COLLECTIVELY WHAT SYNTAX WILL BE USED
//EVERYONE NEEDS TO BE COMFY WITH ARROW FUNCTIONS IF THEY ARE THE AGREED SYNTAX
