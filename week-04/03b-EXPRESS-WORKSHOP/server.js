//IMPORT EXPRESS
import express from "express";

const app = express();

// MY ROUTES
//GET

app.get("/", function (request, response) {
  response.json("HAWAIYU!");
});

app.get("/messages", function (request, response) {
  response.json("Nene was here!");
});

// ------------------------- //

//RETURN A BIGGER OBJECT

const imageArray = [
  {
    imageName: "PHOTO 1",
    imageSrcThumb: "./assets/road-nigeria-small.jpg",
    imageSrcFull: "./assets/road-nigeria.webp",
    imageAlt: "An aerial view of a road cutting through open land.",
  },
  {
    imageName: "PHOTO 2",
    imageSrcThumb: "./assets/trees-nigeria-small.jpg",
    imageSrcFull: "./assets/trees-nigeria.webp",
    imageAlt: "Green trees overlooking mountain during daytime",
  },
  {
    imageName: "PHOTO 3",
    imageSrcThumb: "./assets/waterfall-nigeria-small.jpg",
    imageSrcFull: "./assets/waterfall-nigeria.webp",
    imageAlt: "Waterfall in the middle of the forest",
  },
  {
    imageName: "PHOTO 4",
    imageSrcThumb: "./assets/beach-small.jpg",
    imageSrcFull: "./assets/beach.webp",
    imageAlt:
      "Sandy beack in Lagos, Nigeria; people swimming in the ocean in the distance",
  },
  {
    imageName: "PHOTO 5",
    imageSrcThumb: "./assets/fruit-small.jpg",
    imageSrcFull: "./assets/fruit.webp",
    imageAlt:
      "Fruit basket in the market containing Avocado, Agbalumo (African Star Apple; Pineapple in the background",
  },
  {
    imageName: "PHOTO 6",
    imageSrcThumb: "./assets/sunset-small.jpg",
    imageSrcFull: "./assets/sunset.webp",
    imageAlt: "A sandy beach with waves crashing; Sunset at Elegushi beach",
  },
  {
    imageName: "PHOTO 7",
    imageSrcThumb: "./assets/pepper-small.jpg",
    imageSrcFull: "./assets/pepper.webp",
    imageAlt: "Woman selling pepper watches over her wares in a market.",
  },
  {
    imageName: "PHOTO 8",
    imageSrcThumb: "./assets/village-small.jpg",
    imageSrcFull: "./assets/village.webp",
    imageAlt:
      "An aerial view of a village in the middle of a forest in Nigeria",
  },
];

app.get("/gallery", function (request, response) {
  response.json(imageArray);
});

// ------------------------- //

//POST
app.post("/messages", function (request, response) {
  response.json("How you doinnnnnn'?");
});

app.use(express.json());

// ------------------------- //

//RUN THE SERVER
app.listen(2910, function () {
  console.log("HAWAIYU! Server is listening on port 2910...");
});

//TODO:
//Send a message JSON object from your HTTP client, and make the POST route return the same message in the response!

app.post("/todo", function (request, response) {
  response.json({ Message: "Posting my stretch goal message" });
});

app.get("/todo", function (request, response) {
  response.json(response);
});
