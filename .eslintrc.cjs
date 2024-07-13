/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    'prettier/prettier': ['error', { semi: true }],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*']
      }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        cssFiles: ['resources/css/app.css']
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser'
    }
  ]
};
