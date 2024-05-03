const express = require('express');
const ballots = express.Router();
const { getAllBallots, getBallot } = require('../queries/ballot');

ballots.get('/', async (req, res) => {
    const allBallots = await getAllBallots();
    if (allBallots[0]) {
        res.status(200).json(allBallots);
    } else {
        res.status(500).send({ error: 'Error getting ballots' });
    }
});

ballots.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ballot = await getBallot(id);
        if (ballot.id) {
            res.status(200).json(ballot);
        }
    } catch (error) {
        res.status(404).send({ error: 'Ballot not found' });
    }
});


module.exports = ballots;

