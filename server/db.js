const pg = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    searchPath: ['knex', 'public'],
});

module.exports = pg;