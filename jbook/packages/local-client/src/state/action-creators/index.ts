import { Dispatch } from "redux";
import axios from "axios";
import {
  DeleteCellAction,
  Direction,
  InsertCellAfterAction,
  MoveCellAction,
  UpdateCellAction,
  Action,
} from "../actions";

import { ActionType } from "../action-types";
import { Cell, CellTypes } from "../cell";

import bundle from "../../bundler";
import { RootState } from "../reducers";

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: { id, direction },
  };
};

export const insertCellAfter = (
  id: string | null,
  cellType: CellTypes
): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: cellType,
    },
  };
};

export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BUNDLE_START,
      payload: {
        cellId,
      },
    });

    const result = await bundle(input);

    dispatch({
      type: ActionType.BUNDLE_COMPLETE,
      payload: {
        cellId,
        bundle: {
          code: result.code,
          err: result.error,
        },
      },
    });
  };
};

export const fetchCells = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_CELLS });

    try {
      const { data }: { data: Cell[] } = await axios.get("/cells");
      dispatch({ type: ActionType.FETCH_CELLS_COMPLETE, payload: data });
    } catch (error) {
      dispatch({ type: ActionType.FETCH_CELLS_ERROR, payload: error.message });
    }
  };
};

export const saveCells = () => {
  // getState will return the current state of the store
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const state = getState();
    if (state.cells) {
      const {
        cells: { data, order },
      } = state;
      const cells = order.map((id) => data[id]);
      try {
        await axios.post("/cells", { cells });
      } catch (error) {
        dispatch({ type: ActionType.SAVE_CELLS_ERROR, payload: error.message });
      }
    }
  };
};
