import express from "express";
import { getStats } from "../controllers/dashboard.controller.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/stats", getStats);

export default dashboardRouter;