const uuidV4 = require('uuid/v4');
const BaseBuilder = require('./base');
const {hex2rgb} = require('./util/color');
const {capitalize} = require('./util/string');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function hex2rgba255(string) {
    const {r, g, b} = hex2rgb(string);
    return {r: r / 255, g: g / 255, b: b / 255, a: 1}
}

/**
 * How craft library expects the directory to look like:
 *
 * Open Color.library
 * ├── ${UUIDv4}.color
 * │   └── metadata.json
 * └── metadata.json
 *
 * What the /metadata.json should look like:
 *  {
 *      // "package" name
 *      name: `Open Color v ${this.version}`,
 *      // some modification timestamp
 *      modificationTime: Date.now(),
 *      // categories that the package includes (uses locked to not be editable inside sketch)
 *      categories: [{name: 'Colors', type: 'color', locked: true}],
 *      // color groups, i.e. reds, greens, blues, ...
 *      groups: colorGroups
 *  }
 *
 * what each /${UUIDv4}.color/metadata.json should look like:
 * {
 *      // color name
 *      "name": "Cyan 9"
 *      // color channels,
 *      "color": {
 *        "r": 0.043137254901960784,
 *        "g": 0.4470588235294118,
 *        "b": 0.5215686274509804,
 *        "a": 1
 *      },
 *      // index inside the group
 *      "secondaryIndex": 9,
 *      // global color group index
 *      "index": 9,
 *      // hardcoded craft category
 *      "category": "Colors"
 * }
 *
 */
class CraftLibraryBuilder extends BaseBuilder {
    constructor(colors, version) {
        super(...arguments);

        this.generalColors = Object.keys(colors)
            .filter(name => typeof colors[name] === 'string')
            .map((name, index) => ({
                name: capitalize(name),
                index,
                category: 'Colors',
                color: hex2rgba255(colors[name])
            }));

        const swatches = Object.keys(colors)
            .filter(name => typeof colors[name] !== 'string');

        this.groups = swatches
            .map((name, index) => ({
                index: this.generalColors.length + index,
                name: capitalize(name),
                category: 'Colors'
            }));

        this.colorSwatches = swatches
            .map((name, index) =>
                colors[name].map((hex, colorIndex) => ({
                    name: `${capitalize(name)} ${colorIndex}`,
                    color: hex2rgba255(hex),
                    secondaryIndex: colorIndex,
                    index: this.generalColors.length + index,
                    category: 'Colors'
                })))
            .reduce((all, colors) => all.concat(colors), []);

        this.metadata = {
            name: `Open Color v ${this.version}`,
            modificationTime: Date.now(),
            categories: [{name: 'Colors', type: 'color', locked: true}],
            groups: this.groups
        };
    }

    buildColorArchive(path) {
        const pathPrefix = 'Open Color.library';
        const output = fs.createWriteStream(`${path}.zip`);
        const archive = archiver('zip', {
            zlib: {level: 9}
        });

        output.on('close', () => console.log(`Build Craft library archive (${archive.pointer()} total bytes)`));
        archive.on('error', (err) => {
            throw err;
        });
        archive.pipe(output);

        archive.append(JSON.stringify(this.metadata), {name: `${pathPrefix}/metadata.json`});
        [...this.generalColors, ...this.colorSwatches]
            .forEach(color => archive.append(JSON.stringify(color), {name: `${pathPrefix}/${uuidV4()}.color/metadata.json`}));

        archive.finalize();
    }

    build(outputPaths) {
        outputPaths.forEach(path => this.buildColorArchive(path));
    }
}

module.exports = CraftLibraryBuilder;