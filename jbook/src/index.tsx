import "bulmaswatch/superhero/bulmaswatch.min.css";

import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import TextEditor from "./components/text-editor";
import { store } from "./state";

// import CodeCell from "./components/code-cell";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
        {/* <CodeCell /> */}
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
