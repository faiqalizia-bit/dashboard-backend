import Doctor from "../models/Doctor.js";
import Nurse from "../models/Nurse.js";
import Patient from "../models/Patient.js";
import WardBoy from "../models/WardBoy.js";
import Department from "../models/Department.js";
import Guard from "../models/Guard.js";

const buildStats = async (Model) => {
  const total = await Model.countDocuments();
  const active = await Model.countDocuments({ status: "Active" });
  const inactive = await Model.countDocuments({ status: "Inactive" });

  return {
    total,
    active,
    inactive,
  };
};

export const getStats = async (req, res) => {
  try {
    const stats = {
      doctors: await buildStats(Doctor),
      nurses: await buildStats(Nurse),
      patients: await buildStats(Patient),
      wardBoys: await buildStats(WardBoy),
      departments: await buildStats(Department),
      guards: await buildStats(Guard),
    };

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: "Failed to load dashboard stats" });
  }
};