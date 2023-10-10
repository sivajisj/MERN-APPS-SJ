const express = require('express')
const app = express()
require("dotenv").config()
const path = require('path')
const PORT = process.env.PORT || 5500;

app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require("./routes/root"))
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' }); // Fixed the typo
    } else {
        res.type('txt').send('404 Not Found');
    }
});
app.listen(PORT, ()=>console.log(`server listening on ${PORT}`))