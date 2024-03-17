# Vite + React + Typescript + Tanstack Query + Tailwind + Eslint + Prettier

This is a starter template to get you going with the must-have libraries for every project.

The starter includes the following libraries:
- `@tanstack/react-query`
- `axios`
- `tailwind`
- `classnames`
- `tailwind-merge`
- `eslint` and the libraries for the airbnb config
- `prettier`

Also, relative paths are setup in the `tsconfig.json` file so that you can easily import anything you need relatively.

## How to use this starter

---
Clone the repository:
```
https://github.com/Tenacity-Dev/vite-react-ts-tailwind-tanstack-query-eslint-prettier.git
```

cd into the repository:
```
cd vite-react-ts-tailwind-tanstack-query-eslint-prettier
```

To make this repository yours:
```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:
```
npm install
```

Start the local server:
```
npm run web
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
