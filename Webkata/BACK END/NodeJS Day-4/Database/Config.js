//! MongoDB Connection

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoDB_URL = process.env.MONGODB_URL;

const connectDB = async (req, res) => {
  try {
    
    const connection = await mongoose.connect(mongoDB_URL);
    console.log("MongoDB connected successfully");
    return connection;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
