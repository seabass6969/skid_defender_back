import dotenv from 'dotenv';

dotenv.config();
export const connectionString = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
    rejectUnauthorized: false
    }
}

