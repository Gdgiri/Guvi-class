import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mongoBD } from "./Database/config.js";
import router from "./Routers/employeeRouter.js";

dotenv.config();
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
mongoBD();

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).send("Welcome back");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("App is running on");
});
