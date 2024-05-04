const checkBallot = (req, res, next) => {
    if (!req.body.ballot) {
        res.status(404).send({ error: 'Ballot is required' });
    } else {
        next();
    }
};

const checkVotes = (req, res, next) => {
    if (!req.body.vote_1 || !req.body.vote_2 || !req.body.vote_3 || !req.body.vote_4 || !req.body.vote_5 || !req.body.vote_6 || !req.body.vote_7 || !req.body.vote_8 || !req.body.vote_9) {
        res.status(404).send({ error: 'All votes are required' });
    } else {
        next();
    }
}

module.exports = { checkBallot, checkVotes};