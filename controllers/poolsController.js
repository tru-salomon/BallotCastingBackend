const express = require('express');
const pools = express.Router();

pools.get('/', (req, res) => {
    res.json({ status: "ok" });
});

module.exports = pools;