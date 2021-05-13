# Lerna

Lerna is a tool for managing javascript projects with multiple packages

## Installation

To install run the command:
`npm i -g lerna@3.22.1`

## Initialization

To initialize the project run the command:

`lerna init`

## Adding packages

- To add packages, head to the `packages` folder and create a new folder
- Inside that folder, initialize as a new npm package with `npm init -y`

- When using lerna, do not use npm to install modules
- Install using lerna with `lerna add`

- To add a package run `lerna add [module_name] --scope=[package_name]`

## Adding Typescript

- Install the TSC module `lerna add typescript --dev --scope=local-api`
- Create the tsconfig.json file `npx typescript --init`
- In the `tsconfig.json` file, set the following properties:

```json
{
  "declaration": true,
  "outDir": "./dist"
}
```

- Add the following entries to the `package.json` file:

```json
{
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "tsc --watch --preserveWatchOutput"
  }
}
```
