import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import ts from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // config ignores files, equal `.eslintignore`
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'public/',
      'wasm/',
      '.idea/',
      '.vscode/',
    ],
  },

  // extends configs
  js.configs.recommended,
  ...ts.configs.recommended,

  // basic config
  {
    languageOptions: {
      globals: {
        // ...globals.es2021,
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // react tsx files linting
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {},
  },

  // after all eslint plugins configs to override, see https://github.com/prettier/eslint-config-prettier
  prettier,
];
