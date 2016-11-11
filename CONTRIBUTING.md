# Contributing to Open Color

Hi!  We could use your help.  Let us help you help us.  Or something.

## General

1. If you are looking for a place to begin, **please send PRs for bugfixes instead of new features.**

2.  **Help with documentation is always appreciated**.

3.  Please **be courteous and constructive** when commenting on issues, commits, and pull requests.

## Bug Reports & Issues

1.  When reporting a bug, please **provide steps to reproduce**.  If possible, show code.
  
2.  If you report a bug, and it is inactive for a significant amount of time, it may be closed.  **Please respond promptly to requests for more information**.

## Pull Requests

1. Before sending a large PR, it's recommended to **create an issue to propose the change**.  Nobody wants to write a book of code and throw it away.

2.  Due to the above, before creating a PR for a new feature, **create an issue to propose the feature.**

3.  Please **respect existing coding conventions**, whatever those may be.

4.  If your PR has been waiting in limbo for some time, it's very helpful to **rebase against master**, which will make it easier to merge.

7.  **Always run `npm run compile-templates` before sending a PR.**

## Source Control

1. Please **squash your commits** when sending a pull request.  If you are unfamiliar with this process, see [this guide](https://help.github.com/articles/about-git-rebase/).  If you have already pushed your changesets and are squashing thereafter, this may necessitate the use of a "force push".  Please [read the docs](http://git-scm.com/docs/git-push) before you attempt this. 

## Adding new languages

1. To add support for an additional language, create a [handlebars](http://handlebarsjs.com/) template in the [`/templates` directory](https://github.com/yeun/open-color/tree/master/templates). 

2. The template naming scheme should follow `open-color.ext.hbs` where `ext` is the file extension of the new language (Example: a `svg` templates should use `open-color.svg.hbs`).

3. Register your new template in the [compile-templates file](https://github.com/yeun/open-color/blob/master/compile-templates.js) by adding a call to the `templatedBuilder.build` function:

```js
templatedBuilder.build('open-color.ext',
    [path.join(__dirname, 'open-color.ext')]);
```

__Note__ if you want to add support for a new binary file format, please orient yourself at the usage of our [`.ase` builder](https://github.com/yeun/open-color/blob/master/builder/ase.js).

## TL;DR

**Be kind, be diligent, look before you leap into a PR, and follow common community conventions**.

*- The Open Color Team*

*this contributing guide is heavily inspired by [mocha](https://github.com/mochajs/mocha/blob/master/CONTRIBUTING.md)*