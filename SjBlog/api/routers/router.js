const express = require('express')
const {register, login, profile,logout} = require('../controllers/blogControllers')
const router = express.Router()


router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.get('/profile',profile)

module.exports = router