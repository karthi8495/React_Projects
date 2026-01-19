const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// {"title":"task1","completed":false},{"title":"task2","completed":false}

const Task = mongoose.model("Task", taskSchema);
// Task is a model, taskSchema is a schema, this will create a collection in mongodb

module.exports = Task;
// Schema = collection's structure(document)
// Model = collection