const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const salt = bcrypt.genSaltSync(10)
const secret = 'asdfghjk0765re2tygwdcvetg4twrecw'

const register = async(req,res)=>{
    const {username , password} = req.body
       
      console.log(username+ " : "+ password);
      try {
        const userDoc = await User.create({
          username ,
          password : bcrypt.hashSync(password,salt) ,
        
        })
        console.log(userDoc);
        res.json(userDoc)

      } catch (error) {
        res.status(400).json(error)
        console.log(error);
      }
}


const login = async(req,res)=>{
  const {username , password} = req.body
 const userDoc =await User.findOne({username})
 const passOk = bcrypt.compareSync(password, userDoc.password)
 console.log(passOk);
 if(passOk){
   jwt.sign({username,id:userDoc._id},secret, {}, (err,token) =>{
     if(err) throw err;
     res.cookie('token',token).json({
      id:userDoc._id,username
     })
   })
 }else{
  res.status(400).json("wrong credentials")
 }
}



const profile = (req, res)=> {
  const {token} = req.cookies;
  jwt.verify(token , secret , {},(err, info) => {
    if(err) throw err;
    console.log(info);
    res.json(info)
  })
  res.status(200).json({cookies :req.cookies,profile})
}

const logout = (req,res)=>{
  res.cookie('token','').json('logout')
}
const Post =  

module.exports = {register,login,profile,logout}