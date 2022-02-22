import React from 'react';
import Main from './pages/Main';
import AddUsers from "./pages/AddUsers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/AddUsers">
            <AddUsers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}