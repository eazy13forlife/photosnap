import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import Features from "./views/Features";
import Pricing from "./views/Pricing";
import Stories from "./views/Stories";

import "./images/";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
