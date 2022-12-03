module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    indent: ['error', 2],
    'linebreak-style': ['off', process.platform === 'win32' ? 'windows' : 'unix'],
    // 'linebreak-style': ['warn', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'prefer-const': 'warn',
    'no-console': 'warn'
  }
};
