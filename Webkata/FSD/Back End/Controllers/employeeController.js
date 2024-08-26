import Employee from "../Models/employeeSchema.js";

export const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res
      .status(200)
      .json({
        message: "Employee created successfully",
        result: [newEmployee],
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal Server error in create employee" });
  }
};
