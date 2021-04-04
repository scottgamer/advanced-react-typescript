import React, { useEffect, useRef } from "react";

import "./preview.css";
interface PreviewProps {
  code: string;
  bundlingStatus?: string;
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
          const handleError = (err) => {
            const root = document.querySelector("#root");
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error:</h4>' + error + '</div>';
            console.error(error);
          };
          window.addEventListener('error', (event) => {
            handleError(event.error);
          });
          window.addEventListener('message', (event) => {
            try{
              eval(event.data);
            } catch(error){
              handleError(error);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview = ({ code, bundlingStatus }: PreviewProps): JSX.Element => {
  const iframe = useRef<any>(null);

  useEffect(() => {
    if (!iframe.current) {
      return;
    }
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
        title="preview"
      />
      {bundlingStatus && <div className="preview-error">{bundlingStatus}</div>}
    </div>
  );
};

export default Preview;
