//MANNY'S BOILER PLATE

//import express
import express from "express";

//initialise express - without this line you cannot use express methods
const app = express();

//tell express we want to use JSON to manipulate data
app.use(express.json());

// set up a port
const PORT = 8080;

app.listen(PORT, function () {
  console.info(`HAWAIYU! Server is running in localhost:${PORT}`);
});

//TODO: set up a root route to READ a welcome message (GET Mmethod)
app.get("/", function (request, response) {
  response.json("HAWAIYU...Welcome to the root route. GET comfy!");
});
