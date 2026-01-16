import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
});

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

export default Dashboard;