import React from "react";
import { useActions } from "../hooks/use-actions";

interface ActionBarProps {
  id: string;
}

const ActionBar = ({ id }: ActionBarProps): JSX.Element => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div>
      <button onClick={() => moveCell(id, "up")}>Up</button>
      <button onClick={() => moveCell(id, "down")}>Down</button>
      <button onClick={() => deleteCell(id)}>Delete</button>
    </div>
  );
};

export default ActionBar;