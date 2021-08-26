const { Client } = require ('pg');

const client = new Client ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
    database: "Employee"
})

client.on("connect", () => {
    console.log("Database connection");
})

client.on("end", () => {
    console.log("connection end");
})

module.exports = client;