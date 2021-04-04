import { useState, useEffect } from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";

const CodeCell = () => {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setError(output.error);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor initialValue={""} onChange={(value) => setInput(value)} />
        </Resizable>

        {/* This iframe uses the same origin policy */}
        {/* <iframe
        src="/test.html"
        sandbox="allow-same-origin"
        title="child-iframe"
      /> */}
        <Preview code={code} bundlingStatus={error}/>
      </div>
    </Resizable>
  );
};

export default CodeCell;
