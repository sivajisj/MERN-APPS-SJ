const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const {logger} = require("./middleware/logger")
const app = express();

dotenv.config();

app.use(logger)
const PORT = process.env.PORT || 5500;



// Middleware for serving static files
app.use(express.static('public'));

//recieve json data :
app.use(express.json())

// Root route
app.use('/', require('./routes/root'));

// 404 handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Centralized error-handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: err.message });
    } else {
        res.type('txt').send(err.message);
    }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
