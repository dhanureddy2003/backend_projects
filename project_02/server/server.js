import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>The server has started!!!</h1>');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "setup": "Why don't scientists trust atoms?",
            "punchline": "Because they make up everything!"
        },
        {
            "id": 2,
            "setup": "How do you organize a space party?",
            "punchline": "You planet."
        },
        {
            "id": 3,
            "setup": "Why did the scarecrow win an award?",
            "punchline": "Because he was outstanding in his field!"
        },
        {
            "id": 4,
            "setup": "Why don't skeletons fight each other?",
            "punchline": "They don't have the guts."
        },
        {
            "id": 5,
            "setup": "What do you call fake spaghetti?",
            "punchline": "An impasta."
        },
        {
            "id": 6,
            "setup": "Why was the math book sad?",
            "punchline": "Because it had too many problems."
        },
        {
            "id": 7,
            "setup": "What do you get if you cross a snowman and a vampire?",
            "punchline": "Frostbite."
        },
        {
            "id": 8,
            "setup": "Why do cows wear bells?",
            "punchline": "Because their horns don't work."
        },
        {
            "id": 9,
            "setup": "Why did the bicycle fall over?",
            "punchline": "Because it was two-tired."
        },
        {
            "id": 10,
            "setup": "What do you call cheese that isn't yours?",
            "punchline": "Nacho cheese."
        }
    ];
    res.send(jokes); // Send the full jokes array as JSON
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); // Use http if not serving via https
});
