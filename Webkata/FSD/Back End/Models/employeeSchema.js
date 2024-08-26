import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  employeeFirstname: String,
  employeeLastname: String,
  employeeEmailID: String,
  employeeDesignation: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
