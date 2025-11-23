// TODO: I want to add a message to the console

console.log("Hello world!");

// variables
// we use variables to store data -> one piece of data; can be any length

let myName = "Nene";

console.log(myName); // Nene

myName = "Nnamdi";

console.log(myName); // Nnamdi

//STRING -> TEXT - you can use any type of 'quote symbol'
// "Nene"
// 'Nene'
// `Nene`

let myAge = 30; //number

console.log(myAge); // 48

let isAnAdult = true; //boolean type -> true or false

// OPERATORS
let apples = 5;
let pears = 6;
let cherries = 3;

// TODO: I want to know the total of apples and pears

//The variable called 'total' is the addition of the other 2 variables, 'apples' + 'pears'
let total = apples + pears;

console.log(total);
console.log("The total is " + total); //=a string
console.log("The total is", total); //part 1 = a string; part 2 = a number
console.log(`The total is ${total}`); //=a string; template literals require backticks - not optional to change

// You can do maths in JavaScript - using below operator:
// sum = +
// minus = -
// multiply = *
// divide = /

//TODO: I want to know the total of apples, pears and cherries - two ways to do this:

let myNewTotal = apples + pears + cherries; //declare a new variable
console.log(total + cherries); //assign a new value to total

//EXTRA -> DATA COERCION
// JS is a dynamically tped language, meaning that if I use a datatype, JS recognises a datatype without me telling it what datatype it is. Other languages need to be told the value type we are storing e.g. TypeScript, C#, etc.
//When in doubt, JS will change any data type into a string. (a data type more convenien for the operation it needs to perform)

let myNumber = 5;
let myOtherNumber = "5";
//operators can be words also - they will come up in the same colour on VSCode
//typeof operator -> tells us the data type stored in a variable (use when unsure)

//TODO: I want to log in the console the data type of myNumber and myOtherNumber
console.log(typeof myNumber); //number
console.log(typeof myOtherNumber); //string - JS know when you use quotes, it is a string

//PRIMITIVE DATA TYPES - UNDEFINED & NULL
console.log(typeof myRole); //undefined
myRole = "instructor"; //no longer undefined; has a value now, data type is a string

let myLocation = null; // null is a value: the value of nothing/empty (is not zero!)
console.log(typeof myLocation); //data type is object b/c of how nothing is represented
