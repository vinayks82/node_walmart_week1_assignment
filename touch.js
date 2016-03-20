#!/usr/bin/env node
"use strict";
require('./helper')
let fs = require('fs');

function* touch() {
  touchFile(process.argv[2]);
}

function touchFile(fileName) {
  fs.futimes(fileName, new Date(), new Date(), function(err, contents){

  });
}

module.exports = touch
