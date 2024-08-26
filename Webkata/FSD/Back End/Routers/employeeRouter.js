import express from "express";
import { createEmployee } from "../Controllers/employeeController.js";

const router = express.Router();

router.post("/createemployee", createEmployee);
router.get("/getallemployee");
router.get("getemployee/:id");
router.put("/updateemployee/:id");
router.delete("/deleteemployee/:id");

export default router;
 