//the parts of JS you absolutely need - no fluff!
//the DOCTYPE in HTML equivalent

import express from "express";

const app = express();

app.use(express.json());

app.get("/", function (request, response) {
  response.json("IT'S WORKING! HUZZAH!");
});

app.listen(8080, function () {
  console.log("App running on port 8080");
});
