const mongoose = require("mongoose");
// require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/guviTaskManager");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = connectDB;