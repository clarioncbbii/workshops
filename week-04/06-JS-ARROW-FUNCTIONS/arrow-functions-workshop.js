//ARROW FUNCTIONS WORKSHOP

//traditional function
function add(a, b) {
  return a + b;
}

add(1, 2); // 3

//arrow function
const add = (a, b) => {
  return a + b;
};

add(1, 2); // 3

//Optionally, if the function body is a single line you can leave out the curly braces and the return keyword, returning the value directly
const add = (a, b) => a + b;

add(1, 2); // 3

// =========================================================================== //

//ASYNC ARROW FUNCTIONS
//arrow functions can also be asynchronous

//traditional function
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

//arrow function
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

async function main() {
  const posts = await getPosts();
  console.log("Posts:", posts);
}
main();

?????????????????????????????????????????