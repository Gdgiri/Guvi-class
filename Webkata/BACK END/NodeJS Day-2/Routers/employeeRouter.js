import express from "express";
import {
  createEmployee,
  deleteemployee,
  editEmp,
  getEmployeeDetail,
  getEmployeeDetailId,
} from "../Controllers/employeeController.js";

const router = express.Router();

router.get("/empDetails", getEmployeeDetail);

router.get("/empDetails/:id", getEmployeeDetailId);

router.post("/createEmp", createEmployee);

router.put("/edit/:id", editEmp);

router.delete("/delete/:id", deleteemployee);
export default router;
