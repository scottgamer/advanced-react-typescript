import React, { useEffect, useRef } from "react";

import "./preview.css";
interface PreviewProps {
  code: string;
}

const html = `
    <html>
      <head>
        <style>
          html { background-color: white; }
        </style>
      </head>
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

const Preview = ({ code }: PreviewProps): JSX.Element => {
  const iframe = useRef<any>(null);

  useEffect(() => {
    if (!iframe.current) {
      return;
    }
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
        title="preview"
      />
    </div>
  );
};

export default Preview;
