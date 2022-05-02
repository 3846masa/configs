# @3846masa/configs

## Install

```
yarn add --dev github:3846masa/configs
```

## Usage

### TypeScript

```json
// tsconfig.json
{
  "extends": "@3846masa/configs/tsconfig.json"
}
```

### ESLint

```js
// .eslintrc.js
module.exports = {
  extends: [require.resolve('@3846masa/configs/eslint')],
};
```

### Prettier

```js
// prettier.config.js
module.exports = {
  ...require('@3846masa/configs/prettier'),
};
```

### Renovate

```json
// renovate.json
{
  "extends": ["github>3846masa/configs//renovate/default"]
}
```

## License

MIT (c) 3846masa
