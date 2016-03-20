#!/usr/bin/env node
"use strict";

let fs = require('fs');

function* touch() {
    process.argv.forEach((param) => {
      touchFile(param);
    });
}

function touchFile(fileName) {
  fs.futimes(fd, atime, mtime, callback)
}

module.exports = touch
