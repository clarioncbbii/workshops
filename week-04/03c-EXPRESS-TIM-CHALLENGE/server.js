import bodyParser from "body-parser";
import express from "express";
const app = express();

app.use(express.json());

//TODO: EXTRA FROM TIM - complete separately -
//If you finish the workshop, Create a fresh Express server, that:

// has a GET endpoint for /movies that returns an array of movie objects
// has a GET endpoint for /random that returns a random movie
// has a POST endpoint for /movies that accepts JSON in the same format as your movie objects, and returns all the moves WITH the movie object you send in the body

const data = [
  { movieName: "Oppenheimer", movieYear: 2023, movieGenre: "Drama" },
  { movieName: "Top Gun: Maverick", movieYear: 2022, movieGenre: "Action" },
  { movieName: "Tenet", movieYear: 2020, movieGenre: "Sci-fi" },
];

//root route
app.get("/", function (request, response) {
  response.json("HAWAIYU!");
});

//GET /movies route
app.get("/movies", function (request, response) {
  response.json(data);
});

//GET /random route
app.get("/random", function (request, response) {
  response.json(data.movieName);
});

//Run server:
app.listen(2910, function () {
  console.log("HAWAIYU! Testing, testing...");
});
