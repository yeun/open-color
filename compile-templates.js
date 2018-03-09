const path = require('path');
const pkg = require('./package.json');

const TemplatedBuilder = require('./builder/templated');
const AseBuilder = require('./builder/ase');
const CraftLibraryBuilder = require('./builder/craft-library');

const COLORS_FILE = path.join(__dirname, 'open-color.json');

const colors = require(COLORS_FILE);

const templatedBuilder = new TemplatedBuilder(colors, pkg.version);
const aseBuilder = new AseBuilder(colors, pkg.version);
const craftLibraryBuilder = new CraftLibraryBuilder(colors, pkg.version);

templatedBuilder.build('_config.yml',
    [path.join(__dirname, 'docs', '_config.yml')]);
templatedBuilder.build('open-color.scss',
    [path.join(__dirname, 'open-color.scss'), path.join(__dirname, 'docs', '_sass', '_open-color.scss')]);
templatedBuilder.build('open-color.css',
    [path.join(__dirname, 'open-color.css')]);
templatedBuilder.build('open-color.less',
    [path.join(__dirname, 'open-color.less')]);
templatedBuilder.build('open-color.styl',
    [path.join(__dirname, 'open-color.styl')]);
templatedBuilder.build('open-color.svg',
    [path.join(__dirname, 'docs', 'asset', 'images', 'open-color.svg')]);
templatedBuilder.build('open-color.tex',
    [path.join(__dirname, 'open-color.tex')]);

templatedBuilder.build('open-color.sketchpalette',
    [path.join(__dirname, 'docs', 'asset', 'download', `open-color_${pkg.version}.sketchpalette`)]);

templatedBuilder.build('open-color.inkscape',
    [path.join(__dirname, 'docs', 'asset', 'download', `open-color_${pkg.version}.gpl`)]);

aseBuilder.build('ase',
    [path.join(__dirname, 'docs', 'asset', 'download', `open-color_${pkg.version}.ase`)]);

craftLibraryBuilder.build(
    [path.join(__dirname, 'docs', 'asset', 'download', `open-color_${pkg.version}.library`)]);

templatedBuilder.build('open-color.oco',
    [path.join(__dirname, 'open-color.oco')]);

templatedBuilder.build('open-color.rcpx',
    [path.join(__dirname, 'open-color.rcpx')]);

templatedBuilder.build('open-color.d.ts',
    [path.join(__dirname, 'open-color.d.ts')]);