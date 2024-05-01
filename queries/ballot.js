const db = require('../db/dbConfig');

const getAllBallots = async () => {
    try {
        const ballots = await db.any('SELECT * FROM ballots');
        return ballots;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllBallots };