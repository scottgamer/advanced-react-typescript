import { useState } from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";

const CodeCell = () => {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <CodeEditor initialValue={""} onChange={(value) => setInput(value)} />

        {/* This iframe uses the same origin policy */}
        {/* <iframe
        src="/test.html"
        sandbox="allow-same-origin"
        title="child-iframe"
      /> */}
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
