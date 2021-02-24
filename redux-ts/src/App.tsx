import { Provider } from "react-redux";
import { store } from "./redux";

import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <h1>Search for a package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
