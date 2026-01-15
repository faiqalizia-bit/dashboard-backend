const Guard = require("../models/Guard");

// GET all guards
exports.getGuards = async (req, res) => {
  const guards = await Guard.find()
  res.json(guards);
};

// GET guard by ID
exports.getGuardById = async (req, res) => {
  const guard = await Guard.findById(req.params.id)

  if (!guard) {
    return res.status(404).json({ message: "Guard not found" });
  }

  res.json(guard);
};

// CREATE guard
exports.createGuard = async (req, res) => {
  const guard = await Guard.create(req.body);
  res.status(201).json(guard);
};

// UPDATE guard
exports.updateGuard = async (req, res) => {
  const guard = await Guard.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!guard) {
    return res.status(404).json({ message: "Guard not found" });
  }

  res.json(guard);
};

// DELETE guard
exports.deleteGuard = async (req, res) => {
  const guard = await Guard.findByIdAndDelete(req.params.id);

  if (!guard) {
    return res.status(404).json({ message: "Guard not found" });
  }

  res.json({ message: "Guard deleted successfully" });
};