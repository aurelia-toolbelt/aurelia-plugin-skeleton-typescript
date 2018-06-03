// @ts-check
const fs = require('fs');
const path = require('path');
/**
 * Wites to file and returns promise
 * 
 */
module.exports.renameFolder = (oldPath, newPath) => {
  return new Promise((resolve, reject) => {
    fs.rename(path.resolve(oldPath), path.resolve(newPath), function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};