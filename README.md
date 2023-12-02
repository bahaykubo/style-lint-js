<h1>Style Lint JS</h1>

Installs and configure default linter and style checker for javascript and/or typescript projects.

- [Install](#install)
- [Additional Rules or Override](#additional-rules-or-override)

Using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) with default rules:

- ESLint rules:
  - [For javascript](./lint.js)
  - [For Typescript](./lint-typescript.js)
- [Prettier rules](./lint.js)



## Install

To generate default config files in your project, run

```shell
npx style-lint-js init

# OR for typescript projects

npx style-lint-js init-ts
```

Once installed, you can run `eslint` or `prettier` commands as normal ie `npx eslint file-to-lint.js` or add to your package.json script.

>**Note:** When initialising for typescript projects, you will need to have typescript installed already in your project for the typescript eslint rules to work. 

## Additional Rules or Override

Update the `rc` file to add or override default rules.

ie

```javascript
const rules = require('style-lint-js/.eslintrc');

rules.rules = {
  ...rules.rules,
  ...{
    'import/newline-after-import': 'error',
  }
}

module.exports = rules;
```
