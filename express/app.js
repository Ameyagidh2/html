const express=require("express");
const path=require("path");
const app=express();  
const port=80;
// for pug you need to give  a path also  then set the app as view engine

// Express is used for different tab mapping and routing 
// Importing static files  url first then folder
app.use('/static',express.static('static'))
// http://localhost/static/index.js

// Using pug template
app.set("view engine","pug")
// Pug is an alternative to html just to write the files 
// pug end point 
app.get("/demo",(req,res)=>{
  res.status(200).render("demo",{title:"Ameya Santosh Gidh",message:"Pug demo"});
});
// set view directory 
app.set('views',path.join(__dirname,"views"))

app.get("/",(req,res)=>{
      res.send("Ameya gidh@gb");
    });
 
 app.get("/this",(req,res)=>{
        res.status.send("Not Found");
      });   
app.listen(port,()=>{
    console.log("at server localhost ${port}");
})    
