const { Board } = require("../models");

const getBoard = async (req, res) => {
    try {
        const boards = await Board.find();
        return res.status(200).json(boards);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getBoard,
};
