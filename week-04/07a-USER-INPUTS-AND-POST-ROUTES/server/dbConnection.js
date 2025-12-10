//imports --> pg + dotenv packages
import pg from "pg";
import dotenv from "dotenv";

//configure dotenv
dotenv.config();

export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
