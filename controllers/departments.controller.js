const Department = require("../models/Department");


exports.getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
};


exports.getDepartmentById = async (req, res) => {
  const department = await Department.findById(req.params.id);

  if (!department) {
    return res.status(404).json({ message: "Department not found" });
  }

  res.json(department);
};


exports.createDepartment = async (req, res) => {
  const department = await Department.create(req.body);
  res.status(201).json(department);
};


exports.updateDepartment = async (req, res) => {
  const department = await Department.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!department) {
    return res.status(404).json({ message: "Department not found" });
  }

  res.json(department);
};


exports.deleteDepartment = async (req, res) => {
  const department = await Department.findByIdAndDelete(req.params.id);

  if (!department) {
    return res.status(404).json({ message: "Department not found" });
  }

  res.json({ message: "Department deleted successfully" });
};