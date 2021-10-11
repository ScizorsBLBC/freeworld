const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    // "plugin:import/errors",
    // "plugin:import/warnings",
    // "plugin:import/typescript",
    "plugin:react/recommended",
    // "plugin:security/recommended",
    "plugin:node/recommended",
    // "plugin:sonarjs/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/external-module-folders": ["node_modules"],
  },
  plugins: [
    // "import",
    // "jsx-a11y",
    "node",
    // "promise",
    "react",
    "react-hooks",
    // "security",
    // "simple-import-sort",
    // "sonarjs",
  ],
  rules: {},
};
