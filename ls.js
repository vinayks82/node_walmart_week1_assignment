#!/usr/bin/env node
"use strict";

require('./helper')
let fs = require("fs");
let path = require("path");

function* ls() {
  if (process.argv.length <= 2) {
    console.log("No arguments");
    process.exit(-1);
  }

  var arg1 = process.argv[2];
  var arg2 = process.argv[3];

  if(arg1 == './' && !arg2) {
    listDir(__dirname);
  }

  if(arg1 == './' && arg2 == '-R') {
    listDirRecursively(__dirname);
  }
}

function listDir(fileName) {
    fs.readdir(fileName, function(err, items) {
      if(err){
        console.log("error reading dir")
      }else {
        items.forEach((value, index, items) => {
          fs.stat(value, function(err, stats) {
            if(err) {
              console.log("error",err)
            }else {
               if (stats.isFile()) {
                 if(! /^\..*/.test(value)) {
                   process.stdout.write(`${value}\n`);
                 }
               }
            }
          })
        })
      }
    });
}

function listDirRecursively(dir) {
  fs.readdir(dir, function(err, items) {
    if(err){
      console.log("error reading dir")
    }else {
      items.forEach((value, index, items) => {
        fs.stat(dir+'/'+value, function(err, stats) {
          if(err) {
            console.log("error reading file",err)
          }else {
             if (stats.isFile()) {
               if(! /^\..*/.test(value)) {
                 if(path.basename(process.cwd()) == path.basename(dir)) {
                   process.stdout.write(`${value}\n`);
                 }else {
                   process.stdout.write(path.basename(dir)+'/');
                   process.stdout.write(`${value}\n`);
                 }
               }
             }
             if (stats.isDirectory()){
               if(! /^\..*/.test(value) && value != 'node_modules') {
                 listDirRecursively(dir+'/'+value+'/');
               }
             }
          }
        })
      })
    }
  });
}

module.exports = ls
