const baseConfig = require('./eslint.config.js');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  ...baseConfig,
  ...typescriptPlugin.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
        },
        {
          selector: ['memberLike', 'parameter'],
          format: ['camelCase', 'PascalCase', 'snake_case'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['enumMember', 'typeLike'],
          format: ['PascalCase'],
        },
      ],
    },
  },
];
