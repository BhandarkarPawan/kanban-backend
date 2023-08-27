const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: "Board",
        required: true,
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: "Column",
        required: true,
    },
    subtasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "SubTask",
        },
    ],
});

module.exports = TaskSchema;
