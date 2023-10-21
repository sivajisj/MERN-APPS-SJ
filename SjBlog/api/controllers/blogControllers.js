const User = require('../modes/User')
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
     res.cookie('token',token).json('ok')
   })
 }else{
  res.status(400).json("wrong credentials")
 }
}

module.exports = {register,login}