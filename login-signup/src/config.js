const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://127.0.0.1:27017/login-tut');

connect.then(()=>{
    console.log("Dtabase connected succesfully");
}).catch(()=>{
    console.log("Database cannot be connecte");
})
const LoginSchema = new mongoose.Schema({
    name: String,
    password: String
});
const collections = mongoose.model('users', LoginSchema);
module.exports = collections;