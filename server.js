const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/scrape', async (req, res) => {
    const { url } = req.body;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const links = [];
        const images = [];

        $('a').each((_, element) => {
            const href = $(element).attr('href');
            if (href && href.startsWith('http')) {
                links.push(href);
            }
        });

        $('img').each((_, element) => {
            const src = $(element).attr('src');
            if (src && src.startsWith('http')) {
                images.push(src);
            }
        });

        res.json({ links, images });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
