import React from "react";
import { useActions } from "../hooks/use-actions";
import "./add-cell.css";

interface AddCellProps {
  prevCellId: string | null;
}

const AddCell = ({ prevCellId }: AddCellProps): JSX.Element => {
  const { insertCellAfter } = useActions();

  return (
    <div className="add-cell">
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(prevCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(prevCellId, "text")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span> Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
