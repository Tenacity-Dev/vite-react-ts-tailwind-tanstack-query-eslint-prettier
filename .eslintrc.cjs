module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  // Remove linting from dist, eslintrc.cjs and vite.config.ts
  ignorePatterns: ['dist', '.eslintrc.cjs', "vite.config.ts"],
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Since react 17 we don't need to have React imported at the top
    "react/react-in-jsx-scope": "off",
    "import/order": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/button-has-type": "off",
  },
}
