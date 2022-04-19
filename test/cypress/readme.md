# Installation

## Install dependencies

```sh
cd test/cypress
yarn
```

## How to open the Cypress CLI

```sh
cd test/cypress
yarn open
```

## How to run the test cases

```sh
cd test/cypress
yarn test
```

# Usage

## Create a Cypress test file

To create a test file using Jest, you will need to add the .spec.ts suffix to the name of the file. Be sure to create the file within the cypress (test/cypress/cypress) folder.

## How to change the available environment variables for Cypress

1. Add the environment variable to the .env file at the root of this monorepo.
2. Go to the test/cypress/cypress/plugins/index.ts file and set the new environment variable as the value for the desired Cypress configuration variable. Example:

    ```Javascript
    config.baseUrl = process.env.CYPRESS_BASE_URL;
    ```
