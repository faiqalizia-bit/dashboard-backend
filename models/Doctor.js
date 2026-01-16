import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;



// const mongoose = require("mongoose");

// const doctorSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true
//     },
//     status: {
//       type: String,
//       enum: ["Active", "Inactive"],
//       default: "Active"
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Doctor", doctorSchema);