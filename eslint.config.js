const js = require('@eslint/js');
const globals = require('globals');
const prettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  { ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'] },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      'no-var': 'error',
      'no-unused-vars': 'off',
      'prefer-const': 'error',
      'no-useless-concat': 'error',
      'prefer-template': 'error',
      'require-await': 'error',
    },
  },
  prettierRecommended,
];
