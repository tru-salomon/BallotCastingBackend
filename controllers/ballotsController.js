const express = require('express');
const ballots = express.Router();

ballots.get('/', (req, res) => {
    res.json({ status: "ok" });
});

module.exports = ballots;

