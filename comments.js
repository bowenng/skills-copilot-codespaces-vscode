// Create web server
// 1. Create web server
// 2. Create route
// 3. Create method
// 4. Create handler

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 3. Create method
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// 4. Create handler
app.get('/comments/:id', (req, res) => {
    res.send(`Comments number: ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});