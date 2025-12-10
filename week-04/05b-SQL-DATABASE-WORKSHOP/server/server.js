//imports --> express, pg and dotenv
import express from "express";
import pg from "pg";
import dotenv from "dotenv";

//initialise express - without this line you cannot use express methods
//tell express we want to use JSON to manipulate data
//also configure dotenv to use it
const app = express();
app.use(express.json());

dotenv.config();

//initialise a 'db' object --> you can name this whatever you want
//this will provide methods for us to query our database
//we will do this using a connection string

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

// set up a PORT
const PORT = 8080;

app.listen(PORT, function () {
  console.info(`HAWAIYU! Server is running in localhost:${PORT}`);
});

//TODO: set up a root route to READ a welcome message (GET method)
//route --> "/"
app.get("/", function (request, response) {
  response.json({ message: "HAWAIYU! Welcome to the root route. GET comfy!" });
});

//TODO: Insert data into a database using an ‘INSERT’ SQL statement
db.query(
  `INSERT INTO messages (msg_name, content) VALUES ('hello there','general kenobi')`
);
//then 'npm run dev' in terminal --> executes the above code and adds the entry to the specified table

//TODO: Insert multiple things at once,by running multiple insert statements
//for security and reusability of the above functions - use parameter placeholders
db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
  "message name1",
  "message content1",
]);
db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
  "message name2",
  "message content2",
]);

//examples:
// db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
//   "Does anyone else..",
//   "love oranges",
// ]);
// db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
//   "hot take: ",
//   "I think oranges suck",
// ]);

//TODO: Query a database from an Express endpoint
//example --> further filtered by id
// app.get("/messages", async function (request, response) {
// const messages = await db.query("SELECT * FROM messages WHERE id = 1");
// response.json(messages.rows);
// });

app.get("/messages", async function (request, response) {
  const messages = await db.query(`SELECT msg_name, content FROM messages`);
  console.log(messages); //will show you the entire table in terminal console
  response.json(messages.rows); //will show you wrangled data in browser
});

//TODO: Connecting the database to the requests
//example:

//! o/s :
// Databases: Schema, Tables, and SQL --> Connecting the Database to the requests
