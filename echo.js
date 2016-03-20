#!/usr/bin/env node
"use strict";

require('./helper')
let fs = require('fs').promise

function* echo() {
    process.argv.forEach(function (param,position) {
      if(position > 1) {
        process.stdout.write(`${param}`)
        if(position < process.argv.length) {
          process.stdout.write(` `)
        }
      }
    })
    process.stdout.write(`\n`)
}

module.exports = echo
