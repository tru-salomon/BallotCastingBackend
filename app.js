// Dependencies: express
const cors = require('cors');
const express = require('express');
const usersController = require('./controllers/usersController');

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/users', usersController);

// Routes
app.get('/', (req, res) => {
    res.send('Ballot Casting API is running!');
});

// Members Route
const membersController = require('./controllers/membersController');
app.use('/members', membersController);

// Ballots Route
const ballotsController = require('./controllers/ballotsController');
app.use('/ballots', ballotsController);

// Error Handling
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

// Export
module.exports = app;