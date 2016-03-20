#!/usr/bin/env node
"use strict";

let fs = require('fs');

function* touch() {
    process.stdout.write("ddddd");
    process.argv.forEach((param) => {
      touchFile(param);
    });
}

function touchFile(fileName) {
  fs.futimes(fd, atime, mtime, callback)
}

module.exports = touch
