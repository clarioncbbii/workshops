//BOILERPLATE
//

import express from "express";
const app = express();

app.use(express.json());

app.get("/", function (request, response) {
  response.json("HAWAIYU!");
});

app.listen(2910, function () {
  console.log("HAWAIYU! Server is listening on port 2910...");
});
