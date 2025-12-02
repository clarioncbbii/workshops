console.log("HAWAIYU!");

//TODO: FETCH: REQUESTING DATA FROM APIs

//MAKING A REQUEST
async function getData(url) {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}
getData("https://jsonplaceholder.typicode.com/photos");

//RENDER IMAGE
const imageContainer = document.getElementById("image-container");

function createImage(imageURL) {
  const image = document.createElement("img");
  image.src = imageURL.image;
  image.alt = "Who knows what I'll find?";
  foxContainer.appendChild(image);
}
