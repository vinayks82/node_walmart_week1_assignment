#!/usr/bin/env node
"use strict";
require('./helper')
let fs = require('fs')
let path = require('path')

function* touch() {
  touchFile(process.argv[2]);
}

function touchFile(fileName) {
  fs.open(path.join(process.cwd(), fileName), 'a', function(err, fd){
    fs.futimes(fd, new Date(), new Date(), function(err, fd) {
      if(err){
        console.log(err);
      }
    })
  });
}

module.exports = touch
