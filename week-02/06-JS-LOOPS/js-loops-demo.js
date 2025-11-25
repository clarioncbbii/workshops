console.log("HAWAIYU!");

//LOOPS
//We use loops to make repetitive tasks more efficient
//Consider the amount of times we want a task to be executed
//Different tools dependent on how many times

// (A) ========================================= //
//A LOOP TO USE WHEN WE KNOW HOW MANY TIMES WE WANT TO EXECUTE A TASK --> for loop

//TODO: STRUCTURE - FOR LOOPS
// keyword (config) {the actions}
//the config = the setup of the loop/the setup of the loop; consists of three elements
//the actions = what we want the loop to do

// initialisation; is the initial value that we'll use (repetition=0)
// condition; is what limits the loop/tells it how many times to run (or else it would infinitely run)
// afterthought; is the method by which we go from initialisation to condition (or else it would infinitely run)

// for (initialisation; condition; afterthought  ){
// task
// }

//TODO: FOR LOOPS

//EXAMPLES:
// for (let i = 0; i <= 2; i + 1) {}

//another way of writing the above using increment operator --> ++ (increases a variable's value by 1)
for (let i = 0; i <= 4; i++) {
  console.log(
    `This is a task repeated multiple times. Check how many! -->${i}`
  );
}

//TODO: I want to create 5 paragraphs in my DOM
//A COMPLEX TASK DIVIDED INTO SIMPLE STEPS
for (let i = 1; i <= 5; i++) {
  // create element
  const paragraph = document.createElement("p");
  // update the text content
  paragraph.textContent = `Paragraph ${i}`;
  // append the element to the DOM
  const container = document.getElementById("p-container");
  container.appendChild(paragraph);
}

//LOOPS AND ARRAYS

const colours = ["blue", "green", "purple", "red", "yellow"];

//TODO: I want to log in the console all the items in an array
// initial value at zero '0' to match the index value in the array
// we use the length property as our condition; which means the code will always be up to date, even if the array is updated
// also; using dynamic index value

for (let i = 0; i < colours.length; i++) {
  console.log(`Item: ${colours[i]}`);
}

//ARRAY METHODS
// forEach() --> method has an embedded for loop ; setup comes with the method
// just need to tell the method the array and what action I want performed with each item
// this method is not customisable; but has its use cases

colours.forEach(function (item) {
  console.log(item); //this parameter represents each item in the array
});

//for ... of --> alternative syntax
//simplified way of running a for loop; we declare a vaiable to represent each item in the array and define where it will be
//again; this method is not customisable
for (let colour of colours) {
  console.log(colour);
}

// (B) ============================================================= //

//A LOOP TO USE WHEN WE DON'T KNOW HOW MANY TIMES WE WANT TO RUN A TASK --> while loop
//not often used in modern development b/c of high risk of infinite loop

//TODO: STRUCTURE - WHILE LOOPS
// while (condition) {
//  task;
// }

//TODO: While the user is not logged in, ask for login info
//if the condition is never met; the loop will run forever

// while (!user) {
//  console.log("Please, log in!");
// }

//we will learn more complex ways to make this method unnecessary. For now, if we have a use case, this is the way.
