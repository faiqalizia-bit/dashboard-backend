import WardBoy from "../models/WardBoy.js";

// GET all ward boys
export const getWardBoys = async (req, res) => {
  try {

    const page = parseInt(req.query.page)||1;
    const limit = parseInt(req.query.limit)||10;
    const skip = (page - 1) * limit

    const total = await WardBoy.countDocuments();

    const wardBoys = await WardBoy.find().sort({createdAt: -1}).skip(skip).limit(limit);
    res.json({page, limit, wardBoys, totalPages:Math.ceil(total/limit)});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ward boy by ID
export const getWardBoyById = async (req, res) => {
  try {
    const wardBoy = await WardBoy.findById(req.params.id);

    if (!wardBoy) {
      return res.status(404).json({ message: "Ward boy not found" });
    }

    res.json(wardBoy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE ward boy
export const createWardBoy = async (req, res) => {
  try {
    const wardBoy = await WardBoy.create(req.body);
    res.status(201).json(wardBoy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE ward boy
export const updateWardBoy = async (req, res) => {
  try {
    const wardBoy = await WardBoy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!wardBoy) {
      return res.status(404).json({ message: "Ward boy not found" });
    }

    res.json(wardBoy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE ward boy
export const deleteWardBoy = async (req, res) => {
  try {
    const wardBoy = await WardBoy.findByIdAndDelete(req.params.id);

    if (!wardBoy) {
      return res.status(404).json({ message: "Ward boy not found" });
    }

    res.json({ message: "Ward boy deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
