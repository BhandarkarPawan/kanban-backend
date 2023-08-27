const mongoose = require("mongoose");

const connectToDatabase = () => {
    const url = process.env.MONGO_DB_URL;
    console.log("Connecting to database", url);
    // Connect to the database with mongoose
    return new Promise((resolve, reject) => {
        mongoose.connect(
            url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
                console.log("Connected to database");
            }
        );
    });
};

module.exports = { connectToDatabase };
