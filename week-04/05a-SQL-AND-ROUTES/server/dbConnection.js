// Keep your connection files separate

//TODO: I want to set up a pool to send requests from the server to the database
//DO NOT CREATE A CLIENT!

//import pg package --> install postgress management package (npm i pg)
import pg from "pg";

//config .env file --> install package to manage our .env file (npm i dotenv)
import dotenv from "dotenv";
dotenv.config();

//setup  a connection pool --> create a new instace (copy) of the pool object in the pg package
//export so it can be used anywhere in the server folder it is imported
//connectionString connects the entire database, not just individual tables
export const dbPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
