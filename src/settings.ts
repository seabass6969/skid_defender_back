const dotenv = require('dotenv')
import {ClientConfig} from 'pg'

dotenv.config();
export const connectionString:ClientConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
    rejectUnauthorized: false
    }
}

