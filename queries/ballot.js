const db = require('../db/dbConfig');

const getAllBallots = async () => {
    try {
        const ballots = await db.any('SELECT * FROM ballots');
        return ballots;
    } catch (error) {
        return error;
    }
};

const getBallot = async (id) => {
    try {
        const ballot = await db.one('SELECT * FROM ballots WHERE id = $1', id);
        return ballot;
    } catch (error) {
        return error;
    }
}

const createBallot = async (ballot) => {
    try {
        const newBallot = await db.one(
            "INSERT INTO ballots (id, uuid, user_id, ballot, vote_1, vote_2, vote_3, vote_4, vote_5, vote_6, vote_7, vote_8, vote_9) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
            [ballot.id, ballot.uuid, ballot.user_id, ballot.ballot, ballot.vote_1, ballot.vote_2, ballot.vote_3, ballot.vote_4, ballot.vote_5, ballot.vote_6, ballot.vote_7, ballot.vote_8, ballot.vote_9]
        );
        return newBallot;
    } catch (error) {
        return error;
    }
}
module.exports = { getAllBallots, getBallot, createBallot};