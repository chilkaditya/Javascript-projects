const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const collections = require('./config')

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine",'ejs');
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render("login");
})
app.get('/signup',(req,res)=>{
    res.render("signup");
})
app.post('/signup',async(req,res)=>{
    const data = {
        name: req.body.username,
        password: req.body.password
    }
    const userExist = await collections.findOne({name: data.name});
    if(userExist){
        res.send('User already exist,try another one');
    }
    else{
        const saltrounds = 10;
        const hashedPassword = await bcrypt.hash(data.password,saltrounds);
        data.password = hashedPassword;
        const userdata = await collections.insertMany(data);
        res.render("login");
        console.log(userdata);
    }
    
})
app.post('/', async (req,res)=>{
    try{
        const check = await collections.findOne({name: req.body.username});
        if(!check){
            res.send("User name can not find");
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);
        if(isPasswordMatch){
            res.render("home");
        }
        else{
            res.send('Wrong password');
        }
    }
    catch{
        res.send('Invalid details');
    }
})



app.listen(8080);