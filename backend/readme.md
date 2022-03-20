# Installation

## Install dependencies

```sh
cd backend
yarn
```

## Create tsconfig

```sh
npx tsc --init
```

## Configure linting in VSCode

Download the VSCode extensions for [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Then go to the VSCode settings (Ctrl + Shift + P > Preferences: Open Settings (JSON)) and add these options:

```
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "diffEditor.ignoreTrimWhitespace": false,
```

## Enable Husky Git hooks

```sh
yarn prepare
```

## How to run

```
# in watch mode
yarn dev


# not in watch mode
yarn execute
```

# Husky

## Create a Husky Git hook

```sh
npx husky add .husky/file-name "your command here"
```

## List of husky hooks

| File              | Description                                   |
| ----------------- | --------------------------------------------- |
| .husky/pre-commit | Enforces Prettier linter fixes before commits |
