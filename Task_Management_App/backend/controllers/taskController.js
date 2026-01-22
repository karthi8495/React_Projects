const mongoose = require("mongoose");
const Task = require("../models/Task");

// Get All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.userId }).populate(
      "assignedTo"
    );
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// // Get a Single Task
// const gettTaskById = async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id).populate("assignedTo");
//     if (!task) {
//       return res.status(404).json({ error: "Task not found" });
//     }
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, priority, assignedTo, dueDate } = req.body;
    const task = new Task({
      title,
      description,
      priority,
      assignedTo,
      createdBy: req.user.userId,
      dueDate,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// // Update task
// const updateTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!task) {
//       return res.status(404).json({ error: "Task not found" });
//     }
//     res.status(200).json(task);
//   } catch {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// Delete Task
// const deleteTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);
//     if (!task) {
//       return res.status(404).json({ error: "Task not found" });
//     }
//     res.status(200).json({ message: "Task deleted successfully" });
//   } catch {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// Get Task Stats
// const getTaskStats = async (req, res) => {
//   try {
//     const userId = new mongoose.Types.ObjectId(req.user.userId);
//     const stats = await Task.aggregate([
//       {
//         $match: {
//           createdBy: userId,
//         },
//       },
//       {
//         $group: {
//           _id: "$status",
//           count: { $sum: 1 },
//         },
//       },
//     ]);
//     const result = {
//       pending: 0,
//       inProgress: 0,
//       completed: 0,
//     };
//     stats.forEach((stat) => {
//       result[stat._id] = stat.count;
//     });
//     console.log(result, " $%$%$%$%$%");
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
module.exports = {
  getAllTasks,
  createTask,
//   updateTask,
//   deleteTask,
//   gettTaskById,
//   getTaskStats,
};