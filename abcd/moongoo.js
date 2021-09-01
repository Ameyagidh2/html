// use db_name
// show collections(tables of db) documents are rows
db.text.insert({}) 
// db is the current working database and insert to add file into the current db.

// Mongo Db 
// Inserting items 

use ameyakart
db.items.insertOne({name:'S8+',price:68000,sold:250,rating:4.5})
db.items.insertMany([{name:'S5+',price:58000,sold:278,rating:4.6},{name:'star pro',price:3000,sold:340,rating:4.3},{name:'Wave 525',price:8000,sold:2145,rating:4.9,AGE:"Old"}])
db.items.find()
Right click to paste on mongod and mongo shell 
virtual machine windows password PassE0rd!
// Searching in mongodb
db.items.find({rating:3.5})
db.items.find({rating:{$gt:3.5}})
db.items.find({rating:{$gt:3.5},price:{$lt:3.5}})
db.items.find({rating:{$gt:3.5}},{price:{$lt:3.5}})
db.items.find({
    $or:[{rating:{$gt:3.5}},{price:{$lt:3.5}]
    })

db.items.find({name:"S8+"})

db.items.find({ sold:{$lt:450},price:{$gt:60999}})

// Or type of query
db.item.find({$or:[sold:{$gt:200},
    price:{$lt:200}
    ]})

// Deleting data in mongo db 
db.items.deleteOne({price:68000})
db.items.deleteMany({price:68000})
// All items deleted
db.anotherCollection.insertOne({a:89})
// Updating Data 
show dbs 
Show Collections
db.items.updateOne({name:"S5+"},{$set:{price:67000}})
db.items.updateOne({name:"S5+"},{$set:{price:57000,name:"S5"})
db.items.updateMany({name:"S5+"},{price:57000})