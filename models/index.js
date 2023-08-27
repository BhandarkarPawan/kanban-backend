const mongoose = require("mongoose");
const BoardSchema = require("./board");
const ColumnSchema = require("./column");
const TaskSchema = require("./task");
const SubTaskSchema = require("./subtask");

const Board = mongoose.model("Board", BoardSchema);
const Column = mongoose.model("Column", ColumnSchema);
const Task = mongoose.model("Task", TaskSchema);
const SubTask = mongoose.model("SubTask", SubTaskSchema);

module.exports = {
    Board,
    Column,
    Task,
    SubTask,
};
