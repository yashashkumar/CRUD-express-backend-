const {Client} = require('pg');

const database = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Yashas@200116",
    database: "employee"
})

module.exports = database;