import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";

import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";
import "bulmaswatch/superhero/bulmaswatch.min.css";

import CodeEditor from "./components/code-editor";

const App = () => {
  const ref = useRef<any>(null);
  const iframe = useRef<any>(null);
  const [input, setInput] = useState<string>("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    if (!ref.current || !iframe.current) {
      return;
    }

    iframe.current.srcdoc = html;

    const result = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        "process.env.NODE_ENV": '"production"',
        global: "window",
      },
    });

    // setCode(result.outputFiles[0].text);
    iframe.current.contentWindow.postMessage(result.outputFiles[0].text, "*");
  };

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event)=> {
            try{
              eval(event.data)
            } catch(error){
              const root = document.querySelector("#root");
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error:</h4>' + error + '</div>';
              console.error(error);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

  return (
    <div>
      <CodeEditor initialValue={""} onChange={(value) => setInput(value)} />
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div className="">
        <button onClick={onClick}>Submit</button>
      </div>

      {/* This iframe uses the same origin policy */}
      {/* <iframe
        src="/test.html"
        sandbox="allow-same-origin"
        title="child-iframe"
      /> */}
      <iframe
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
        title="preview"
      ></iframe>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
