module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'func-names': 'off',
    'prefer-rest-params': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'symbol-description': 'off',
    'no-unused-vars': 'off',
  },
};
