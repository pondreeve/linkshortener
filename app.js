//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
require('dotenv').config();
const rootRoutes = require(__dirname+"/routes/root.js");
const newRoute = require(__dirname+"/routes/new.js");
const shortRoute = require(__dirname+"/routes/short.js");
const app = express();
const port = 5002;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/",rootRoutes);
app.use("/api/shorturl/new",newRoute);
app.use("/api/shorturl",shortRoute);
try {
   mongoose.connect(process.env.DB_CONNECTION_STRING,{useNewUrlParser: true, useUnifiedTopology: true});
}
catch (err) {
  console.log(err);
}


app.listen(port, function() {
  console.log("Server started on port: " + port);
});
