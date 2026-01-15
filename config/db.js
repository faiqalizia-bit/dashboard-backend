const mongoose = require("mongoose");

const connectDB = async (retryCount = 0) => {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/express-mongo-app";
  try {
    await mongoose.connect(uri, { connectTimeoutMS: 10000 });
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
    const maxRetries = 5;
    if (retryCount < maxRetries) {
      const delay = 5000;
      console.log(`Retrying in ${delay/1000}s (attempt ${retryCount + 1}/${maxRetries})`);
      setTimeout(() => connectDB(retryCount + 1), delay);
    } else {
      console.error("Max retries reached. Exiting.");
      process.exit(1);
    }
  }
};

module.exports = connectDB;