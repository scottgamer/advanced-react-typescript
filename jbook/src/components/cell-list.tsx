import React from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
const CellList: React.FC = (): JSX.Element => {
  useTypedSelector((state) => state);
  return <div>Cell list</div>;
};

export default CellList;
