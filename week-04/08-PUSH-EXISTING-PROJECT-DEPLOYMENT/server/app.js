import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Server is running on ${PORT} baby!`);
});

app.get ("/", (_, res)) => {
    
}