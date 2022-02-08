import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history.js";
import Home from "./views/Home";
import Features from "./views/Features";
import Pricing from "./views/Pricing";
import Stories from "./views/Stories";

import "./images/";

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/features" exact>
        <Features />
      </Route>
      <Route path="/pricing" exact>
        <Pricing />
      </Route>
      <Route path="/stories" exact>
        <Stories />
      </Route>
    </Router>
  );
};

export default App;
