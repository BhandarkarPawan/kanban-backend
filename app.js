const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const { connectToDatabase } = require("./services/database");
const boardRouter = require("./routes/board");
const columnsRouter = require("./routes/column");
const tasksRouter = require("./routes/task");

const app = express();
connectToDatabase().catch((err) => {
    console.log("Error connecting to database", err);
    process.exit(1);
});

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
console.log("cors enabled for all origins");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/boards", boardRouter);
app.use("/boards/:boardId/columns", columnsRouter);
app.use("/boards/:boardId/tasks", tasksRouter);

module.exports = app;
