const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
// const notificationRoutes = require("./routes/notificationRoutes");
// const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Task Manager API is running!!");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
// app.use("/api/notifications", notificationRoutes);
// app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});