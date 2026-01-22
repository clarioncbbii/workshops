//we do not need dotenv - only pg
import pg from "pg";

//create a pool with pg
export const db = new pg.Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL
});


