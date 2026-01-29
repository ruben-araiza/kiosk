import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

const appFiles = ['spa/src/**/*.{js,jsx}'];

export default defineConfig([
  globalIgnores(['dist', 'build']),
  {
    files: appFiles,
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      'prettier',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        __DEV__: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'unused-imports/no-unused-imports': 'warn',
      'no-console': ['error', { allow: ['error', 'warn'] }],
      'prefer-const': ['error', { destructuring: 'all' }],
      'react-hooks/exhaustive-deps': ['warn'],
      'react-hooks/rules-of-hooks': 'error',
    },
    reportUnusedDisableDirectives: 'error',
  },
]);
