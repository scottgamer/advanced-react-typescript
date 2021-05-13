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
