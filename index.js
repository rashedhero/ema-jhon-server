
const express = require('express')
// const bodyParser=require('body-parser');
// var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
var uri = `mongodb://${process.env.DB_User}:${process.env.DB_PASS}@cluster0-shard-00-00.ndn3e.mongodb.net:27017,cluster0-shard-00-01.ndn3e.mongodb.net:27017,cluster0-shard-00-02.ndn3e.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-xnkmmx-shard-0&authSource=admin&retryWrites=true&w=majority`;
const app = express()

// app.use(bodyParser.json());
// app.use(cors())
const port = 5000

console.log(process.env.DB_User)


MongoClient.connect(uri, function(err, client) {
  const collection = client.db("emaJhonName").collection("vegetables");
  // perform actions on the collection object
 
  console.log('db connected')

});



app.listen(port)
