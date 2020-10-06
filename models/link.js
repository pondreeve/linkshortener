//jshint esversion:6
const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const linkSchema = new mongoose.Schema({
  original: String,
  short: String
});

module.exports = mongoose.model("link", linkSchema);
