#!/usr/bin/env node
"use strict";

function* echo() {
    process.argv.forEach((param) => {
      process.stdout.write(`${param}`);
    });
}

module.exports = echo
