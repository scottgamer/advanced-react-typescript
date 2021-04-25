import { useState, useEffect } from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell = ({ cell }: CodeCellProps) => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setError(output.error);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>

        {/* This iframe uses the same origin policy */}
        {/* <iframe
        src="/test.html"
        sandbox="allow-same-origin"
        title="child-iframe"
      /> */}
        <Preview code={code} bundlingStatus={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
