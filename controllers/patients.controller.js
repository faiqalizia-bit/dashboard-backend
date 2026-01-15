const Patient = require("../models/Patient");

// GET all patients
exports.getPatients = async (req, res) => {
  const patients =   await Patient.find();
    res.json(patients);
};

// GET patient by ID
exports.getPatientById = async (req, res) => {
 const patient = await Patient.findById(req.params.id);
 
   if (!patient) {
     return res.status(404).json({ message: "Patient not found" });
   }
 
   res.json(patient);
};

// CREATE patient
exports.createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
};

// UPDATE patient
exports.updatePatient = async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.json(patient);
};

// DELETE patient
exports.deletePatient = async (req, res) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.json({ message: "Patient deleted successfully" });
};