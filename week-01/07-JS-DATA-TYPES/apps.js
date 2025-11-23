console.log("Hello World!");

// DECLARING VARIABLES
let myName = "Nene";
console.log(myName);

const myAge = 30;
console.log(myAge);

myName = "Nnamdi";
console.log(myName);

variableOne = 1;
console.log(variableOne);

variableTwo = 2;
console.log(variableTwo);

variableThree = 3;
console.log(variableThree);

variableFour = 4;
console.log(variableFour);

variableFive = 5;
console.log(variableFive);

console.log(
  `As babies, we learn to count starting with ${variableOne},${variableTwo},${variableThree},${variableFour},${variableFive}.`
);

//PRIMITIVE DATA TYPES:

//NUMBERS
let twix = 10;
let snickers = 5;
let goodies = twix + snickers;
console.log(goodies);

//STRINGS
let myFirstName = "Nene";
let myLastName = "Nnoruka";
let myFullName = myFirstName + " " + myLastName;
console.log(myFullName);

myFullName = `${myFirstName} ${myLastName}`;
console.log(myFullName);
console.log(
  `My surname ${myLastName} is ${myLastName.length} characters long.`
);

//BOOLEANS
let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);

//typeof OPERATOR
console.log(typeof myName);
console.log(typeof snickers);
console.log(typeof isTrue);

//UNDEFINED & NULL VALUES
let mySleep;
console.log(mySleep);
let myRest = null;
console.log(myRest);

//COMPARISONS

let val1 = 1;
let val2 = 2;

let is1GreaterThan2 = val1 > val2;
let is1LessThan2 = val1 < val2;
let is1EqualTo2 = val1 === val2;
console.log(is1GreaterThan2);
console.log(is1LessThan2);
console.log(is1EqualTo2);

let myFavouriteNigerianFood = "jollof";
let myFavouriteNigerianSideDish = "plantain";
let timeLapsedSinceLastTasting = 7;
console.log(myFavouriteNigerianFood);
console.log(myFavouriteNigerianSideDish);
console.log(timeLapsedSinceLastTasting);

const sentenceTest = `My favourite Nigerian dish is ${myFavouriteNigerianFood} with a side of ${myFavouriteNigerianSideDish}. I could eat it everyday! Unfortunately, it has been more than ${timeLapsedSinceLastTasting} days since I last tasted this delicacy of my youth.`;
console.log(sentenceTest);
