import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

app.get('/api', (req, res) => res.send('Hello from Server'));

app.post('/api/add-student', async (req, res) => {
    const { name, course } = req.body;
    try {
        const result = await pool.query('INSERT INTO students (name, course) VALUES ($1, $2)', [name, course]);
        res.status(200).json({ status: 'success', message: 'Student added successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));
