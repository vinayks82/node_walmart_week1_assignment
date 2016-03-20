#!/usr/bin/env node
"use strict";

let fs = require("fs"),
path = require("path");

function* ls() {
  console.log("SSS");
    process.argv.forEach((param) => {
      console.log(param);
      listDir(param);
    });
}

function listDir(fileName) {
    fs.readdir(path, function(err, items) {
      console.log("ss" +items);
      // for (var i=0; i<items.length; i++) {
      //     console.log(items[i]);
      // }
    });
}

module.exports = ls
