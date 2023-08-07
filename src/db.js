import {createPool} from 'mysql2/promise'
import {DB_HOST,DB_PASSWORD,DB_PORT,DB_USER,DB_DATABASE} from './config.js'
import {connect} from 'mongoose'

(async () => {
    try{
        const db = await connect("mongodb://localhost/client")
        console.log('DB connected to: ', db.connection.name)
    }catch(error){
        console.error(error);
    }
})();

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})
