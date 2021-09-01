// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ameyakart', {useNewUrlParser: true,useUnifiedTopology:true});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
console.log("Connected Now...")
});