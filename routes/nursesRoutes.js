import express from "express";
import {
  getNurses,
  getNurseById,
  createNurse,
  updateNurse,
  deleteNurse,
} from "../controllers/nurses.controller.js";

const nurseRouter = express.Router();

nurseRouter.get("/", getNurses);
nurseRouter.get("/:id", getNurseById);
nurseRouter.post("/", createNurse);
nurseRouter.put("/:id", updateNurse);
nurseRouter.delete("/:id", deleteNurse);

export default nurseRouter;