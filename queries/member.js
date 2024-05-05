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
const createMember = async (member) => {
    try {
        const newMember = await db.one(
            'INSERT INTO members (first_name, last_name, dob, user_id, email, password, phone_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [member.first_name, member.last_name, member.dob, member.user_id, member.email, member.password]
        );
        return newMember;
    } catch (error) {
        return error;
    }
}

const deleteMember = async (id) => {
    try {
        const deletedMember = await db.one(
            "DELETE FROM members WHERE id = $1 RETURNING *",
            id
        );
        return deletedMember;
    } catch (error) {
        return error;
    }
};

const updateMember = async (id) => {
    try {
        const updatedMember = await db.one(
            "UPDATE members SET first_name = $1, last_name = $2, dob = $3, user_id = $4, email = $5, password = $6, phone_number = $7 WHERE id = $8 RETURNING *",
            [member.first_name, member.last_name, member.dob, member.user_id, member.email, member.password, member.phone_number, id]
        );
        return updatedMember;
    } catch (error) {
        return error;
    }
};
    
module.exports = { getAllMembers, getMember, createMember, deleteMember, updateMember};