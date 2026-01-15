const Nurse = require("../models/Nurse");

// GET all nurses
exports.getNurses = async (req, res) => {
  const nurses = await Nurse.find();
  res.json(nurses);
};

// GET nurse by ID
exports.getNurseById = async (req, res) => {
  const nurse = await Nurse.findById(req.params.id);

  if (!nurse) {
    return res.status(404).json({ message: "Nurse not found" });
  }

  res.json(nurse);
};

// CREATE nurse
exports.createNurse = async (req, res) => {
  const nurse = await Nurse.create(req.body);
  res.status(201).json(nurse);
};

// UPDATE nurse
exports.updateNurse = async (req, res) => {
  const nurse = await Nurse.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!nurse) {
    return res.status(404).json({ message: "Nurse not found" });
  }

  res.json(nurse);
};

// DELETE nurse
exports.deleteNurse = async (req, res) => {
  const nurse = await Nurse.findByIdAndDelete(req.params.id);

  if (!nurse) {
    return res.status(404).json({ message: "Nurse not found" });
  }

  res.json({ message: "Nurse deleted successfully" });
};