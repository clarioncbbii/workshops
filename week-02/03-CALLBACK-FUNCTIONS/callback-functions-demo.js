//CALLBACK FUNCTIONS
//A callback function is a function that works as the argument of another function

//EXAMPLES

//EVENTS
//event listener
//event handler --> is a callback function; because the event handler is an argument of the event listener

//the callback function we declared in here is not reusable
//b/c it has no name (=anonymous function) - WITHOUT A NAME YOU CANNOT REUSE A FUNCTION!
button.addEventListener("click", function () {
  //action we want to take place
});

function handleClock() {
  //action
}

//Two different behaviours determined by syntax; it depends on what you are trying to achieve
button.addEventListener("click", handleClick); // handleClick runs when the user click the button -> preferred behaviour
button.addEventListener("click", handleClick()); // handleClick runs when the browser reads line 19

//EXAMPLE
//TODO: I want to say the user's name and greet the user in the console
// - Say the user's name
// - Greet the user

function sayUsername(username) {
  console.log(`Your username is ${username}`);
}

function greetUser(greeting) {
  console.log(`${greeting}`);
}

function welcomeMessage(
  greetUserParameter,
  sayUsernameParameter,
  usernameParameter,
  greetingParameter
) {
  //TODO: I want to control the greetUser & sayUSername functions
  greetUser(greetingParameter);
  sayUsername(usernameParameter);
}

//Now put all the pieces together:

welcomeMessage(greetUser, sayUsername, "Manny", "good afternoon");

//TODO: (!) Check Manny's Github for the full explanation if lost
