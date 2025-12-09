//config .env file --> install package to manage our .env file (npm i dotenv)
import dotenv from "dotenv";

dotenv.config();

export const AccessKey = process.env.UNSPLASH_ACCESS_KEY;
export const SecretKey = process.env.UNSPLASH_SECRET_KEY;
