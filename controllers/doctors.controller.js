import Doctor from "../models/Doctor.js";

// GET all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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

// const Doctor = require("../models/Doctor");

// // GET all doctors
// exports.getDoctors = async (req, res) => {
//   try {
//     const doctors = await Doctor.find();
//     res.status(200).json(doctors);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // GET single doctor by ID
// exports.getDoctorById = async (req, res) => {
//   try {
//     const doctor = await Doctor.findById(req.params.id);

//     if (!doctor) {
//       return res.status(404).json({ message: "Doctor not found" });
//     }

//     res.status(200).json(doctor);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // CREATE doctor
// exports.createDoctor = async (req, res) => {
//   try {
//     const doctor = await Doctor.create(req.body);
//     res.status(201).json(doctor);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // UPDATE doctor
// exports.updateDoctor = async (req, res) => {
//   try {
//     const doctor = await Doctor.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!doctor) {
//       return res.status(404).json({ message: "Doctor not found" });
//     }

//     res.status(200).json(doctor);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // DELETE doctor
// exports.deleteDoctor = async (req, res) => {
//   try {
//     const doctor = await Doctor.findByIdAndDelete(req.params.id);

//     if (!doctor) {
//       return res.status(404).json({ message: "Doctor not found" });
//     }

//     res.status(200).json({ message: "Doctor deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

















// const Doctor =require("./models/Doctor");

// exports.getDoctors = async (req, res) => {
//     const doctors = await Doctor.find();
//   res.json(doctors);
// };
// // GET single doctor
// exports.getDoctorsById = async(req , res) =>{
//     const doctor=await Doctor.findById(req.params.id);
//     if(!doctor){
//         return res.status(404).json({message: "Doctor not found"})
//         res.json(doctor)
//     }
// };
// // CREATE doctor
// exports.createDoctor = async (req,res)=> {
//     const doctor =await Doctor.create(req.body);
//     res.status(201).json(doctor);
// };

// // UPDATE doctor
// exports.updateDoctor = async(req, res)=>{
//     const doctor =await Doctor.findByIdAndUpdate(req.params.id,
//         req.body,
//         {new: true}

//     );
//     if(!doctor)
//         return res.status(404).json({messege: "Doctors not found"});
//     res.json(doctor);
// };



// // DELETE doctor
// exports.deleteDoctor= async(req, res) =>{
//     const doctor= await Doctor.findByIdAndDelete(req.params.id);
//     return res.status(404.).json({messasge: "Doctors not found"}
//     );
//     res.json({messege: "Doctors deleted successfull"})
// };


// exports.deleteDoctor = async (req, res) => {
//   const doctor = await Doctor.findByIdAndDelete(req.params.id);

//   if (!doctor) {
//     return res.status(404).json({ message: "Doctor not found" });
//   }

//   res.json({ message: "Doctor deleted successfully" });
// };



