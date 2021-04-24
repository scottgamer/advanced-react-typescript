import "bulmaswatch/superhero/bulmaswatch.min.css";

import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { store } from "./state";
import CellList from "./components/cell-list";

const App = () => {
  return (
    <Provider store={store}>
      <CellList />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
