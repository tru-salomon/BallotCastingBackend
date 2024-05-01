const pgp = require('pg-promise')();
require('dotenv').config();

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
};

const db = pgp(cn);

// db.connect()
//     .then((cn) => {
//         console.log('Connected to database:', cn.client.database);
//         cn.done();
//     }).catch((error) => {
//         console.log('Error connecting to database:', error);
//     }
//     );

module.exports = db;