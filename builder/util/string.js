function capitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function ljust(text, length){
    while (text.length < length) {
        text += ' ';
    }
    return text;
}

function rjust(text, length){
    while (text.length < length) {
        text = ' ' + text;
    }
    return text;
}

module.exports = {capitalize, ljust, rjust};