import React from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";

const CellList: React.FC = (): JSX.Element => {
  const cells = useTypedSelector(({ cells }) => {
    if (cells) {
      return cells.order.map((id) => cells.data[id]);
    }
    return;
  });

  const renderedCells =
    cells && cells.map((cell) => <CellListItem key={cell.id} cell={cell} />);

  return <div>{renderedCells}</div>;
};

export default CellList;
