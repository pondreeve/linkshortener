//jshint esversion:6
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Link = require(__dirname + "/../models/link.js");

// get route for redirect
router.get('/:url', function (req, res) {
  console.log("Find url: "+ req.params.url);
  Link.findOne({short: req.params.url}, function (err, link){
    if (!err && link!=null){
      console.dir("Found: "+ link.original + ". Redirecting...");
      // url validator validates domain names without protocol prefix soooo....
      // if original link does not provide http:// or https:// then express wont redirect properly
      // so we prefix it
      if ((link.original.search("http://")===-1) && (link.original.search("https://")===-1)){
        res.redirect("http://"+link.original);
      }else{
        res.redirect(link.original);
      }
    }else{
      res.send("Link "+req.params.url+" was not found.");
      console.log(err);
    }
  }

);

});

module.exports = router;
