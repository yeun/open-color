# Open color

## introduction

Open color is a color scheme for UI design. You can use it for font, background, border etc. It contains a gray and 12 colors. 
All the color is perceptible by color blind (specifically deuteranopia and protanopia) person.

* Since the colors can be adjusted in future, using Open color as main identity color is not recommended.

## Installation

```
$ npm install open-color
```

## Variable convention

`$oc-(color)-(number)`

- `oc`:  Abbreviation for Open color
- `(color)`: Color name like gray, red, lime ect.
- `(number)`: 0 to 9. Color brightness spectrum.

## How to use

Import the file to your project and use the variables.

**Example**

```
//SASS, SCSS
@import 'path/open-color';

.body {
  backgrond-color: $oc-gray-0;
  color: $oc-gray-7;
}

a {
  color: $oc-teal-7;

  &:hover,
  &:focus,
  &:active {
    color: $oc-indigo-7;
  }
}
```