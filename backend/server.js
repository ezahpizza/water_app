import express from "express"

import cors from "cors"

import dotenv from "dotenv"
import dbConnect from "./utils/db/db.js";
import predictRouter from "./routes/predictionRoute.js";
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;



// Middleware
app.use(cors());
app.use(express.json());


app.use("/api",predictRouter); 

app.listen(PORT, async() => {
  
  console.log(`Server running on port ${PORT}`);
   await dbConnect();
});