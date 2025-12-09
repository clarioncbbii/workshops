//import express and dotenv
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

//set up a root route --> "/"
app.get("/", function (request, response) {
  response.json({ message: "HAWAIYU! Welcome to the root route. GET comfy!" });
});

//TODO: set up a new app.get endpoint
import { AccessKey } from "./API.keys.js";

app.get("/images", async (request, response) => {
  const API = `https://api.unsplash.com/search/photos?client_id=${AccessKey}&query=puppy`;
  const resultData = await fetch(API); //change variable name from 'response' to 'result'
  const imageData = await resultData.json(); //data (result) from API to be in json
  console.log(imageData);
  response.json(imageData.results[0].urls.full); //wrangle data
});

// ----------------- SUCCESS! --------------------- //

/** If you choose at this point: TO RENDER IMAGE GO TO API FETCH WORKSHOP AND FOLLOW FLOW **/
