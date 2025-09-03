const express = require("express");

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

app.get("/",(req,res,next)=>{
    console.log("Handling / for GET",req.url,req.method);
    res.send("<h1> Welcome to the complete coding</h1>")
    
})

app.get("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for GET",req.url,req.method);
    res.send(`
        <h1> Please give me your details</h1>
        <form action="/contact-us" method="POST">
        <input type ="text" name="name" placeholder="Enter your name"/>
        <input type ="email" name="email" placeholder="Enter your email"/>
        <input type ="submit"/>
        </form>
        `) 
});
app.post("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for POST",req.url,req.method);
    res.send(`We will contact you soon!`)
});








const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`Server running at http://localhost:${PORT}`)
});