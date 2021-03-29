import { useState } from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";

const CodeCell = () => {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor initialValue={""} onChange={(value) => setInput(value)} />

      <div className="">
        <button onClick={onClick}>Submit</button>
      </div>

      {/* This iframe uses the same origin policy */}
      {/* <iframe
        src="/test.html"
        sandbox="allow-same-origin"
        title="child-iframe"
      /> */}
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
