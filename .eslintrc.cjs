module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-var': 'error',
    'no-plusplus': 'off',
    'no-unused-vars': 'error',
    'no-param-reassign': 'off',
    'no-case-declarations': 'off',
    'quote-props': ['warn', 'as-needed'],
    'import/prefer-default-export': 'off',
    // TypeScript rules
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // React rules
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['ts', 'tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
