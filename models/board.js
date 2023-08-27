const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    columns: [
        {
            type: Schema.Types.ObjectId,
            ref: "Column",
        },
    ],
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task",
        },
    ],
});

module.exports = BoardSchema;
