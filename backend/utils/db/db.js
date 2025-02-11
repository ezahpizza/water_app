import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/water_quality';

const dbConnect=async () => {
    try {
     
    await mongoose.connect(MONGODB_URI);   
    } catch (error) {
        console.log("db error",error);
    }
}

export default dbConnect;