// getting-started.js

// Collections are tables and documents are rows 

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ameyakart', {useNewUrlParser: true,useUnifiedTopology:true});
// Here we are establishing connection with mongod database service 
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
console.log("Connected Now...")
});

// Storing data using mongoose 
// Schema how data is stored 
var kittySchema = new mongoose.Schema({
    name: String
  });
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    // console.log(greeting);
  };




//   Model is compiled schema which cannot be changed or altered
var Kitten = mongoose.model('Kitten', kittySchema); 
// Saved as pural of schema 

// https://mongoosejs.com/docs/index.html  for reference


// Documents are rows which are used to represent individual values (docs are defined by objects )
// Adding objects values (rows or documents) to your schema which is compiled as a model 
var Ameya_Kitu = new Kitten({ name: 'Rashna' });
console.log(Ameya_Kitu.name);
// Ameya_Kitu.speak();
// add a function to ur existing schema using the speak method 
// Changes in schema need too be done before making a model hence copy the speak function to store values in database before compiling the model

// Store the data in mongodb
Ameya_Kitu.save(function(err,Ameya_Kitu){
    if(err)return console.error(err);
    // Ameya_Kitu.speak()
});
// Qurying your database using find function 
Kitten.find({name:"Rashna"},function(err,kittens){
  if(err) return console.error(err);
  console.log(kittens);
})