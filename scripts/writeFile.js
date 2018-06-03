const fs = require('fs');
const path = require('path');
/**
 * Wites to file and returns promise
 * 
 */
module.exports.writeFile = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.resolve(file), data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};