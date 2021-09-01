const express=require("express");
const fs = require("fs");
const app=express();
const port=80
const path=require("path");
// Express related to routing specific urls 
app.use('/static',express.static("static"));
app.use(express.urlencoded());
// gets data from form 
//pug related stuff 
app.set('view engine','pug');
app.set("views",path.join( __dirname,"views"))

app.get("/",(req,res)=>{
    const params={'title':"Ameya's Fitness","content":"Hurry! Grab your deal for $30 only/-"}
    res.status(200).render("forms.pug",params);
})

app.post("/",(req,res)=>{
    // const params={'title':"Ameya's Fitness","content":"Hurry! Grab your deal for $30 only/-"}
    console.log(req.body);
    names=req.body.name;
    console.log(names);
    let output=`name of the client is ${names} of age ${req.body.age} stays at${req.body.address}`
    fs.writeFileSync('Output.txt',output);
    const params={'message':"Successfully submitted your form"}
    res.status(200).render("forms.pug",params);
})

app.get("/about",(req,res)=>{
    const params={'title':"Ameya's Fitness","content":"Hurry! Grab your deal for $30 only/-"}
    res.status(200).render("index.html",params);
})

// Start Server 
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

