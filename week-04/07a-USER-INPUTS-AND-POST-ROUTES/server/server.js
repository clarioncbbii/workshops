//imports --> express + cors packages
//use cors to allow our client to send data (cross-origin)
//we also have to import db from dbConnection to use it later
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

//remember to store express in a variable --> app
const app = express();

//config cors and express
app.use(cors());
app.use(express.json());

//PORT setup
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server is live in port ${PORT} baby!`);
});

//TODO: READ a welcome message
//ROOT route
app.get("/", (req, res) => {
  //res.json({message:"Welcome to the server. GET comfy!"}) --> only allows us to send JSON format
  // you can  use send method to send non-JSON, such as HTML instead, in string format:
  res.send("<h1>WELCOME TO THE SERVER :)</h1> <h2>GET COMFY BELOVED!</h2>");
});

//TODO: CREATE data using the form values from the client to send it to the database
//--> you will need Postman to test this before you have a client
// b/c Postman simulated the client submitting the form
//if you have a client, you know this has worked by checking the console

//a new task needs a new route --> /new-staff route
app.post("/new-staff", (req, res) => {
  //to receive the data from the client; in the request object - i need the body property - and formValues are part of the body
  const newStaff = req.body.formValues;
  console.log(newStaff); //do this to see if this is working
  //query the database to INSERT the data into the staff table (SQL)
  //we use value parameters in SQL to protect the data and to reuse the query
  //each parameter will be replaced with an argument which comes from the request (which in turn comes from the client (the names must match the HTML names))
  const query = db.query(
    `INSERT INTO staff (name, location, age, bio) VALUES ($1, $2, $3, $4)`,
    [newStaff.staffName, newStaff.location, newStaff.age, newStaff.bio]
  );
  //optional: for our peace of mind we can add a response
  res.json({ status: "success", values: newStaff });
});

// ======================== SUCCESS! ======================== //

//Both the client and the server are now up and running
