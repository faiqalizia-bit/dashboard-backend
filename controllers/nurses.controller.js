import Nurse from "../models/Nurse.js";

// GET all nurses
export const getNurses = async (req, res) => {
  try {
     const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

     const total = await Nurse.countDocuments();
    const nurses = await Nurse.find().sort({createdAt: -1}).skip(skip).limit(limit);
    res.json({total, limit, skip, totalPages: Math.ceil(total / limit), nurses});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET nurse by ID
export const getNurseById = async (req, res) => {
  try {
    const nurse = await Nurse.findById(req.params.id);

    if (!nurse) {
      return res.status(404).json({ message: "Nurse not found" });
    }

    res.json(nurse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE nurse
export const createNurse = async (req, res) => {
  try {
    const nurse = await Nurse.create(req.body);
    res.status(201).json(nurse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE nurse
export const updateNurse = async (req, res) => {
  try {
    const nurse = await Nurse.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!nurse) {
      return res.status(404).json({ message: "Nurse not found" });
    }

    res.json(nurse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE nurse
export const deleteNurse = async (req, res) => {
  try {
    const nurse = await Nurse.findByIdAndDelete(req.params.id);

    if (!nurse) {
      return res.status(404).json({ message: "Nurse not found" });
    }

    res.json({ message: "Nurse deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};