# Installation

Install nvm (recommended)

```sh
TODO
```

use node 16.4.2

```sh
nvm install 16.4.2
nvm use 16.4.2
```

install dependencies

```sh
cd backend
yarn # or npm install
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
  "editor.formatOnSaveMode": "modifications",
  "editor.tabSize": 4,
  "diffEditor.ignoreTrimWhitespace": false,
```

## Enable Husky Git hooks

```sh
yarn prepare
```

## How to run

```sh
# in watch mode
yarn dev # or npm run dev


# not in watch mode
yarn execute # or npm run execute
```

## Migrations

Go to src folder

```sh
cd backend/src
```

Follow the [documentation](https://sequelize.org/master/manual/migrations.html) to see how to run it

### Seeds

```sh
yarn sequelize-cli db:seed:all
```

# Technologies and frameworks

-   express
-   Typescript
-   sequelize (ORM)
    -   [documentation](https://sequelize.org/v6/index.html)
    -   [video used to study](https://www.youtube.com/watch?v=VyEKwp6Q4fY&ab_channel=willjw3)
-   postgres

# Husky

## Create a Husky Git hook

```sh
npx husky add .husky/file-name "your command here"
```

## List of husky hooks

| File              | Description                                   |
| ----------------- | --------------------------------------------- |
| .husky/pre-commit | Enforces Prettier linter fixes before commits |
