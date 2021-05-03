import { combineReducers } from "redux";
import cellsReducer from "./cells-reducer";
import bundlesReducer from "./bundles-reducer";

const reducers = combineReducers({
  cells: cellsReducer,
  bundle: bundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
