/**
 * Wites to file and returns promise
 * 
 */
module.exports.renameFolder = (oldPath, newPath) => {
  return new Promise((resolve, reject) => {
    fs.rename(oldPath, newPath, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};