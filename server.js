const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");



dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/doctors", require("./routes/doctorRoutes"))
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/nurses", require("./routes/nursesRoutes"))
app.use("/api/patients", require("./routes/patientsRoutes"))
app.use("/api/wardboys", require("./routes/wardboys.routes"))
app.use("/api/departments", require("./routes/departmentsRoutes"))
app.use("/api/guards", require("./routes/guardsRoutes"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} 🚀`)
);