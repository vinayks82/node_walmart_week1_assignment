#!/usr/bin/env node
"use strict";

require('./helper')
let fs = require("fs"),
path = require("path");

function* mkdir() {
  createDir(process.argv[2]);
}

function createDir(fileName) {
    fs.mkdir(fileName, function (err) {
       if (err) {
         console.log('failed to create directory', err);
       }
    })
}

module.exports = mkdir
