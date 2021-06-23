
const {createPool} = require('mysql');


const db = createPool({
    host: 'nody-db-kjwl5thrafwroaij-svc.qovery.io',
    user: 'superuser',
    password: 'mifBZHO3nIT9nqup',
    database: 'nody_db',
    connectionLimit: 10
});

module.exports = { db };
