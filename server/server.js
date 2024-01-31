import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const { Pool } = pg;

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../build")));

// TODO: Set up Sequalize
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

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
