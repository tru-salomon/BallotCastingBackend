const express = require('express');
const pools = express.Router();
const { getAllMembers } = require('../queries/pool');

pools.get('/', async (req, res) => {
    const allMembers = await getAllMembers();
    if (allMembers[0]) {
        res.status(200).json(allMembers);
    } else {
        res.status(500).send({ error: 'Error getting members' });
    }
});

module.exports = pools;