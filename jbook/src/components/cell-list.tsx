import React, { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

const CellList: React.FC = (): JSX.Element => {
  const cells = useTypedSelector(({ cells }) => {
    if (cells) {
      return cells.order.map((id) => cells.data[id]);
    }
    return;
  });

  const renderedCells =
    cells &&
    cells.map((cell) => (
      <Fragment key={cell.id}>
        <AddCell nextCellId={cell.id} />
        <CellListItem cell={cell} />
      </Fragment>
    ));

  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  );
};

export default CellList;
