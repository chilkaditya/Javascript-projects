const shortId = require('shortid');
const URL = require("../models/url");

async function handleGenerateShortID(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"url is required"});
    const shortid = shortId();
    const result = await URL.create({
        shortID: shortid,
        redirectUrl: body.url,
        visithistory:[]
    })
    await result.save().then(()=>{
         return res.status(201).json({id:shortid});
    }).catch(err=>{
        res.status(500).send({msg:err.message || "Some error occured for creating the shortid"});
    });
}

async function handleRedirectUrl(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },{ $push:{
        visithistory:{
            timestramp:Date.now()
        }
    }})
    res.redirect(entry.redirectUrl);
}
module.exports = {
    handleGenerateShortID,
    handleRedirectUrl,
}