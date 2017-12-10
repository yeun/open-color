import OpenColor from "open-color";

// black is regular string field
OpenColor.black.substring(1);

// red is array string field
OpenColor.red.forEach(hex => {
    console.log(hex.substring(1));
});