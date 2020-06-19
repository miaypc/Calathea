import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlantPage from "./pages/PlantPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/plant" component={PlantPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
