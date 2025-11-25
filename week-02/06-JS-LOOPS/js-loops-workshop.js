console.log("Hawaiyu");

//FOR LOOPS

for (let i = 1; i <= 5; i++) {
  console.log(
    `This is a task repeated multiple times. Check how many! -->${i}`
  );
}

//WHILE LOOPS
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

//TODO:Create a while loop that runs until Math.random() returns a value lower than 0.1. If the value is lower than 0.1, set keepLooping to true which will stop the loop.
// set keepLooping to false with 10% chance
// Math.random() returns a random value between 0 and 1

let keepLooping = false;
let i = 0;
while (keepLooping === false) {
  console.log("Iteration", i);
  keepLooping = Math.random() < 0.2;
  i++;
}
// ??????? not entirely sure what is going on with above loop tbh //

//LOOPING OVER ARRAYS
const faveFoods = ["jollof", "egusi", "puffpuff", "chinchin", "chocolate"];

//'for' LOOP
for (let i = 0; i < faveFoods.length; i++) {
  console.log(faveFoods[i]);
}

//ALTERNATIVE SYNTAX; 'for ... of' LOOP
//the variable declared here has block scope only

for (let food of faveFoods) {
  console.log(food);
}

const favouriteNumbers = [12, 7, 44, 77, 490, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

//ALTERNATIVE SYNTAX; 'forEach' LOOP
//accepts a function as a parameter
//the function used here is an anonymous function

faveFoods.forEach(function (food) {
  console.log(food);
});

//also works by array index
faveFoods.forEach(function (food, index) {
  console.log(index, food);
});

// ============= MINI CHALLENGE ===============//

//CHALLENGE 1
//TODO: Create an array of your favourite animals, loop over the array and write it to the console. Try a 'for loop'

const faveBeasties = ["lion", "wolf", "rhino", "doe", "dove", "hind"];

for (let i = 0; i < faveBeasties.length; i++) {
  console.log(faveBeasties[i]);
}

//CHALLENGE 2
//TODO: Create an array of your favourite colours, loop over the array and write it to the console.Try a 'forEach loop'

const faveShades = ["black", "red", "purple", "blue", "gold", "silver"];

faveShades.forEach(function (colour) {
  console.log(colour);
});

// or

faveShades.forEach(function (colour, index) {
  console.log(index, colour);
});

//CHALLENGE 3
//TODO: Create an array of your favourite numbers, loop over the array and log each item to the console. Infinity is a number in JavaScript. (But learn how to kill your browser tabs in task/activity manager before you loop until i = Infinity!). Try a 'while loop'

const faveDigits = [12, 7, 44, 77, 490, Infinity];

// let number = 1;
// while (number <= 5) {
// console.log(faveDigits);
// number++;
// }

// not sure how to execute this tbh - beyond my current skill level
