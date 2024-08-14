const emplyees = [
  { id: 1, emp_name: "Giri", designation: "QA" },
  { id: 2, emp_name: "Hari", designation: "FSD" },
  { id: 3, emp_name: "mani", designation: "DevOps Engineer" },
  { id: 4, emp_name: "kani", designation: "UI/UX Designer" },
  { id: 5, emp_name: "Tony", designation: "Solution Architect" },
];

//getcall or get method

export const getEmployeeDetail = (req, res) => {
  res.status(200).json({ data: emplyees });
};

//get by id

export const getEmployeeDetailId = (req, res) => {
  const empId = req.params.id;
  console.log(empId);

  const empDetail = emplyees.find((ele) => ele.id == empId);
  if (!empDetail) {
    return res.status(404).send("Employee Not found");
  }
  res.status(200).json({ message: "Employee Details", data: empDetail });
};

// create employee or post method

export const createEmployee = (req, res) => {
  const { emp_name, designation } = req.body;

  const newEmployee = {
    id: emplyees.length + 1,
    emp_name: emp_name,
    designation: designation,
  };

  emplyees.push(newEmployee);

  res
    .status(200)
    .send({ message: "Employee created successfully", data: newEmployee });
};
// edit employee or put method
export const editEmp = (req, res) => {
  const empId = req.params.id;
  const { emp_name, designation } = req.body;

  // Validate input
  if (!emp_name || !designation) {
    return res.status(400).send("Missing required fields");
  }

  const index = emplyees.findIndex((ele) => ele.id === empId);

  if (index === -1) {
    return res.status(404).send("Employee detail not found");
  }

  emplyees[index].emp_name = emp_name;
  emplyees[index].designation = designation;

  res
    .status(200)
    .json({ message: "Employee update success", data: emplyees[index] });
};

// delete employee or delete method
export const deleteemployee = (req, res) => {
  const empId = req.params.id;
  const index = emplyees.findIndex((ele) => ele.id === empId);

  if (index === -1) {
    return res.status(404).send("Employee detail not found");
  }

  emplyees.splice(index, 1);

  res.status(200).json({ message: "Employee detail deleted successfully" });
};
