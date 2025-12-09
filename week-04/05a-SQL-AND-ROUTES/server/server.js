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

// ============================================================================================================================================//

//we now have a database connection string
//we cannot leave it as is b/c my database password is showing and thus can easily be stolen
// ("postgresql://postgres.hvhkyftwicvmraqqtucd:eWMq1C95eWBRbjrH@aws-1-eu-west-2.pooler.supabase.com:6543/postgres");

// ============================================================// SQL AND ROUTES //============================================================//

//TODO: Store DB password in an environment variable, and import it:
//import the dbPool variable from the dbConnection.js file
import { dbPool } from "./dbConnection.js";

//TODO: I want to READ the data in the staff table
//route --> "/staff"
//HTTP method GET (= READ)
app.get("/staff", async function (request, response) {
  //query the database
  const query = await dbPool.query(
    `SELECT name, location, age, bio FROM staff;`
  );
  // helps in case server is not working - server console logs are in terminal
  console.log(query);
  //parse the response from this route into JSON and wrangle it to show just the rows property
  response.json(query.rows);
});

//TODO: I want to READ the name and location of all staff
//route --> "/staff-location"
//HTTP method GET (= READ)
app.get("/staff-location", async function (request, response) {
  const query = await dbPool.query(`SELECT name, location FROM staff;`);
  console.log(query);
  response.json(query.rows);
});

//TODO: I want to READ the name and location of all staff, in Norwich
//route --> "/staff-location"
//HTTP method GET (= READ)
app.get("/staff-location-norwich", async function (request, response) {
  const query = await dbPool.query(
    `SELECT name FROM staff WHERE location = 'Norwich';`
  );
  console.log(query);
  response.json(query.rows);
});

//TODO: I want to READ the name of staff member 'Nene'
//route --> "/staff-name-nene"
//HTTP method GET (= READ)
app.get("/staff-name-nene", async function (request, response) {
  const query = await dbPool.query(
    `SELECT name FROM staff WHERE name = 'Nene';`
  );
  console.log(query);
  response.json(query.rows);
});
