#!/usr/bin/env node
"use strict";

let fs = require('fs');

function* cat() {
    process.argv.forEach((param) => {
      readFile(param);
    });
}

function readFile(fileName) {
  fs.readFile(fileName, 'utf8', function(err, contents) {
      process.stdout.write(`${param}`);
  });
}

module.exports = cat
