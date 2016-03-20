#!/usr/bin/env node
"use strict";

require('./helper')
let fs = require("fs"),
path = require("path");

function* rm() {
  deleteFile(process.argv[2]);
}

function deleteFile(fileName) {
  fs.readdir(fileName, function(err, items) {
    for (var i=0; i<items.length; i++) {
      console.log(items[i])
      fs.unlink(items[i], function (err) {
         if (err) {
           console.log('failed to remove directory', err);
         }
      })
    }
    if(items.length < 1) {
      fs.rmdir(fileName, function(err) {
        if (err) {
          console.log('failed to remove directory', err);
        }
      })
    }
  });
}

module.exports = rm
