const Task = require("../models/taskModel");

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body); // req.body is the data sent in the request body
    res.status(201).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getTasks,
  createTask,
};