const User = require("../model/User")
const Note = require("../model/Note")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async(req,res)=>{
    const users = await User.find().select('-password').lean()
    if(!users){
        return res.status(400).json({message : "No Users Found"})
    }
    res.json(users)
})

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser= asyncHandler(async(req,res)=>{
   const {username ,password ,roles} = req.body

   //Confirm data
   if(!username || !password || !Array.isArray(roles) || !roles.length){
     return res.status(400).json({message : "All fields are required"})
   }

   //remove duplicates
   const duplicate = await User.findOne({username}).lean().exec()
   if(duplicate){
    return res.status(409).json({message:"Duplicate username"})
   }

   //Hashed password
   const hasedPwd = await bcrypt.hash(password,10) //salt rounds

   const userObject = {username, "password":hasedPwd,roles}
   //create and store new user
   const user = await User.create(userObject)
   if(user){
    res.status(201).json({message: `New user ${username} created`})
   }else{
    res.status(400).json({message : "Invalid user Data received"})
   }
   
})


// @desc Update  user
// @route PATCH /user
// @access Private
const updateUser= asyncHandler(async(req,res)=>{

})

// @desc Delete  user
// @route Delete /user
// @access Private
const deleteUser= asyncHandler(async(req,res)=>{

})

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}