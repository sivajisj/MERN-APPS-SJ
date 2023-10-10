const {format} = require("date-fns")
const {v4:uuid} = require("uuid")
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
/**
 * Logs events to a specified file.
 * 
 * @param {string} message - The message to be logged.
 * @param {string} logFileName - The name of the log file.
 */
const logEvents = async (message, logFileName) => {
    // Formatting the current date and time.
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
    
    // Constructing a log item with a unique identifier.
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    // Checking if the 'logs' directory exists. If not, create it.
    try{
        if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
            await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
        }
    
        // Appending the log item to the specified log file.
        await fsPromises.appendFile(path.join(__dirname, "..", "logs", logFileName), logItem);
    }catch(error){
        console.log(error);
    }
}


/**
 * Express middleware for logging HTTP request details.
 * 
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
const logger = (req, res, next) => {
    // Use the logEvents function to log the HTTP request method, URL, and origin header.
    // The logs are saved to 'reqLog.log' file.
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log');
    
    // Additionally, log the HTTP request method and path to the console for immediate visibility.
    console.log(`${req.method} ${req.path}`);
    
    // Proceed to the next middleware or route handler in the stack.
    next();
}

module.exports = {logEvents, logger}