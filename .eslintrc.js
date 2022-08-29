module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",

  parserOptions: {
    ecmaVersion: [6, 7, 8, 9],

    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
