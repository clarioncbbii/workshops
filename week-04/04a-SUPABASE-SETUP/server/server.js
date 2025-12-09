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
//we cannot have it as is b/c my database password is showing and thus can easily be stolen:
// ("postgresql://postgres.hvhkyftwicvmraqqtucd:eWMq1C95eWBRbjrH@aws-1-eu-west-2.pooler.supabase.com:6543/postgres");
//so, we are going to store the above in  an enviroment variable and import it

//then import the dbPool variable -

// ============================================================// SQL AND ROUTES //============================================================//

//see: 05-SQP-AND-QUERIES (server.js file)
