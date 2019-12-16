import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <div>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>

    <Navigation />
  </div>
);

export default App;
