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
      <div className={cells?.length === 0 ? "force-visible" : ""}>
        <AddCell nextCellId={null} />
      </div>
    </div>
  );
};

export default CellList;
