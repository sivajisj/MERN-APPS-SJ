const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routers/router')
const cookieParser = require('cookie-parser')
const multer = require('multer');
const upploadMiddleware = multer({dest :'uploads/'})



const PORT = process.env.PORT || 5500
const url = process.env.MONGO_URI

app.use(cors({
    origin: 'https://5173-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io',
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie"],
    exposedHeaders: ["Set-Cookie"]
}));app.use(express.json())
app.use(cookieParser())

 mongoose.connect(url)
 console.log("connected to DB");
app.use('/',router)
app.post('/post', upploadMiddleware.single('file'), (req, res) => {
    console.log(req.file);  // Not req.files
    if (!req.file) {
        console.error("No file uploaded!");
        return res.status(400).send("No file uploaded!");
    }
    res.json(req.file);  // Not req.files
});
// app.post('/register',(req,res)=>{
//     res.json('test ok')
// })
app.listen(PORT, ()=> console.log("server listening on port :"+ PORT))
