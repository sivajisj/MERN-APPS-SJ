const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const Post = require('./models/Post')
const router = require('./routers/router')
const cookieParser = require('cookie-parser')
const multer = require('multer');
const fs = require('fs')
const upploadMiddleware = multer({dest :'uploads/'})

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const PORT = process.env.PORT || 5500
const url = process.env.MONGO_URI
const secret = 'asdfghjk0765re2tygwdcvetg4twrecw'

app.use(cors({
    origin: 'https://5173-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io',
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie"],
    exposedHeaders: ["Set-Cookie"]
}));app.use(express.json())
app.use(cookieParser())
app.use('/uploads',express.static(__dirname+ '/uploads'))

 mongoose.connect(url)
 console.log("connected to DB");
app.use('/',router)
app.post('/post', upploadMiddleware.single('file'),async (req, res) => {
    if (!req.file) {
        console.error("No file uploaded!");
        return res.status(400).send("No file uploaded!");
    }
    console.log(req.file);  // Not req.files

    const {originalname,path} = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length -1 ]
    const newPath = path+"."+ext
    fs.renameSync(path , newPath)

    const {token} = req.cookies;
    jwt.verify(token , secret , {},async(err, info) => {
        if(err) throw err;
        const {title,summary , content} = req.body
        const postDocument = await Post.create({
        title,
        summary,
        content,
        cover:newPath,
        author : info.id,
    })

    res.json(postDocument); 
    
        
      })

    
  
  
    
});

app.get('/post', async (req, res) => {
    const posts = await Post.find()
        .populate('author', ['username'])
        .sort({ createdAt: -1 })
        .limit(20);
    res.json(posts);
});


app.get(`/post/:id`, async(req,res)=>{
    const {id} = req.params
    const postDoc = await Post.findById(id).populate('author', ['username'])
    res.json(postDoc)
})
app.listen(PORT, ()=> console.log("server listening on port : " + PORT))
