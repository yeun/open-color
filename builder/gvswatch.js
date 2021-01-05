const BaseBuilder = require('./base');
const {hex2rgb} = require('./util/color');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

/**
 * GVSWATCH file format:
 *
 * - gzipped json file:
 *
 * interface GVSwatch {
 *   "@": "swatch",
 *   "_pt": string;
 * }
 * interface GVSwatchFile {
 *  '@': 'swatches';
 *  '$': GVSwatch[];
 * }
 *
 * - _pt is `C#[${r},${g},${b}]
 *
 */
class GVSwatchBuilder extends BaseBuilder {
    constructor(colors, version) {
        super(...arguments);

        const colorNames = Object.keys(colors);
        const hexColors = Object.keys(colors)
            // transform to list of colors/colors lists
            .map(name => typeof colors[name] === 'string' ? colors[name] : colors[name])
            .reduce((all, hex) => all.concat(hex), [])
            .map(hex => hex2rgb(hex));

        this.gvswatch = JSON.stringify({
            "@": "swatches",
            "$": hexColors.map(({r, g, b}) => ({'@': 'swatch', '_pt': `C#[${r},${g},${b}]`}))
        });
    }

    build(outputPaths) {
        const gzipped = zlib.gzipSync(Buffer.from(this.gvswatch, 'utf8'));

        outputPaths.forEach(outputPath =>
            fs.writeFileSync(path.join(outputPath), gzipped));
    }
}

module.exports = GVSwatchBuilder;