// /server.js
const express = require('express');
const fetch = require('node-fetch'); // Make sure to install this: npm install node-fetch
const path = require('path');

const app = express();

// Middleware to serve static files and parse JSON requests
app.use(express.static('public'));
app.use(express.json());

// Endpoint to handle image generation
app.post('/generate-image', async (req, res) => {
    const { prompt } = req.body;

    try {
        // API call to OpenAI (replace with your API key and endpoint)
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer YOUR_API_KEY`, // Replace with your actual API key
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt,
                n: 1, // Number of images to generate
                size: "1024x1024" // Image size
            }),
        });

        // Ensure the API call was successful
        if (!response.ok) {
            throw new Error('Failed to fetch image from API');
        }

        const data = await response.json();
        const imageUrl = data.data[0].url;

        res.json({ imageUrl });
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ message: 'Error generating image' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
