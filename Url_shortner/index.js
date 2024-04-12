const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    res.send("Welcome");
})

// Mongodb connection
const ConnectMongodb = require("./connection");
ConnectMongodb("mongodb://127.0.0.1:27017/URL_shortner").then(()=>{
    console.log("Mongodb connected");
}).catch(err=>{
    console.log(err.message);
})

app.listen(8000,()=>{
    console.log("Server is running on port:8000");
})