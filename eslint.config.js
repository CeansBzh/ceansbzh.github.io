import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vue from 'eslint-plugin-vue';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwind from 'eslint-plugin-tailwindcss';
import prettierConfig from '@vue/eslint-config-prettier';

export default [
  { ignores: ['.gitignore', 'dist/*'] },
  ...vue.configs['flat/recommended'],
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11y
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
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
    ...prettierConfig
  }
];
