#!/usr/bin/env node
"use strict";

require('./helper')
let fs = require("fs"),
path = require("path");

function* ls() {
  listDir(process.argv[2]);
}

function listDir(fileName) {
    fs.readdir(fileName, function(err, items) {
      for (var i=0; i<items.length; i++) {
          process.stdout.write(`${items[i]}\n`);
      }
    });
}

module.exports = ls
