/**
 * Reads file and returns promise
 * 
 */
module.exports.readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'UTF8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};