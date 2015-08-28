var express = require('express');
var path = require('path');
//var mongoose = require('mongoose');
var app = express();
var index = require('./routes/index');
var bodyParser=require('body-parser');


//var mongoURI = "mongodb://localhost:27017/practice_routines";
//
//var mongoDB = mongoose.connect(mongoURI).connection;
//
//mongoDB.on('error', function(err){
//    if(err){
//        console.log("Mongo Error: ", err);
//    }
//});
//
//mongoDB.once('open', function(){
//    console.log("You are now connected to Mongo");
//});
app.use(bodyParser.json());

app.use('/', index);

app.set("port",(process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on Port", app.get("port"));
});

module.exports = app;