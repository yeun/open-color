
module.exports = function(templates, colors, version) {
	return templates.map(template => ({
		fileExtension: template.fileExtension,
		body: makeContent(template, colors, version)
	}));
}

function makeContent(template, colors, version) {

	let contentHeader = makeHeader(template.commentBegin, template.commentEnd, version);

	let contentColors = template.colors.map(block => {
		return colors.map(color => makeBlock(block.type, block.line, color, template.commentBegin, template.commentEnd)).join('')
	}).join('');

	let contentBody = eval('(colors) => `' + template.container + '`;')(contentColors);

	return contentHeader + contentBody;
}

function makeHeader(commentBegin, commentEnd, version) {
	return `\n${commentBegin}  𝗖 𝗢 𝗟 𝗢 𝗥 ${commentEnd}\n${commentBegin}  v ${version} ${commentEnd}\n${commentBegin}  ─────────────────────────────────── ${commentEnd}\n\n`;
}

function makeBlock(type, line, color, commentBegin, commentEnd) {

	let block = color[type].map((value, index) => {

		if (typeof value === 'object') {
			var optionalName = value.optionalName;
			value = value.value;
		}

		return makeLine(line, color.groupName, index, value, optionalName);

	}).join('\n');

	let displayName = getDisplayName(color.groupName);

	return `\n\n${commentBegin}  ${displayName}\n${commentBegin}  ─────────────────────────────────── ${commentEnd}\n\n${block}\n\n`;
}

function makeLine(line, groupName, index, value, optionalName) {
	return eval('(groupName, index, value, optionalName) => `' + line + '`;')(groupName, index, value, optionalName);
}

function getDisplayName(string) {
	let name = string.split('');
	name[0] = name[0].toUpperCase();
	name = name.join('');
	return name;
}
