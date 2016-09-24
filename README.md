# Open color

## introduction

Open color is a color scheme for UI design. You can use it for font, background, border, etc. It contains a gray and twelve colors. 
All the colors are perceptible by color blind (specifically deuteranopia and protanopia) people.

* The colors are subject to change in the future. Thus, using an Open color as a main identity color is not recommended.

## Installation

```
$ npm install open-color
```

## Variable convention

### SASS, SCSS

```
$oc-(color)-(number)
```

### LESS

```
@oc-(color)-(number)
```

- `oc`:  Abbreviation for Open color
- `(color)`: Color name like gray, red, lime, ect.
- `(number)`: 0 to 9. Brightness spectrum.

## How to use

Import the file to your project and use the variables.

**Example for SASS, SCSS**

```
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

**Example for LESS**

```
@import 'path/open-color';

.body {
  backgrond-color: @oc-gray-0;
  color: @oc-gray-7;
}

a {
  color: @oc-teal-7;

  &:hover,
  &:focus,
  &:active {
    color: @oc-indigo-7;
  }
}
```