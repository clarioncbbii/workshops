console.log("HAWAIYU!");

// ----------------------------------- //

//TODO (1): As a user, when I click a button, a message should display for 5 seconds to confirm the action occurred, before disappearing again.

const button1 = document.getElementById("button1");

button1.addEventListener("click", function () {
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is the message.";
  document.body.appendChild(paragraph);
  setTimeout(function () {
    paragraph.textContent = null;
  }, 5000);
});

// ----------------------------------- //

//TODO (2): As a user, when I click a button, a message should display for 5 seconds to confirm the action occurred, before disappearing again.

// ----------------------------------- //

//TODO: THINK OF IT AS A COUNTER WITH SECONDS TICKING ALONG

//If i press button 1, the counter starts from 1 to infinity

const startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
  const paragraph = document.createElement("p");
  let count = 0;
  paragraph.textContent = `${count}`;
  document.body.appendChild(paragraph);
  setInterval(function () {
    paragraph.textContent = `${count++}`;
  }, 1000);
  return setInterval;
});

// ----------------------------------- // ???????????????????????????????

//When I press another button, the counter ends

const stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", clearInterval(), 5000);

setTimeout(function (setInterval) {
  clearInterval();
}, 10000);
