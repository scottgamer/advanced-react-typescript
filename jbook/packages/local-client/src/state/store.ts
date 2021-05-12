import { applyMiddleware, createStore } from "redux";

// import { ActionType } from "./action-types";
import reducers from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// TODO: just for testing purposes
// store.dispatch({
//   type: ActionType.INSERT_CELL_BEFORE,
//   payload: {
//     id: null,
//     type: "code",
//   },
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_BEFORE,
//   payload: {
//     id: null,
//     type: "text",
//   },
// });

// console.log(store.getState());
