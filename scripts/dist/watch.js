Object.defineProperty(exports, "__esModule", { value: true });
var fuse_box_1 = require("fuse-box");
var typechecker_1 = require("./typechecker");
var bootstrapLoader_1 = require("./bootstrapLoader");
var packageName = require('../../package.json').name;
var fuse, target = 'browser@es6';
console.log('\x1b[36m', packageName);
var instructions = "\n    > sample/main.ts\n    + **/*.{ts,html,css}\n    + fuse-box-css\n    + aurelia-bootstrapper\n    + aurelia-framework\n    + aurelia-pal\n    + aurelia-metadata\n    + aurelia-loader-default\n    + aurelia-polyfills\n    + aurelia-fetch-client\n    + aurelia-pal-browser\n    + aurelia-animator-css\n    + aurelia-logging-console\n    + aurelia-templating-binding\n    + aurelia-templating-resources\n    + aurelia-event-aggregator\n    + aurelia-history-browser\n    + aurelia-templating-router\n    + fuse-box-aurelia-loader";
var webIndexTemplate = "<!DOCTYPE html>\n    <html>\n        <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>Welcome to Aurelia with FuseBox</title>\n        <link\n          rel=\"stylesheet\"\n          href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css\"\n          integrity=\"sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ\" crossorigin=\"anonymous\">\n        <script\n          src=\"https://code.jquery.com/jquery-3.1.1.slim.min.js\"\n          integrity=\"sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n\"\n          crossorigin=\"anonymous\"></script>\n        <script\n          src=\"https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js\"\n          integrity=\"sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb\"\n          crossorigin=\"anonymous\"></script>\n        <script\n          src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js\"\n          integrity=\"sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn\"\n          crossorigin=\"anonymous\"></script>\n    </head>\n    <body aurelia-app=\"sample/main\"></body>\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"./app.js\"></script>\n    </html>";
fuse_box_1.Sparky.task('config', function () {
    var _a;
    fuse = fuse_box_1.FuseBox.init({
        homeDir: '../../src',
        globals: {
            'default': '*'
        },
        target: target,
        output: '../../dev/$name.js',
        cache: false,
        log: false,
        alias: (_a = {},
            _a[packageName] = "~/" + packageName,
            _a),
        plugins: [
            bootstrapLoader_1.bootstrapLoader(),
            fuse_box_1.CSSPlugin(),
            fuse_box_1.HTMLPlugin(),
            fuse_box_1.WebIndexPlugin({
                templateString: webIndexTemplate
            })
        ]
    });
    fuse.bundle('app')
        .instructions(instructions)
        .sourceMaps(true)
        .watch()
        .completed(function () {
        typechecker_1.runTypeChecker();
    });
});
fuse_box_1.Sparky.task('clean', function () {
    return fuse_box_1.Sparky.src('../../dev/').clean('../../dev/');
});
fuse_box_1.Sparky.task('default', ['clean', 'config'], function () {
    fuse.dev();
    fuse.run();
});
//# sourceMappingURL=watch.js.map