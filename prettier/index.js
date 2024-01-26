/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  overrides: [
    {
      files: ['package.json'],
      options: {
        plugins: [require.resolve('prettier-plugin-packagejson')],
        trailingComma: 'none',
      },
    },
    {
      excludeFiles: ['package.json'],
      files: ['*.json'],
      options: {
        jsonRecursiveSort: true,
        plugins: [require.resolve('prettier-plugin-sort-json')],
        trailingComma: 'none',
      },
    },
  ],
  plugins: [],
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
};
