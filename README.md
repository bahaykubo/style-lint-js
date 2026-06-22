<h1>Style Lint JS</h1>

Installs and configure default linter and style checker for javascript and/or typescript projects.

- [Install](#install)
- [Additional Rules or Override](#additional-rules-or-override)

Using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) with default rules:

- ESLint rules:
  - [For javascript](./eslint.config.js)
  - [For Typescript](./eslint.config-ts.js)
- [Prettier rules](./.prettierrc.js)



## Install

To generate default config files in your project, run

```shell
npx style-lint-js init

# OR for typescript projects

npx style-lint-js init-ts
```

This creates an `eslint.config.js` and `.prettierrc.js` in your project. Once installed, you can run `eslint` or `prettier` commands as normal ie `npx eslint file-to-lint.js` or add to your package.json script.

>**Note:** When initialising for typescript projects, you will need to have typescript installed already in your project for the typescript eslint rules to work.

## Additional Rules or Override

Update `eslint.config.js` to add or override default rules by appending a new config object to the array.

ie

```javascript
const config = require('style-lint-js/eslint.config.js');

module.exports = [
  ...config,
  {
    rules: {
      'import/newline-after-import': 'error',
    },
  },
];
```

For typescript projects:

```javascript
const config = require('style-lint-js/eslint.config-ts.js');

module.exports = [
  ...config,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
];
```

To ignore additional paths, add an `ignores` config object:

```javascript
const config = require('style-lint-js/eslint.config.js');

module.exports = [
  ...config,
  {
    ignores: ['generated/**', 'vendor/**'],
  },
];
```
