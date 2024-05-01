declare module 'eslint-plugin-import' {
  const plugin: import('eslint').ESLint.Plugin & {
    configs: {
      recommended: {
        rules: import('eslint').Linter.RulesRecord;
      };
    };
  };
  export = plugin;
}
