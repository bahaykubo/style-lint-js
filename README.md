
# Style Lint JS

Installs and configure default linter and style checker for javascript and/or typescript projects.

Using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) with default rules and as seen here:

ESLint rules:
  - [For javascript](./lint.js)
  - [For Typescript](./lint-typescript.js)

[Prettier rules](./lint.js)

## Install

To generate default config files in your project, run

```shell
npx style-lint init

# OR for typescript projects

npx style-lint init-ts
```

Once installed, you can run `eslint` or `prettier` commands as normal ie `npx eslint file-to-lint.js` or add to your package.json script.

## Additional Rules or Override

Update the `rc` file to add or override default rules.

ie

```javascript
const rules = require('style-lint-js/lint');

rules.rules = {
  ...rules.rules,
  ...{
    'import/newline-after-import': 'error',
  }
}

module.exports = rules;
```
