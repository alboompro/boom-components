# boom-elements

### Development

boom-elements uses [Storybook](https://storybook.js.org/) to provide an interactive UI and improve our development workflow. For each component write some stories, see [here](https://storybook.js.org/basics/writing-stories/) how to do it or check the current stories in the project.

To start developing clone this repo and install dependencies:

```bash
$ npm i
```

Later run Storybook:

```bash
$ npm run storybook
```

### Tests

This project uses Jest and Enzyme and all components should have at least their **snapshot test**. Check it out [here](https://jestjs.io/docs/en/snapshot-testing) to see how it works.

To run tests:

```bash
$ npm test
```
