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
//route --> "/"
app.get("/", function (request, response) {
  response.json({ message: "HAWAIYU! Welcome to the root route. GET comfy!" });
});

//Import pg and dotenv
import pg from "pg";

import dotenv from "dotenv";
dotenv.config();

//initialise a 'db' object --> you can name this whatever you want
//this will provide methods for us to query our db.
//we will do this using a connection string

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

//TODO: Insert data into a database using an ‘INSERT’ SQL statement
db.query(
  `INSERT INTO messages (msg_name, content) VALUES ('hello there','general kenobi')`
);
//then 'npm run dev' in terminal --> executes the above code and adds the entry to the specified table

//TODO: Insert multiple things at once,by running multiple insert statements
db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
  "Does anyone else..",
  "love oranges",
]);
db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
  "hot take: ",
  "I think oranges suck",
]);

//TODO: Query a database from an Express endpoint
app.get("/messages", async function (request, response) {
  const messages = await db.query(`SELECT msg_name, content FROM messages`);
  console.log(messages);
  response.json(messages.rows);
});
