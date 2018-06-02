// Print helper
const print = function (color, comment, error) {
  switch (color) {
  case 'green':
    color = '\x1b[32m';
    break;
  case 'white':
    color = '\x1b[37m';
    break;
  case 'red':
    color = '\x1b[31m';
    break;
  case 'blue':
    color = '\x1b[36m';
    break;
  case 'purple':
    color = '\x1b[35m';
    break;
  default:
    color = '\x1b[37m';
  }

  if (error) {
    // Use red always
    console.error('\x1b[31m', comment);
  } else {
    console.log(color, comment);
  }
};

module.exports.consoleLog = function (color, comment) {
  print(color, comment, false);
};

module.exports.consoleError = function (comment) {
  print('red', comment, true);
};
