import express from "express";
import cors from "cors";
// Routes
import userRouter from "./userRoutes.js";
import docRouter from "./doctorRoutes.js";
import nurseRouter from "./nursesRoutes.js";
import patientRouter from "./patientsRoutes.js";
import wardBoyRouter from "./wardboys.routes.js";
import departmentRouter from "./departmentsRoutes.js";
import guardRouter from "./guardsRoutes.js";
import dashboardRouter from"./dashboardRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Mount routes with unique router names
app.use("/api/users", userRouter);
app.use("/api/doctors", docRouter);
app.use("/api/nurses", nurseRouter);
app.use("/api/patients", patientRouter);
app.use("/api/wardboys", wardBoyRouter);
app.use("/api/departments", departmentRouter);
app.use("/api/guards", guardRouter);
app.use("/api/dashboard", dashboardRouter);

export default app

 