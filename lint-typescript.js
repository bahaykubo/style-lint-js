let baseRules = require('./lint');

baseRules.extends.push('plugin:@typescript-eslint/recommended');
baseRules['parser'] = '@typescript-eslint/parser';
baseRules['plugins'] = ['@typescript-eslint'];

const typescriptRules = {
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: false
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      },
      overrides: {
        interface: {
          multiline: {
            delimiter: 'semi',
            requireLast: true
          }
        },
        typeLiteral: {
          multiline: {
            delimiter: 'semi',
            requireLast: true
          }
        }
      }
    }
  ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['camelCase']
    },
    {
      selector: ['memberLike', 'parameter'],
      format: ['camelCase', 'PascalCase', 'snake_case'],
      leadingUnderscore: 'allow'
    },
    {
      selector: ['enumMember', 'typeLike'],
      format: ['PascalCase']
    }
  ]
};
baseRules.rules = {
  ...baseRules.rules,
  ...typescriptRules
};

module.exports = baseRules;
