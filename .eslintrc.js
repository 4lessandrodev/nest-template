module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "standard-with-typescript"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "no-tabs": 0,
    "indent": ["error", "tab"],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["off"],
    "@typescript-eslint/member-delimiter-style": "off",
    "semi": ["error", "always"],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/brace-style": "off",
    "space-before-function-paren": ["error", "always"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/triple-slash-reference": "off"
  },
};

