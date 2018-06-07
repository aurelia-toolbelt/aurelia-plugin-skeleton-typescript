var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
exports.renameFolder = function (oldPath, newPath) {
    return new Promise(function (resolve, reject) {
        fs_1.default.rename(path_1.default.resolve(oldPath), path_1.default.resolve(newPath), function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.readFile = function (file) {
    return new Promise(function (resolve, reject) {
        fs_1.default.readFile(path_1.default.resolve(file), 'UTF8', function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
exports.writeFile = function (file, data) {
    return new Promise(function (resolve, reject) {
        fs_1.default.writeFile(path_1.default.resolve(file), data, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
exports.print = function (color, comment, error) {
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
        console.error('\x1b[31m', comment);
    }
    else {
        console.log(color, comment);
    }
};
exports.consoleLog = function (color, comment) {
    exports.print(color, comment, false);
};
exports.consoleError = function (comment) {
    exports.print('red', comment, true);
};
//# sourceMappingURL=common.js.map