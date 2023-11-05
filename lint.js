module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: 'error',
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'no-unused-vars': 'off',
    'prefer-const': 'error',
    'no-tabs': 'error',
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'padding-line-between-statements': ['error', { blankLine: 'never', prev: 'import', next: 'import' }],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-multi-spaces': 'error',
    'require-await': 'error',
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'func-call-spacing': 'error',
    'space-infix-ops': 'error',
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
        block: {
          balanced: true,
        },
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
};
