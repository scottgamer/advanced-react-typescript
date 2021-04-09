# JBook

To retrieve the binaries for a given npm module

```bash
npm view [package-name] dist.tarball
```

## Esbuild

[Esbuild](https://esbuild.github.io/) is a extremely fast javascript bundler

### Process

1. Bundle `index.js` file
2. Figure out where the `index.js` file is stored (onResolve step)
3. Attempt to load up the `index.js` file (onLoad step)
4. Parse the `index.js` file, find any `import/require/exports`
5. If there are any `import/require/exports`, figure out where the requested file is (onResolve step)
6. Attempt to load that file up (onLoad step)

## IFrames

### Direct access between frames

- It's allowed when the iframe element doesn't have a 'sandbox' property, or has a 'sandbox="allow-same-origin"' property, and
- We fetch the parent HTML doc and the frame HTML doc from the exact same
  - domain
  - port
  - protocol

### Communication between frames

- Accessing the parent

```javascript
parent.parentValue;
```

- Accessing the child

## Redux Configuration

- redux manages 3 main components
  - store
  - actions
  - reducers
- the store will handle the global state of the application
- the reducers will run a function to update/modify the state
- the actions are the events to call each reducer
- regarding actions, there will be the following levels
  - action-types: enum with the name of the actions

```typescript
export enum ActionType {
  MOVE_CELL = "move_cell",
  DELETE_CELL = "delete_cell",
  INSERT_CELL_BEFORE = "insert_cell_before",
  UPDATE_CELL = "update_cell",
}
```

- actions: define the action type and the payload to be dispatched

```typescript
import { ActionType } from "../action-types";

interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: "up" | "down";
  };
}

interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

interface InsertCellBeforeAction {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string;
    type: "code" | "text";
  };
}

interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellBeforeAction
  | UpdateCellAction;
```

- reducers: set an initial state, check the action type and then dispatch the payload

```typescript
import { Action } from "../actions";
import { ActionType } from "../action-types";
import { Cell } from "../cell";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = (
  state: CellsState = initialState,
  action: Action
): CellsState => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      return state;
    case ActionType.DELETE_CELL:
      return state;
    case ActionType.MOVE_CELL:
      return state;
    case ActionType.INSERT_CELL_BEFORE:
      return state;
    default:
      return state;
  }
};

export default reducer;
```

- main reducer: combines multiple reducers

```typescript
import cellsReducer from "./cells-reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  cells: cellsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
```

- store: main entry point to manage app state

```typescript
import { applyMiddleware, createStore } from "redux";

import reducers from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
```
