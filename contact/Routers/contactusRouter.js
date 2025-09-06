const express =require('express');
const contactusRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathutils");

contactusRouter.get("/contact-us",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contactus.html"));
});

contactusRouter.post("/contact-us",(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,"views","contactsubmit.html"));
});

module.exports = contactusRouter;