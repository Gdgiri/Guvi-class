// schema => mongoDB collection structure

import mongoose, { Mongoose } from "mongoose";

const empSchema = mongoose.Schema({
  Emp_FirstName: String,
  Emp_LastName: String,
  Emp_Email: String,
  Emp_Designation: String,
});

const Employee = mongoose.model("Employee", empSchema);

export default Employee;
