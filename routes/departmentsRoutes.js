import express from "express";
import {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controllers/departments.controller.js";

const departmentRouter = express.Router();

departmentRouter.get("/", getDepartments);
departmentRouter.get("/:id", getDepartmentById);
departmentRouter.post("/", createDepartment);
departmentRouter.put("/:id", updateDepartment);
departmentRouter.delete("/:id", deleteDepartment);

export default departmentRouter;