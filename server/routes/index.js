var express = require('express');
var router = express.Router();
var path = require ('path');


var data = require("../public/data/practice.json");

var beginnerData = require("../public/data/beginner.json");
var intermediateData =  require("../public/data/intermediate.json");
var advancedData = require("../public/data/advanced.json");

router.get('/data/practice', function(req, res, next){
    data.find(function(err, data){
        res.send(data);
    });
});


router.get('data/beginner', function(req, res, next){
    data.find(function(err, beginnerData){
        res.send(beginnerData);
    });
});

router.get('data/intermediate', function(req, res, next){
    data.find(function(err, intermediateData){
        res.send(intermediateData);
    });
});

router.get('data/advanced', function(req, res, next){
    data.find(function(err, advancedData){
        res.send(advancedData);
    });
});


router.get("/*", function(req, res, next){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;