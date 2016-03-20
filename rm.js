#!/usr/bin/env node
"use strict";

require('./helper')
let fs = require("fs"),
path = require("path");

function* rm() {
  deleteFile(process.argv[2]);
}

function deleteFile(fileName) {
    fs.unlink(fileName, function (err) {
       if (err) {
         console.log('failed to remove directory', err);
       }
    })
}

module.exports = rm
