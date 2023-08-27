const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: "Board",
        required: true,
    },
});

module.exports = ColumnSchema;
