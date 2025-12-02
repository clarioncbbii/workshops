console.log("HAWAIYU!");

//TODO: TIMERS
//TYPES OF TIMERS:
//timeout -> after the time runs out, an action happens
//interval -> an action happens after a specific amount of time periodically and never stops (unless you stop it)

//(!) TO DECIDE WHAT TYPE OF TIMER YOU NEED, ASK THE QUESTION: HOW MANY TIMES DO I WANT TO EXECUTE THE ACTION?

//TODO: EXAMPLE - timeout
//I want to log a message in the console after 5 seconds
// setTimeout (function) (){
//    action I want to execute when the timer finishes
//  }, delay in milliseconds

setTimeout(function () {
  console.log("It's time - 5 seconds have passed!");
}, 5000);

//TODO: EXAMPLE - interval
//I want to remind myselfto drink water every 3 seconds
// setInterval (function) (){
//    action I want to execute periodically
//  }, delay in milliseconds

setInterval(function () {
  console.log("It's time - drink watah, your kidneys need it!");
}, 3000);

//TODO: I want to remind myself to pay my rent every two seconds for a total of 10 seconds
//we can combine the interval and timeout
const rentReminder = setInterval(function () {
  console.log("Oya, pay rent sha!");
}, 2000);

setTimeout(function () {
  clearInterval(rentReminder);
  //clearInterval stops the interval
}, 10000);

//(!) TIMERS ARE ASYNC - REMEMBER THIS!
//(!) in Terminal, use CTRL+C to stop the execution
