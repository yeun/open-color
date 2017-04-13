
const fs = require('fs');

module.exports = function(outputDirName, fileBaseName, content) {

	let dir = outputDirName;
	let path = `${dir}/${fileBaseName}.${content.fileExtension}`;

	fs.mkdir(dir, (err) => {

		if (!err) {
			console.log(`make - dir created: ${dir}`);
		}

		fs.writeFile(path, content.body, (err) => {
			if (err) throw err;
			console.log(`make - file created: ${path}`);
		});
	});
}
