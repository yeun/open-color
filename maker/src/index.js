
const packageFile = require('../package.json');

const makeContent = require('./make-content');
const makeFile = require('./make-file');

const colors = require('../colors.json');
const templates = require('../templates.json');

const outputDirName = packageFile['output-dir-name'];
const baseFileName = packageFile['base-file-name'];
const version = packageFile.version;


makeContent(templates, colors, version).map(content => {
	makeFile(outputDirName, baseFileName, content);
});
