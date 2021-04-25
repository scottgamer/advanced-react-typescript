import React from "react";
import { useActions } from "../hooks/use-actions";
import "./add-cell.css";

interface AddCellProps {
  nextCellId: string | null;
}

const AddCell = ({ nextCellId }: AddCellProps): JSX.Element => {
  const { insertCellBefore } = useActions();

  return (
    <div className="">
      <button onClick={() => insertCellBefore(nextCellId, "code")}>Code</button>
      <button onClick={() => insertCellBefore(nextCellId, "text")}>Text</button>
    </div>
  );
};

export default AddCell;
