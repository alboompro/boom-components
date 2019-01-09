# Contributing to Boom Components

Contributing to Boom Components isn't limited to just filing bugs, users are more than welcomed to make suggestions, report any issue they may find, and make pull requests to help make Boom Components better.

### Development process

Boom Components uses [Storybook](https://storybook.js.org/) to get an interactive UI and improve our development workflow.

To start developing fork/clone this repo and run the following:

```bash
$ cd boom-components
$ npm i
$ npm run storybook
```

### Tests

This project uses Jest and Enzyme and all components should have at least their **snapshot test**.

## Style Guide

[Prettier](https://prettier.io) will catch most styling issues that may exist in your code. You can check the status of your code styling by simply running `npm run prettier`.

However, there are still some styles that Prettier cannot pick up.

### Semantic Commit Messages

We follow [this one](https://github.com/slashsbin/styleguide-git-commit-message) but in short:

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

#### Example

```
feat: allow overriding of webpack config
^--^  ^--------------^
|     |
|     +-> Subject in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

The various types of commits:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

### Branch organization

We use [git-flow](https://github.com/danielkummer/git-flow-cheatsheet) to keep everyone in the same page when it comes to manage branches.

### Code Conventions

**Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation.

#### JavaScript

ES6 standards. Prefer using modern language features where they make the code better.
