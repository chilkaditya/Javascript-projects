const User = require('../models/user');

async function handleUserSignup(req,res){
    const {name,email,password} = req.body;
    const result = await User.create({
        name:name,
        email:email,
        password:password,
    })
    await result.save().then(()=>{
        return res.status(200).json({msg:"New user created succesfully"});
    }).catch(err=>{
        res.json({error:err.message});
    })
}
async function handleUserLogin(req,res){
    const {email,password} = req.body;
    const resultUser = await User.findOne({email,password});
    if(!resultUser){
        return res.json({msg:"User is not existed"});
    }
    // console.log("hi");
    return res.status(200).json({msg:"Login succesfull"});
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}