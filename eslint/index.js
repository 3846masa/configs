/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:sort/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['import', 'sort', '@typescript-eslint', 'unicorn'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    eqeqeq: ['error', 'always', { null: 'never' }],
    'import/no-named-as-default-member': ['off'],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'no-undefined': ['error'],
    'sort/imports': ['off'],
    'sort/type-properties': ['error'],
    'unicorn/prefer-node-protocol': ['error'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        conditionNames: ['node', 'require', 'import', 'default'],
      },
    },
  },
};
