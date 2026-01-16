import express from "express";
import {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctors.controller.js";

const docRouter = express.Router();

docRouter.post("/", createDoctor);
docRouter.get("/", getDoctors);
docRouter.get("/:id", getDoctorById);
docRouter.put("/:id", updateDoctor);
docRouter.delete("/:id", deleteDoctor);

export default docRouter;