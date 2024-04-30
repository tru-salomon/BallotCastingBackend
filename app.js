// Dependencies: express
const cors = require('cors');
const express = require('express');

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Ballot Casting API is running!');
});

// Pools Route
const poolsController = require('./controllers/poolsController');
app.use('/pools', poolsController);

// Ballots Route
const ballotsController = require('./controllers/ballotsController');
app.use('/ballots', ballotsController);

// Error Handling
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

// Export
module.exports = app;