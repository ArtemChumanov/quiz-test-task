module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "prettier",
    "plugin:@next/next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "no-console": ["warn", { allow: ["info", "warn", "error", "debug"] }],
    "import/no-unresolved": 0,
    "import/extensions": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "spaced-comment": 0,
    "object-shorthand": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "prettier/prettier": "error",
    "react/no-unescaped-entities": "off",
    "import/no-cycle": [0, { ignoreExternal: true }],
    "prefer-const": "off",
    "no-param-reassign": 0,
    "no-undef": 0,
    "prefer-template": 0,
    "arrow-body-style": 0,
    "no-unused-expressions": 0,
    "import/no-mutable-exports": 0,
    "no-use-before-define": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: true, classes: false, variables: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
