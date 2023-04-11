module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "react/prop-types": 0,
  },
};
