import ReactDOM from "react-dom";

import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

import EventComponent from "./events/EventComponent";

import UserSearchWithRef from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <EventComponent />
      <GuestList />
      <UserSearch />
      <UserSearchWithRef />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
