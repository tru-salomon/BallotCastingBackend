const db = require('../db/dbConfig');

const getAllMembers = async () => {
    try {
        const members = await db.any('SELECT * FROM members');
        return members;
    } catch (error) {
        return error;
    }
};

const getMember = async (id) => {
    try {
        const member = await db.one('SELECT * FROM members WHERE id = $1', id);
        return member;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllMembers, getMember };