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
  "extends": "@3846masa/configs/typescript/tsconfig.json"
}
```

### ESLint

```js
// eslint.config.mjs
import { configs as sharedConfigs } from '@3846masa/configs/eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
const configs = [...sharedConfigs];

export default configs;
```

### Prettier

```js
// prettier.config.mjs
import { config as sharedConfig } from '@3846masa/configs/prettier';

export default {
  ...sharedConfig,
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
