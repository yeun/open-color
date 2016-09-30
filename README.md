# Open color

Open color is a color scheme for UI design. You can use it for font, background, border, etc. It contains a gray and twelve colors.
Open color is provided as CSS, SCSS, LESS, Stylus, Adobe library, Photoshop/Illustrator swatches and Sketch palette.

**Note**

* All the color is tested on deuteranopia and protanopia mode. The process will soon be published in the article.
* The colors are subject to change in the future. Thus, using an Open color as a main identity color is not recommended.

## Available colors

- Gray
- Red
- Pink
- Grape
- Violet
- Indigo
- Blue
- Cyan
- Teal
- Green
- Lime
- Yellow
- Orange

## Installation

```
$ npm install open-color
```

## Variable convention

### SASS, SCSS

```sass
$oc-(color)-(number)
```

### LESS

```less
@oc-(color)-(number)
```

### Stylus

```styl
oc-(color)-(number)
```
### CSS

```css
--oc-(color)-(number)
```

---

- `oc`:  Abbreviation for Open color
- `(color)`: Color name such as gray, red, lime, etc.
- `(number)`: 0 to 9. Brightness spectrum.


## How to use

Import the file to your project and use the variables.

**Example for SASS, SCSS**

```sass
@import 'path/open-color';

.body {
  background-color: $oc-gray-0;
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

```less
@import 'path/open-color';

.body {
  background-color: @oc-gray-0;
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

**Example for Stylus**

```styl
@import 'path/open-color.styl'

.body
  background-color: oc-gray-0
  color: oc-gray-7

a
  color: oc-teal-7

  &:hover
  &:focus
  &:active
    color: oc-indigo-7
```

**Example for CSS**

```css
@import 'path/open-color.css';

.body {
  background-color: var(--oc-gray-0);
  color: var(--oc-gray-7);
}

a {
  color: var(--oc-teal-7);
}

a:hover,
a:focus,
a:active {
  color: var(--oc-indigo-7);
}
```

## Contribution

Check out the list below.

### Color value

- `open-color.less`
- `open-color.scss`
- `open-color.styl`
- `open-color.css`
- `docs/_config.yml`
- `docs/_sass/_open-color.scss`
- `docs/asset/download/open-color_*.*.*.aco`
- `docs/asset/download/open-color_*.*.*.ase`
- `docs/asset/download/open-color_*.*.*.sketchpalette`
- Adobe library (admin rights)

### Version number

- `package.json`
- `open-color.less`
- `open-color.scss`
- `open-color.styl`
- `open-color.css`
- `docs/_config.yml`
- `docs/_sass/_open-color.scss`
- `docs/asset/download/open-color_*.*.*.aco`
- `docs/asset/download/open-color_*.*.*.ase`
- `docs/asset/download/open-color_*.*.*.sketchpalette`
- Adobe library (admin rights)

### Document

- `README.md`
- `docs/documents.html`

### Introduction

- `README.md`
- `docs/_includes/introduction.html`
- `docs/documents.html`
