// import express from node_modules
import express from "express";

//instantiate our express app
const app = express();

//allow our server to
app.use(express.json());

//pretend we have a database (but we will just write some bird names in an array)
const data = [
  { name: "Robin", type: "garden", size: "small", cuteFactor: 900 },
  { name: "Puffin", type: "sea", size: "medium", cuteFactor: 1000 },
  { name: "Peacock", type: "farm", size: "medium", cuteFactor: 10 },
  { name: "Toucan", type: "jungle", size: "medium", cuteFactor: 8 },
  { name: "Crow", type: "corvid", size: "medium", cuteFactor: "800" },
  { name: "condor", type: "mountain", size: "larg", cuteFactor: 3 },
  { name: "blackbird", type: "garden", size: "small", cuteFactor: 75 },
  { name: "Magpie", type: "crow-family", size: "small-medium", cuteFactor: 0 },
  { name: "Golden Eagle", type: " mountain", size: "large", cuteFactor: 500 },
  { name: "Penguin", type: "flightless", size: "medium", cuteFactor: 80 },
  { name: "Porg", type: "sci-fi", size: "small", cuteFactor: 5000 },
  { name: "hawk", type: "prey", size: "medium", cuteFactor: "999" },
];

//create a root route (endpoint) - e.g. http://localhost:8080/
// similar to event listener
// e.g. button.addEventListener ("click", function (event){})

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude -.O? He he he!");
});

// GET/birds route
//the URL bar can only do 'GET' - it is not allowed to
app.get("/birds", function (request, response) {
  response.json(data);
  console.log(`Nene was here sha...`);
  //this console.log does not show in the browser console; just for you to know it works
});

// POST/birds route
//post is identical to get; just uses a different method
//we need to use a tool for POST requests - e.g. Thunder Client or Postman

// app.post("/birds", function (request, response) {
//   response.json(`This is the POST birds route`);
// });

//POST/birds route (but this one is to add a bird)
//this doesn't actually work b/c we do not have a database yet
app.post("/birds", function (request, response) {
  // here we might add something to the database (because this is a POST request after all)
  response.json("This is the POST/birds route");
});

//POST endpoint, that receives data from the client - browser, Postman, Thunder Client, VSCode, etc.

// app.post("/add", function (request, response) {
//   response.send(`Post add`);
//   console.log(request);
// });

app.post("/add", function (request, response) {
  const numA = request.body.a;
  const numB = request.body.b;
  response.json(`${numA} + ${numB} = ${numA + numB}`);
  console.log(response);
});

//now we have to start our server
// 8080 is a default port people use in dev
app.listen(8080, function () {
  console.log("App running on port 8080!");
});
