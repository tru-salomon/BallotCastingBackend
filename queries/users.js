const db = require('../db/dbConfig');
const bcrypt = require('bcrypt');

const createUser = async (user) => {
    try {
        const { first_name, last_name, dob, email, password, phone_number } = user;
        const salt = 10;
        const hash = await bcrypt.hash(password, salt);
        const newUser = await db.one(
            "INSERT INTO users (first_name, last_name, dob, email, password, phone_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [first_name, last_name, dob, email, hash, phone_number]
        );
        return newUser;
    } catch (error) {
        return error;
    }
}

const getUsers = async () => {
    try {
        const users = await db.any('SELECT * FROM users');
        return users;
    } catch (error) {
        return error;
    }
}

const logInUser = async (user) => {
    try {
        const loggedUser = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [user.email])
    
        if (!loggedUser) {
            return false;
        }

        const passwordMatch = await bcrypt.compare(user.hash, loggedUser.password);
    
        if (!passwordMatch) {
            return false;
        }
        return loggedUser;
    } catch (error) {
            return error;
        }
    }

 module.exports = { createUser, getUsers, logInUser };