function hex2rgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    return {r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255};
}

module.exports = {hex2rgb};