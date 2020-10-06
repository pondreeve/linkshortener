//jshint esversion:6
var express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
var _ = require("lodash");
const Link = require(__dirname+"/models/link.js");
const rootRoutes = require(__dirname+"/routes/root.js");
const newRoute = require(__dirname+"/routes/new.js");
const shortRoute = require(__dirname+"/routes/short.js");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/",rootRoutes);
app.use("/api/shorturl/new",newRoute);
app.use("/api/shorturl",shortRoute);
try {
   mongoose.connect("mongodb://localhost:27017/linkDB",{useNewUrlParser: true, useUnifiedTopology: true});
}
catch (err) {
  console.log(err);
}


app.listen(port, function() {
  console.log("Server started on port: " + port);
});
