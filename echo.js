#!/usr/bin/env node
"use strict";

require('./helper')
let fs = require('fs').promise

function* echo() {
    process.argv.forEach((param,index) => {
      if(index > 1) {
        process.stdout.write(`${param}`);
      }
    });
    process.stdout.write(`\n`);
}

module.exports = echo
