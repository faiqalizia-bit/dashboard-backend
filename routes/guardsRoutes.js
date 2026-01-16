import express from "express";
import {
  getGuards,
  getGuardById,
  createGuard,
  updateGuard,
  deleteGuard,
} from "../controllers/guards.controller.js";

const guardRouter = express.Router();

guardRouter.get("/", getGuards);
guardRouter.get("/:id", getGuardById);
guardRouter.post("/", createGuard);
guardRouter.put("/:id", updateGuard);
guardRouter.delete("/:id", deleteGuard);

export default guardRouter;
