import { Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Nav from "./components/Navigation/Nav";

function App() {
  return (
    <div className="app-container">
      {/* <Nav /> */}

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/news">news</Route>
        <Route path="/about">about</Route>
        <Route path="/contact">contact</Route>
        <Route path="/" exact>
          home
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </div>
  );
}

export default App;
