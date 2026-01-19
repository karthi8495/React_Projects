const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig");
const taskRoutes = require("./routes/taskRoutes");

// require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});