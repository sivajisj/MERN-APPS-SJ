const express = require('express')
const {register} = require('../controllers/blogControllers')
const router = express.Router()

router.post('/register',register)
module.exports = router