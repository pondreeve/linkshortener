//jshint esversion:8
const mongoose = require("mongoose");
const shortid = require("shortid");
const Link = require(__dirname + "/../models/link.js");

// create new short link and save it to DB
function create(original, cb) {

  const link = new Link({
    original: original,
    short: shortid.generate()
  });

  link.save()
    .then(doc => {
      console.log("Inserted link: " + doc.original + " : " + doc.short);
      cb({
        "original_url": doc.original,
        "short_url": doc.short
      });
    })
    .catch(err => {
      console.log("Error inserting record: " + err);
      cb(null);
    });

}

exports.create = create;
