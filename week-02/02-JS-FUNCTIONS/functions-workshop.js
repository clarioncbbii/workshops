console.log("Hawaiyu!");

//DECLARING FUNCTIONS
function sayHello() {
  console.log("Hawaiyu!");
}

//CALL FUNCTION or INCITE FUNCTION
//Using the brackets after the function name executes the function – it runs the code defined inside the function. You can run it as many times as you want.
sayHello();
sayHello();
sayHello();

//ARGUMENTS
//Functions can accept any number of “arguments”. When defining a function, we name each of the arguments. They’re similar to other variables, except they’re only available inside this function.
//When we call the function, we pass in the information that will be represented by each argument in the function.

// (!) TO SIMPLIFY IT IN MY MIND:
//if: a parameter = the variable
//then: argument = value of the variable
//Manny's way:  function functionName (parameters){arguments}

//TODO SAY HELLO TO A USER:
function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("Rubinette");
sayHelloTo("Arabella");
sayHelloTo("Noala");

// REMEMBER: (!) ** A function can accept any number of arguments ** (!)

//TODO: SAY HELLO TO A USER IN DIFFERENT LANGUAGES:
function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}
greet("Buenas tardes", "Rubinette");
greet("Bonne matin", "Arabella");
greet("Buongiorno", "Noala");

//A FEW NOTES TO SELF:
//Use the functionName when calling the function - must match identically
//how ever many parameters there are, you must have the same number of arguments in the function call
//the code within the {} = the action or the argument
//argument is the data in the brackets in the function call

//RETURNING VALUES
//return operation does not replace console.log
//return keyword makes the line it is situated available outside the code block
//implies use of code in a different area of the code
function add(a, b) {
  return a + b;
}

add(4, 6);
console.log(add(4, 6));

// If you want another way of thinking about this, we could say that '1 + 5' returns the number 6! In programming, we need to be explicit and say - hey, this is the 'returned' result of all the operations we've done in a function.

const result = add(4, 6);
console.log("The result is", result); //result = 10

const otherResult = add(2, 10);
console.log("The other result is", otherResult); //result =12

//TODO: Create a function called multiply
function multiply(a, b) {
  return a * b;
}

multiply(3, 5);
console.log(multiply(3, 5));

//TODO: Create a function called subtract
function subtract(a, b) {
  return a - b;
}

subtract(3, 5);
console.log(subtract(3, 5));

//TODO: Create a function called divide
function divide(a, b) {
  return a / b;
}

divide(3, 5);
console.log(divide(3, 5));

//TODO: Create a function called calculate
//Remember === means equal in both value and data type
function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  }
}
console.log(calculate(1, 2, "*"));

//TODO: Write function which converts miles to kilometers

const constant = 1.6;
function convertMiles(distance) {
  console.log(
    "Your distance of " +
      distance +
      " kilometers is " +
      distance / constant +
      " miles."
  );
}

convertMiles(10);

//stretch goal: I have no idea how to achieve it
