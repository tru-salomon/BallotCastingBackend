const express = require('express');
const users = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const { createUser, getUsers, logInUser } = require('../queries/users');

users.get('/', async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).send({ error: 'Users not found' });
    }
});

users.post('/', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        const token = jwt.sign({ id: newUser.id, useremail: newUser.email }, secret);
        res.status(201).json({ token, user: newUser });
    } catch (error) {
        res.status(404).send({ error: 'User not created' });
    }
});

users.post('/login', async (req, res) => {
    try {
        const loggedUser = await logInUser(req.body);
        if (!loggedUser) {
            throw 'User not found';
        }
        const token = jwt.sign({ id: loggedUser.id, useremail: loggedUser.email }, secret);
        res.status(200).json({ token, user: loggedUser });
    } catch (error) {
        res.status(404).send({ error: 'User not found' });
    }
});

module.exports = users;