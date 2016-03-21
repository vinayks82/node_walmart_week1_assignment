#!/usr/bin/env node
"use strict";

require('./helper')
let fs = require("fs"),
path = require("path");

function* rm() {
  let arg = process.argv[2].replace('./','');
  removeDirectory(arg);
}

function removeDirectory(dir) {
  fs.lstat(dir, function(err, stats) {
    if(err){
      console.log(JSON.stringify(err));
    }else{
      if(stats.isFile()) {
        fs.unlink(dir, function (err) {
          if(err){
            console.log(JSON.stringify(err));
          }
        })
      }else {
        //delete all the files in the directory
        //then delete directory
        removeDirectoryRecursive(dir);
      }
    }
  })
}



function removeDirectoryRecursive(dirPath) {
  console.log("dddddd",dirPath);
  fs.readdir(dirPath, function(err, files) {
    if (err) {
      console.log(JSON.stringify(err));
    }else {
      if(files.length === 0) {
        fs.rmdir(dirPath, (err) => {
            console.log("here2");
          if(err) {
            console.log(JSON.stringify(err));
          }
        })
      }else {
        files.forEach((file, index, files) => {
          var filePath = dirPath +  file;
          fs.stat(filePath, (err, stats) => {
            if(err) {
                console.log(JSON.stringify(err));
            }else {
              if (stats.isFile()) {
               fs.unlink(filePath, function(err) {
                   if (err) {
                     console.log(JSON.stringify(err));
                   }
               });
             }
            }
          })
        })
        console.log("DIRPATH",dirPath);
        removeDirectory(dirPath);
      }

      // }else {
      //   items.forEach((value, index, files) => {
      //     var filePath = dirPath + file;
      //     fs.stat(filePath, function(err, stats) {
      //         if (err) {
  	  //              console.log(JSON.stringify(err));
  	  //         }else {
      //           if (stats.isFile()) {
  		//                 fs.unlink(filePath, function(err) {
  		//                     if (err) {
      //                       console.log(JSON.stringify(err));
  		//                     }
  		//                 });
  	  //           }
      //
  	  //         if (stats.isDirectory()) {
  		//             removeDirectoryRecursive(filePath + '/');
  	  //            }
      //         }
      //     })
      //   })
      // }
    }
   });
}

module.exports = rm
