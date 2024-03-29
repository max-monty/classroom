import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(resolve(__dirname, "../build")));

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
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

app.get('/api/get-students', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

app.get('/*', function (req, res) {
    res.sendFile(join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
