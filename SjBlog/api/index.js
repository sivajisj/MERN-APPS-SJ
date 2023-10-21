const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routers/router')

app.use(cors())
app.use(express.json())

 mongoose.connect('mongodb+srv://sivaji:19MG1A0448@cluster0.2ub8jnh.mongodb.net/MERN-BLOG?retryWrites=true')
 console.log("connected to DB");
app.use('/',router)
// app.post('/register',(req,res)=>{
//     res.json('test ok')
// })
app.listen(5000, ()=> console.log("server listening on port : 5000"))
//MONGO_URI = mongodb+srv://sivaji:19MG1A0448@cluster0.2ub8jnh.mongodb.net/MERN-BLOG?retryWrites=true