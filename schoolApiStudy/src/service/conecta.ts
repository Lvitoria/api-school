const { Pool } = require('pg')
const { 
    HOST,
    PORT_DATABASE,
    USER,
    PASSWORD,
    DATABASE
    } = process.env
const pool = new Pool({
    host: HOST,
    port: PORT_DATABASE,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
})

export default pool 