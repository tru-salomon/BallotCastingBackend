const express = require('express');
const members = express.Router();
const { getAllMembers, getMember, createMember } = require('../queries/member');
const { checkName, checkDob, checkEmail, checkPassword, checkPhoneNumber } = require('../validations/checkmembers');

members.get('/', async (req, res) => {
    const allMembers = await getAllMembers();
    if (allMembers[0]) {
        res.status(200).json(allMembers);
    } else {
        res.status(500).send({ error: 'Error getting members' });
    }
});

members.get('/:id', async (req, res) => {
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

members.post('/', checkName, checkDob, checkEmail, checkPassword, checkPhoneNumber, async (req, res) => {
    try {
        const newMember = await createMember(req.body);
        res.status(200).json(newMember);
    } catch (error) {
        res.status(404).send({ error: 'Member not created' });
    }
});

module.exports = members;