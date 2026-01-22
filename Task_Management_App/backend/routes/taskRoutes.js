const express = require("express");
const {
  getAllTasks,
  createTask,
//   gettTaskById,
//   updateTask,
//   deleteTask,
//   getTaskStats,
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/getalltasks", authMiddleware, getAllTasks);
router.post("/createtask", authMiddleware, createTask);
// router.get("/gettask/:id", authMiddleware, gettTaskById);
// router.put("/updatetask/:id", authMiddleware, updateTask);
// router.delete("/deletetask/:id", authMiddleware, deleteTask);
// router.get("/gettaskstats", authMiddleware, getTaskStats);

module.exports = router;