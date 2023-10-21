const User = require('../modes/User')
const register = async(req,res)=>{
    const {username , password} = req.body
      console.log(username+ " : "+ password);
      try {
        const userDoc = await User.create({username , password})
        res.json(userDoc)

      } catch (error) {
        res.status(400).json(error)
        console.log(error);
      }
}

module.exports = {register}