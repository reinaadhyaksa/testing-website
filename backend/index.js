require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { supabase } = require('./supabase');
const uploadRouter = require('./upload');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: [
        'https://testing-website-omega.vercel.app',
        'http://localhost:5000'
    ]
}));

app.use(express.json());

app.set('supabase', supabase);

app.use('/api/upload', uploadRouter);

app.get('/api/articles', async (req, res) => {
    try {
        console.log('Attempting to fetch articles from Supabase...');
        const { data, error } = await supabase
            .from('artikel')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Supabase error:', error);
            throw error;
        }

        console.log('Successfully fetched articles:', data);
        res.json(data || []); 
    } catch (err) {
        console.error('Error in /api/articles:', err);
        res.status(500).json({
            error: err.message,
            details: 'Failed to fetch articles. Please check server logs.'
        });
    }
});

app.get('/api/articles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('artikel')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        if (!data) {
            return res.status(404).json({ error: 'Article not found' });
        }

        res.json(data);
    } catch (err) {
        console.error('Error fetching article:', err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/articles', async (req, res) => {
    try {
        const { judul, deskripsi, penulis, isi, gambar_url } = req.body;

        const { data, error } = await supabase
            .from('artikel')
            .insert([{ judul, deskripsi, penulis, isi, gambar_url }]);

        if (error) throw error;
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;