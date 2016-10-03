const BaseBuilder = require('./base');
const ase = require('ase-utils');
const fs = require('fs');
const path = require('path');

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function hex2rgb(hex) {
    var bigint = parseInt(hex.substring(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, (bigint >> 0) & 255];
}

class AseBuilder extends BaseBuilder {
    constructor(colors, version, templatesDir = path.join(__dirname, '..', 'templates')) {
        super(...arguments);

        const inputColors = Object.keys(colors)
            .filter(name => typeof colors[name] !== 'string')
            .map(name => colors[name].map((hex, index) => ({
                "name": `${capitalize(name)} 0${index} ${hex.toUpperCase()}`,
                "model": "RGB",
                "color": hex2rgb(hex).map(value => value / 255),
                "type": "global"
            })))
            .reduce((a, b) => a.concat(b), []);

        this.aseColors = {
            version: '1.0',
            groups: [],
            colors: inputColors
        };
    }

    build(file, outputPaths) {
        const buffer = ase.encode(this.aseColors);

        outputPaths.forEach(outputPath =>
            fs.writeFileSync(path.join(outputPath), buffer));
    }
}

module.exports = AseBuilder;