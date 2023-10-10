const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const { logger } = require("./middleware/logger")
const  errorHandler  = require("./middleware/errorHandler")
const corsOptions = require('./configs/corsOptions')
const app = express();

dotenv.config();

// Using CORS
app.use(cors(corsOptions))

// Logger middleware
app.use(logger)

// Receive JSON data
app.use(express.json())

// Cookie parser
app.use(cookieParser())

const PORT = process.env.PORT || 5500;



// Middleware for serving static files
app.use(express.static('public'));


// Root route
app.use('/', require('./routes/root'));

// Error Handler should come right after route handlers
app.use(errorHandler);

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
