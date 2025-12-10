//TODO: Turn the following traditional functions into arrow functions:

//==============================// 1

//traditional function
function greet(name) {
  return `Hello ${name}`;
}

//arrow function
const greet = (name) => {`Hello ${name}`};

//==============================// 2

//traditional function
function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });
}

form.addEventListener("submit", handleSubmit);

//arrow function 
??????????????????????????????????????????

const handleSubmit = (event) => event.preventDefault();



//==============================// 3

button.addEventListener("click", function () {
  let count = 0;
  count += 1;
});

//==============================// 4

games.forEach(function (game) {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

//==============================// 5

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}
