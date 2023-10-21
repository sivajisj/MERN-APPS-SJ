const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routers/router')
const cookieParser = require('cookie-parser')



const PORT = process.env.PORT || 5500
const url = process.env.MONGO_URI

app.use(cors({ credentials: true , origin :'https://5173-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io'}))
app.use(express.json())
app.use(cookieParser())

 mongoose.connect(url)
 console.log("connected to DB");
app.use('/',router)
// app.post('/register',(req,res)=>{
//     res.json('test ok')
// })
app.listen(PORT, ()=> console.log("server listening on port :"+ PORT))
