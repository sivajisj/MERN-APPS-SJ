const express = require('express')
const app = express()
const router = require('./routers/router')
app.use('/',router)

app.listen(5000, ()=> console.log("server listening on port : 5000"))