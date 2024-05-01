const db = require('../db/dbConfig');

const getAllMembers = async () => {
    try {
        const members = await db.any('SELECT * FROM members');
        return members;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllMembers };