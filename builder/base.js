class BaseBuilder{
    constructor(colors, version) {
        this.colors = colors;
        this.version = version;
    }

    build(type, outputPaths, extraData = {}){

    }
}

module.exports = BaseBuilder;