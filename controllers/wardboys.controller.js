const WardBoy = require("../models/WardBoy");

// GET all ward boys
exports.getWardBoys = async (req, res) => {
  const wardBoys = await WardBoy.find();
  res.json(wardBoys);
};

// GET ward boy by ID
exports.getWardBoyById = async (req, res) => {
  const wardBoy = await WardBoy.findById(req.params.id);

  if (!wardBoy) {
    return res.status(404).json({ message: "Ward boy not found" });
  }

  res.json(wardBoy);
};

// CREATE ward boy
exports.createWardBoy = async (req, res) => {
  const wardBoy = await WardBoy.create(req.body);
  res.status(201).json(wardBoy);
};

// UPDATE ward boy
exports.updateWardBoy = async (req, res) => {
  const wardBoy = await WardBoy.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!wardBoy) {
    return res.status(404).json({ message: "Ward boy not found" });
  }

  res.json(wardBoy);
};

// DELETE ward boy
exports.deleteWardBoy = async (req, res) => {
  const wardBoy = await WardBoy.findByIdAndDelete(req.params.id);

  if (!wardBoy) {
    return res.status(404).json({ message: "Ward boy not found" });
  }

  res.json({ message: "Ward boy deleted successfully" });
};