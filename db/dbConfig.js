const pgp = require('pg-promise')();
require('dotenv').config();

const cn = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
};

const db = pgp(cn);

db.connect()
    .then((cn) => {
        console.log('Connected to database:', cn.client.database);
        cn.done();
    }).catch((error) => {
        console.log('Error connecting to database:', error);
    }
);

module.exports = db;