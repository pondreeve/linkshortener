//jshint esversion:6
const validator = require("validator");
const dns = require('dns');
const _ = require('lodash');
const dnsOptions = {
  family: 4,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

function validUrl(url = "", cb) {
  _.toLower(url);
  let len1 = url.length;
  let pingUrl = "";
  let noPrefix = url.replace("https://","");
  if (noPrefix.length != len1){
    pingUrl = noPrefix;
  }
  else{
    pingUrl = url.replace("http://","");
  }
  console.log("Ping url: "+pingUrl);
  if (validator.isURL(url)) {
    // url IS valid URL
    console.log("Valid Syntax.");
    dns.lookup(pingUrl,(err,address,family)=>{
      if (address != undefined){
        // URL is avaliable
        console.log("URL Available!");
        cb(true);
      }
      else {
        // URL is NOT available
        console.log("URL Unavailable!");
        cb(false);
      }
    });
  }
  else{
    // url is NOT valid URL
    console.log("Invalid Syntax.");
    cb(false);
  }
}

exports.validUrl = validUrl;
