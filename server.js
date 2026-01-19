import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Routes


import userRouter from "./routes/userRoutes.js";
import docRouter from "./routes/doctorRoutes.js";
import nurseRouter from "./routes/nursesRoutes.js";
import patientRouter from "./routes/patientsRoutes.js";
import wardBoyRouter from "./routes/wardboys.routes.js";
import departmentRouter from "./routes/departmentsRoutes.js";
import guardRouter from "./routes/guardsRoutes.js";
import dashboardRouter from "./routes/dashboardRoutes.js";
import loginRouter from "./routes/loginRoutes.js";
import registerRouter from "./routes/registerRoutes.js";
// import userRouter from "./routes/userRoutes.js";


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

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
// app.use("/api/register", registerRouter);
// app.use("/api/login", loginRouter)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} 🚀`)
)