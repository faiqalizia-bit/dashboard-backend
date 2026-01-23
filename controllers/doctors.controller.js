import Doctor from "../models/Doctor.js";

// GET all doctors
export const getDoctors = async (req, res) => {
  try {
    // Get page and limit from query, default to page 1, limit 10
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get total count for frontend pagination
    const total = await Doctor.countDocuments();

    // Get doctors with pagination
    const doctors = await Doctor.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      total,         // total number of doctors
      page,          // current page
      limit,         // limit per page
      totalPages: Math.ceil(total / limit), // total pages
      doctors,       // doctors data
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // try {
  //   const doctors = await Doctor.find().sort({createdAt: -1});
  //   res.status(200).json(doctors);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
};

// GET single doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE doctor
export const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE doctor
export const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE doctor
export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
