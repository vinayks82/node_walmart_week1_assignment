#!/usr/bin/env node
"use strict";

require('./helper')
let fs = require('fs');

function* cat() {
  readFile(process.argv[2]);
}

function readFile(fileName) {
  fs.readFile(fileName, 'UTF8', function(err, contents) {
      process.stdout.write(`${contents}`);
  });
}

module.exports = cat
