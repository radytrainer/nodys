
const {createPool} = require('mysql');


const db = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nody_db',
    connectionLimit: 10
});

module.exports = { db };