import React, { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

import "./cell-list.css";

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
        <CellListItem cell={cell} />
        <AddCell prevCellId={cell.id} />
      </Fragment>
    ));

  return (
    <div className="cell-list">
      <div className={cells?.length === 0 ? "force-visible" : ""}>
        <AddCell prevCellId={null} />
      </div>
      {renderedCells}
    </div>
  );
};

export default CellList;
