import { configs as sharedConfigs } from './eslint/config.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const configs = [...sharedConfigs];

export default configs;
