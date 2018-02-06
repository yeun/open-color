const Handlebars = require('handlebars');
const BaseBuilder = require('./base');
const fs = require('fs');
const path = require('path');
const {hex2rgb} = require('./util/color');
const {capitalize} = require('./util/string');

let hbsArgs = (fn) => (...values) => fn(...values.slice(0, -1));

Handlebars.registerHelper('capitalize', capitalize);
Handlebars.registerHelper('eq', (a, b) => a === b);
Handlebars.registerHelper('and', (a, b) => a && b);
Handlebars.registerHelper('join', (a, b) => a.join(b));
Handlebars.registerHelper('add', hbsArgs((...values) => values.reduce((a, b) => a + b, 0)));
Handlebars.registerHelper('sub', (a, b) => a - b);
Handlebars.registerHelper('div', (a, b) => a / b);
Handlebars.registerHelper('mul', (a, b) => a * b);
Handlebars.registerHelper('upper', (a) => a.toUpperCase());
Handlebars.registerHelper('apply', hbsArgs((fn, ...args) => fn.apply(undefined, args)));
Handlebars.registerHelper('hex2rgb', hex2rgb);
Handlebars.registerHelper('block-params', function() {
    var args = [],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
        args.push(arguments[i]);
    }

    return options.fn(this, {data: options.data, blockParams: args});
});

class TemplatedBuilder extends BaseBuilder {
    constructor(colors, version, templatesDir = path.join(__dirname, '..', 'templates')) {
        super(...arguments);

        this.templatesDir = templatesDir;
        this.colorsArray = Object.keys(colors)
            .filter(name => typeof colors[name] !== 'string')
            .map(name => ({name, hex: colors[name]}));
        this.generalColors = Object.keys(colors)
            .filter(name => typeof colors[name] === 'string')
            .map(name => ({name, hex: colors[name]}));

        this.spectrum = this.colorsArray[0].hex.length - 1;
    }


    build(file, outputPaths, extraData = {}){
        const template = fs.readFileSync(path.join(this.templatesDir, `${file}.hbs`), {encoding: 'utf8'});
        const compile = Handlebars.compile(template);

        const compiled = compile({
            version: this.version,
            colors: this.colorsArray,
            general: this.generalColors,
            spectrum: this.spectrum,
            filter: extraData.filter ? extraData.filter : color => color
        });

        outputPaths.forEach(outputPath =>
            fs.writeFileSync(path.join(outputPath), compiled));
    }
}

module.exports = TemplatedBuilder;