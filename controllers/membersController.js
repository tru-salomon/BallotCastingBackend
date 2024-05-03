const express = require('express');
const pools = express.Router();
const { getAllMembers, getMember } = require('../queries/member');

pools.get('/', async (req, res) => {
    const allMembers = await getAllMembers();
    if (allMembers[0]) {
        res.status(200).json(allMembers);
    } else {
        res.status(500).send({ error: 'Error getting members' });
    }
});

pools.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const member = await getMember(id);
        if (member.id) {
            res.status(200).json(member);
        }
    } catch (error) {
        res.status(404).send({ error: 'Member not found' });
    }
});

module.exports = pools;