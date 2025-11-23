console.log("Hello world!");

alert("Hawaiyuuuuuu");

//EVENTS
//STRUCTURE: -> event handler & event listener

//EVENT LISTENER
//select the DIOM element we want
// querySelector () OR getElementById ()

const button = document.querySelector(".clickBtn");
console.log(button.textContent);
//CHECK WE ARE TAREGTING THE RIGHT BUTTON!
//Hence the use of a class name, IF THERE ARE MULTIPLE BUTTONS

//addEventListener () -> to give a DOM element a listener
//addEventListener needs two arguments: the event type (in a string) & the function that will be executed when the event happend

button.addEventListener("click", function (event) {
  console.log(event);
});

???????????????????

//ACTION
console.log("Dem a click le bouton eh!", function (event) {});

//TODO: I want to implement an event, so when the user clicks on an image, the title of the image appears on the screen
//STEP 1: Create the element -> IMAGE
//STEP 2: event listener -> CLICK
//STEP 3: event handler -> DOM MANIPULATION
//this is best practice when translating an idea into code; break it down into steps

const kittyImage = document.querySelector("img");
console.log(kittyImage);

kittyImage.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiIet2MtWtQQXJ9sK-pfXmwBoJ7pZSjEl-w&s";

kittyImage.addEventListener("hoover", function (event) {});
