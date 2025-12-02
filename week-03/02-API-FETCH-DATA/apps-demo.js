console.log("HAWAIYU!");

// TODO: I want to request data from the Random Fox API

//The browser reads our code synchronously (top to bottom; no waiting time)
//Some actions in our code are asynchronous -> they take more time than the browser takes to be executed
//When we have an async action, if the browser executes it synchronously, we get a Promise -> the browser's way of letting us know it executed that code (but it did not wait for the fetch response!)

//to signal an action is async, we use async/await -> this only works for functions
//only functions can be made asynchronous b/c it is performing a task
//now we get a response object

async function getData(url) {
  // fetch() will get data from a specific API url
  const response = await fetch("https://randomfox.ca/floof");
  console.log(response);
  // translate (parse) data into JSON using the JSON method
  const data = await response.json(); //this is async
  console.log(data);
  //{image: 'https://randomfox.ca/images/38.jpg', link: 'https://randomfox.ca/?i=38'}
  //image: "https://randomfox.ca/images/38.jpg"
  //link:"https://randomfox.ca/?i=38"
  return data;
}

getData("https://randomfox.ca/floof");

//TODO: Use that data to render fox images on my website
const foxContainer = document.getElementById("fox-container");

function createFoxImage(foxUrl) {
  const image = document.createElement("img");
  image.src = foxUrl.image;
  image.alt = "Probs a very chuffed foxy";
  foxContainer.appendChild(image);
}

//if we run these functions like this, createFoxImage runs first, then getData, so the fox image url is not ready before the image is created and appended
// createFoxImage(getData());

//TODO: Creae a control function to run getData & createFoxImage in the order we want them to.
async function renderFox() {
  const foxData = await getData();
  createFoxImage(await foxData); //this function will not be called until the data is ready
}

renderFox();

//Extra: What if we had a very large API; how do we filter the data we want?
//TODO: I want to get a list of dummy users
//

async function getUsersData() {
  fetch("");
}
