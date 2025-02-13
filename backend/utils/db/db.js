import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect=async () => {
    try {
    await mongoose.connect(MONGODB_URI); 
    console.log("connected to db");
    } catch (error) {
        console.log("db error",error);
    }
}

export default dbConnect;