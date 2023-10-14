
const express = require('express');
const mongoose =require("mongoose")
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const { logger,logEvents } = require("./middleware/logger")
const  errorHandler  = require("./middleware/errorHandler")
const corsOptions = require('./configs/corsOptions')
const connectDB = require('./configs/dbConn')
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5500;
connectDB()

// Using CORS
app.use(cors(corsOptions))

// Logger middleware
app.use(logger)

// Receive JSON data
app.use(express.json())

// Cookie parser
app.use(cookieParser())



// Middleware for serving static files
app.use(express.static('public'));


// Root route
app.use('/', require('./routes/root'));

app.use('/users', require('./routes/userRoutes'))


// 404 handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error Handler should come right after route handlers
app.use(errorHandler);

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



mongoose.connection.once('open',()=>{
    console.log("App is connected to DB");
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})