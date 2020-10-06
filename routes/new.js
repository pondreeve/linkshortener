//jshint esversion:8
const express = require('express');
var router = express.Router();
const validator = require(__dirname + "/../controlers/validator.js");
const shortUrl = require(__dirname + "/../controlers/shortUrl.js");
router.post('/', function (req, res) {
  //validate syntax and avaliability
  validator.validUrl(req.body.url,(valid)=>{
    console.log("finished parsing and checking. Valid: "+valid);
    if(valid){
      shortUrl.create(req.body.url,(doc) => {
        if (doc != null){
          // sucess, send JSON
          res.json(doc);
        }
        else{
          res.status(500).send("Something went wrong.");
        }
      });
    }
    else{
      res.json({"error":"invalid URL"});
    }
  });

});

module.exports = router;
