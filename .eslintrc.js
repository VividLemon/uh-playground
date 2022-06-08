module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    'prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': [
      'warn',
      { endOfLine: 'auto', singleQuote: true, semi: false },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
