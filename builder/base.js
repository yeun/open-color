class BaseBuilder{
    constructor(colors, version) {
        this.colors = colors;
        this.version = version;
    }

    build(file, outputPaths, extraData = {}){

    }
}

module.exports = BaseBuilder;