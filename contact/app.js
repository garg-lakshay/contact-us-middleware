const express = require("express");
const homerRouter = require("./Routers/homerouter");
const contactusRouter = require("./Routers/contactusRouter");   
const path = require("path");
const rootDir = require("./utils/pathutils");
const app = express();


app.use((req,res,next)=>{
    console.log("This is my first middleware")
    next();
});

app.use((req,res,next)=>{
    console.log("This is my second middleware",req.url,req.method)
    next();
});

// app.use((req,res,next)=>{
//     console.log("This is my third middleware",req.url,req.method);
//     //res.send("<p>Welcome to the first express js server of Lakshay garg</p>");
//     next();
// });
app.use(express.urlencoded());
app.use(homerRouter);
app.use(contactusRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"));
})



const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`Server running at http://localhost:${PORT}`)
});