import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/Config.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000; // Use process.env.PORT with default fallback

app.use(cors());
app.use(express.json());

// Connect to the database
connectDB().catch((error) => {
  console.error("Failed to connect to MongoDB", error);
  process.exit(1); // Exit process with failure code
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to GD World");
});

app.listen(PORT, () => {
  console.log("App is running on PORT:", PORT);
});
