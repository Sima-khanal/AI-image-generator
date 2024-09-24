const express = require('express');
const fetch = require('node-fetch'); // For making API requests
const app = express();

app.use(express.json());

app.post('/generate-image', async (req, res) => {
    const { prompt } = req.body;

    // Call your image generation API here
    const response = await fetch('YOUR_IMAGE_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    res.json({ imageUrl: data.imageUrl }); // Adjust according to your API's response
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
