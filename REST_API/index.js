const express = require('express');
const app = express();

// Using body-parser middleware
const BodyParser = require('body-parser');
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

// Mongodb connection
const ConnectMongodb = require("./connection");
ConnectMongodb("mongodb://127.0.0.1:27017/test_db").then(()=>{
    console.log("Mongodb connected:");
});


app.get('/',(req,res)=>{
    res.send("Hello world");
})



// Routes
const UserRoutes = require("./routes/user");
app.use('/user',UserRoutes);


//Server listening
app.listen(8000,()=>{
    console.log("Server is running on port:8000");
})