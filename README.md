# Advanced React Typescript

Create a new project using npx
`npx create-react-app [name] --template typescript`

## Props and types

- The parent will provide props to its children
- Interface to define what props Child expects to receive
- Checks done by typescript:
  - are we providing the correct props to Child when we show it in Parent?
  - are we using the correctly named + typed props in Child?
