import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Make sure you load env variables here or in main server file

export const connectDB = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
    }
};
