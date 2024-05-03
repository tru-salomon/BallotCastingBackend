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


module.exports = { getAllBallots, getBallot };