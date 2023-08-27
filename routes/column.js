const express = require("express");
const { Column, Board } = require("../models");

const router = express.Router({ mergeParams: true });

router.post("/", async function (req, res, next) {
    let { name, color } = req.body;
    let { boardId } = req.params;
    if (!name) {
        // error
        return res.status(400).json({ error: "Column name is required" });
    }
    if (!color) {
        color = "#49C4E5";
    }

    const column = new Column({ name, color, board: boardId });
    try {
        const board = await Board.findById(boardId);
        board.columns.push(column._id);
        await column.save();
        await board.save();
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Error saving column", error: err.toString() });
    }
    res.status(200).json(column);
});

router.put("/:columnId", async function (req, res, next) {
    const { boardId, columnId } = req.params;
    const { name, color } = req.body;
    if (!name && !color) {
        // error
        res.status(400).json({ error: "Column name or color is required" });
    }

    Column.findById(columnId, (err, column) => {
        if (err) {
            return res.status(500).json({
                message: "Error updating column",
                error: err.toString(),
            });
        }
        if (!column) {
            return res.status(404).json({ message: "Column not found" });
        }
        if (name) {
            column.name = name;
        }
        if (color) {
            column.color = color;
        }
        column.save();
        res.status(200).json(column);
    });
});

router.delete("/:columnId", async function (req, res, next) {
    const { boardId, columnId } = req.params;
    Column.findByIdAndDelete(columnId, (err, column) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting column",
                error: err.toString(),
            });
        }
        res.status(200).json(column);
    });
});

module.exports = router;
