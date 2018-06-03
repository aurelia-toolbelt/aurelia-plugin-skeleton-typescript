// @ts-check
const fs = require('fs');
const path = require('path');
/**
 * Reads file and returns promise
 * 
 */
module.exports.readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(file), 'UTF8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};