import Guard from "../models/Guard.js";

// GET all guards
export const getGuards = async (req, res) => {
  try {
    const guards = await Guard.find();
    res.json(guards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET guard by ID
export const getGuardById = async (req, res) => {
  try {
    const guard = await Guard.findById(req.params.id);

    if (!guard) {
      return res.status(404).json({ message: "Guard not found" });
    }

    res.json(guard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE guard
export const createGuard = async (req, res) => {
  try {
    const guard = await Guard.create(req.body);
    res.status(201).json(guard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE guard
export const updateGuard = async (req, res) => {
  try {
    const guard = await Guard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!guard) {
      return res.status(404).json({ message: "Guard not found" });
    }

    res.json(guard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE guard
export const deleteGuard = async (req, res) => {
  try {
    const guard = await Guard.findByIdAndDelete(req.params.id);

    if (!guard) {
      return res.status(404).json({ message: "Guard not found" });
    }

    res.json({ message: "Guard deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};