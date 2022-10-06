require('dotenv').config()
const {Pool} = require('pg')

const db = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORT, 
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: {
        rejectUnauthorized: false
      }
})

module.exports = db
