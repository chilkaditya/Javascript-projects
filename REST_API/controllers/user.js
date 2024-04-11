const User = require("../models/user");

async function HandleGetAllUser(req,res){
    const allDbUser = await User.find({});
    return res.json(allDbUser);
}
async function HandleGetUserbyId(req,res){
    const UserWithId = await User.findById(req.params.id);
    if(!UserWithId) return res.status(404).json("User not found");
    return res.json(UserWithId);
}
async function HandleUpdateUserbyId(req,res){
    await User.findByIdAndUpdate(req.params.id,{name:"Changed"});
    return res.json({status:"success"});
}
async function HandleDeleteUserbyId(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"success"});
}
async function HandleCreateUser(req,res){
    const body = req.body;
    if(
        // !body
        !body.name
        ||!body.email
        ||!body.gender
        ||!body.job_title
    ){
        return res.status(400).json({msg:"All fields required"});
    }
    const result = await User.create({
        name:body.name,
        email:body.email,
        gender: body.gender,
        job_title: body.job_title,
    });
    await result.save().then(()=>{
        res.status(201).json({msg:"User created succesfully"});
    }).catch(err=>{
        res.status(500).send({msg:err.message || "Some error occured for creating user"});
    });
}

module.exports = {
    HandleGetAllUser,
    HandleGetUserbyId,
    HandleUpdateUserbyId,
    HandleDeleteUserbyId,
    HandleCreateUser
};