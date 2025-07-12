// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get('/skills', async (req, res) => {
    const { data, error } = await supabase.from('skills').select('*');
    if (error) return res.status(500).json({ error });
    res.json(data);
});

app.get('/projects', async (req, res) => {
    const { data, error } = await supabase.from('projects').select('*');
    if (error) return res.status(500).json({ error });
    res.json(data);
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));