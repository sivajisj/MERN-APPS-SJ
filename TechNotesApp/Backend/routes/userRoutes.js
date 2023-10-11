const express = require('express')
const {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}  =  require('../controllers/usersController')
const router = express.Router()

router.route('/')
        .get(getAllUsers)
        .post(createNewUser)
        .patch(updateUser)
        .delete(deleteUser)

module.exports = router