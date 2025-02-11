import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import axios from "axios";
import dotenv from "dotenv"
import dbConnect from "./utils/db/db.js";
import predictRouter from "./routes/predictionRoute.js";
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/water_quality';


// Middleware
app.use(cors());
app.use(express.json());


app.use("/api",predictRouter); 

app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`);
  dbConnect();
  console.log("connected to db");
});