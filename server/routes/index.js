var express = require('express');
var router = express.Router();
var path = require ('path');


var data = require("../public/data/practice.json");

router.get('/data/practice', function(req, res, next){
    data.find(function(err, data){
        res.send(data);
    });
});



router.get("/*", function(req, res, next){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;