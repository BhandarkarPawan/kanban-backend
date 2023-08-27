const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
});

UserSchema.statics.byUsername = function (username) {
    return this.findOne({ username: username });
};

module.exports = UserSchema;
