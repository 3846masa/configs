import eslint from '@eslint/js';
import * as eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginSort from 'eslint-plugin-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export const configs = [
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.worker,
        ...globals.commonjs,
      },
      parser: /** @type {import('eslint').Linter.Parser} */ (tseslint.parser),
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        project: true,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': /** @type {import('eslint').ESLint.Plugin} */ (tseslint.plugin),
      import: eslintPluginImport,
      sort: eslintPluginSort,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.strictTypeChecked.at(-1)?.rules,
      ...eslintConfigPrettier.rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginSort.configs.recommended.rules,
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-var-requires': ['off'],
      eqeqeq: ['error', 'always', { null: 'never' }],
      'import/no-named-as-default': ['off'],
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
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      'import/resolver': {
        typescript: {
          conditionNames: ['node', 'require', 'import', 'default'],
        },
      },
    },
  },
];
