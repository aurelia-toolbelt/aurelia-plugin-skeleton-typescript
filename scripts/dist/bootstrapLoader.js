Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapLoader = function () {
    var Loader = (function () {
        function class_1() {
        }
        class_1.prototype.init = function () {
        };
        class_1.prototype.bundleEnd = function (context) {
            context.source.addContent('FuseBox.import("fuse-box-aurelia-loader")');
            context.source.addContent('FuseBox.import("aurelia-bootstrapper")');
            context.source.addContent('window.FUSEBOX_AURELIA_LOADER_RELOAD = true;');
            context.source.addContent('window.FUSEBOX_AURELIA_LOADER_LOGGING = true;');
        };
        return class_1;
    }());
    return new Loader();
};
//# sourceMappingURL=bootstrapLoader.js.map