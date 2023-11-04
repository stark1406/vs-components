/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:vue/vue3-recommended'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
      'no-console': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      "vue/multi-word-component-names": "off"
    }
  };