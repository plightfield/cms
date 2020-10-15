import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ComponentAdder from "./views/ComponentAdder";
import Home from "./views/Home";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Redirect to={{ pathname: "/home" }} />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/component-adder'>
          <ComponentAdder />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
