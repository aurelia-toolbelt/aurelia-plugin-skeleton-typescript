const fs = require('fs');
/**
 * Wites to file and returns promise
 * 
 */
module.exports.writeFile = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};