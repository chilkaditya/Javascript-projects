const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            unique:true,
        },
        gender:{
            type:String
        },
        job_title:{
            type:String
        },
    }
);
const User = mongoose.model('user',userSchema);
module.exports = User;
