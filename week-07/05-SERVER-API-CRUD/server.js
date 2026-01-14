// imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

// initialise express
const app = express();

// use JSON in our server
app.use(express.json());

// config cors
app.use(cors());

// port setup
const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Server API is live on ${PORT}!`);
});

//* ROOT route
// route --> http method GET b/c we want to READ data

app.get("/", (req, res) => {
  res.json({ message: "Hawaiyu - welcome to the server API!" });
});

//* GET ROUTE
// READ biscuits data
// route --> http method GET
// static route
// we can use POSTMAN to test this route is working properly (it simulates a client request)

app.get("/biscuits", async (req, res) => {
  //* NEW FEATURE WE WILL USE: try...catch for error handling
  try {
    //query db
    const query =
      await db.query(`SELECT biscuitreqname AS "biscuit name", src AS "image link", description, crunchiness FROM biscuits;
`);
    console.log(query.rows);
    res.json(query.rows);
  } catch (error) {
    console.error(error, "Response failed. Try turning it off and on again.");
    res.status(500).json({ response: "failed" });
  }
});

//! FOR TESTING AN ERROR: use 'throw new Error()' --> research it!

// READ biscuits AND CUSTOMERS data
app.get("/biscuits-customers", async (req, res) => {
  try {
    const query = await db.query(
      `SELECT biscuits.*, customers.* FROM biscuits JOIN customers ON 
      customers.id = biscuits.customer_id`
    );
    console.log(query.rows);
    res.json(query.rows);
  } catch (error) {
    console.error(error, "Response failed. Try turning it off and on again.");
    res.status(500).json({ response: "failed" });
  }
});

//* POST ROUTE
// CREATE new entries in the biscuits table
// ROUTE --> http method POST b/c we want to POST data in the table
// though not mandatory, for good practice, use consistent naming across server and db!
app.post("/new-biscuit", (req, res) => {
  try {
    //collect the data to insert
    const data = req.body;
    //(!) const {biscuit_name, src, description, crunchiness, customer_id} = req.body is another option which will then simplify your code in the []!
    //query the database to insert new data
    const query = db.query(
      `INSERT INTO biscuits (biscuit_name, src, description, crunchiness, customer_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        data.biscuitName,
        data.src,
        data.description,
        data.crunchiness,
        data.customerId,
      ]
    );
    console.log(query.rows);
    res.status(200).json({ request: "success" });
  } catch (error) {
    console.error(error, "Request failed. Turn off and on");
    res.status(500).json({ request: "fail" });
  }
});

//* DELETE ROUTE
//DELETE  entry from the biscuits table
// ROUTE --> http method DELETE b/c we want to DELETE data in the table
app.delete("/delete-biscuit/:id", (req, res) => {
  try {
    //access the value of my id params
    //const idParams = req.params.id;
    //(!) or use 'destructured' syntax: --> changes the code in [] also!
    const { id } = req.params;
    //query the database
    const query = db.query(`DELETE FROM biscuits WHERE id = $1 RETURNING *`, [
      id,
    ]);
    console.log(query.rows);
    res.status(200).json({ request: "HUZZAH! Success" });
  } catch (error) {
    console.error(error, "Request failed. Turn off and on");
    res.status(500).json({ request: "fail" });
  }
});

//* PUT ROUTE
// UPDATE entry in the biscuits table
// ROUTE --> http method PUT b/c we want to PUT data in an existing entry of the table
app.put("/update-biscuit/:id", (req, res) => {
  try {
    //access params
    const { id } = req.params;
    //store the new values to update the current entry
    const { biscuit_name, src, description, crunchiness, customer_id } =
      req.body;
    //query db
    const query = db.query(
      `UPDATE biscuits SET biscuit_name = $1, src = $2, description = $3, crunchiness = $4, customer_id = $5 WHERE id = $6 RETURNING *`,
      [biscuit_name, src, description, crunchiness, customer_id, id]
    );
    console.log(query.rows);
    res.status(200).json({ request: "HUZZAH! Success" });
  } catch (error) {
    console.error(error, "Request failed. Turn off and on");
    res.status(500).json({ request: "fail" });
  }
});

//! =================================================================

//* POSTMAN --> RAW BODY TEMPLATE
//* BEWARE OF TRAILING SEMICOLONS AFTER THE OBJECT --> POSTMAN DOES NOT LIKE IT!
// {
// "biscuitName": "Jammy Dodgers",
// "src": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/jammy-dodger-flowers-841af8a.jpg",
// "description": "Gooey",
// "crunchiness": 2,
// "customerId": 1
// }

//! ================================== WHAT ABOUT CLIENT-SIDE? ================================== //

//* NOTE: FETCHING THESE ROUTES IN THE CLIENT
//The routes in this server API are now available to be fetched from the client.
//If you have a front-end, you can now fetch these routes and render them on the client

//* THE CLIENT-SIDE CODE WOULD LOOK SOMETHING LIKE THIS:
// try {
//   fetch("http://localhost:8080/new-biscuit", {
//     method: "POST",
//     headers: {},
//     body: JSON.stringify(),
//   });
// } catch (error) {}

// // the params value in the client is destructuredd from useParams() hook

// const { id } = useParams();

// fetch("http://localhost:8080/delete-biscuit/${id}", {
//   method: "DELETE",
//   headers: {},
//   body: JSON.stringify(),
// });
