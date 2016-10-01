
const fs = require('fs');
const packageFile = require('../package.json');

const dir = packageFile['output-dir-name'];

fs.readdir(dir, (err, res) => {

	if (err) {
		return console.log(`clean - already clean: ${dir}`);
	}

	res.map(file => {
		let path = `${dir}/${file}`;
		fs.unlinkSync(path);
		console.log(`clean - file removed: ${path}`);
	});

	fs.rmdir(dir, () => console.log(`clean - dir removed: ${dir}`));
});
