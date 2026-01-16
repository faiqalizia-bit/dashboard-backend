import express from "express";
import {
  getWardBoys,
  getWardBoyById,
  createWardBoy,
  updateWardBoy,
  deleteWardBoy,
} from "../controllers/wardboys.controller.js";

const wardBoyRouter = express.Router();

wardBoyRouter.get("/", getWardBoys);
wardBoyRouter.get("/:id", getWardBoyById);
wardBoyRouter.post("/", createWardBoy);
wardBoyRouter.put("/:id", updateWardBoy);
wardBoyRouter.delete("/:id", deleteWardBoy);

export default wardBoyRouter;
