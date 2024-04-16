const express = require("express");
const app = express();
const UrlRoutes = require("./routes/url");
const UserRoutes = require("./routes/user");


// Using body-parser middleware
const BodyParser = require('body-parser');
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

// Routes
app.use("/url",UrlRoutes);
app.use("/user",UserRoutes);


// Mongodb connection
const ConnectMongodb = require("./connection");
const { handleGenerateShortID } = require("./controllers/url");
ConnectMongodb("mongodb://127.0.0.1:27017/URL_shortner").then(()=>{
    console.log("Mongodb connected");
}).catch(err=>{
    console.log(err.message);
})

app.listen(8000,()=>{
    console.log("Server is running on port:8000");
})