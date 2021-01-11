import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlantPage from "./pages/PlantPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import NotAvailablePage from "./pages/NotAvailablePage";

import Detail from "./components/Detail";
import ScrollToTop from "./components/ScrollToTop";
import NoPlantFoundPage from "./pages/NoPlantFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { UserProvider } from "./components/UserContext";
import Basket from "./components/Basket"
import Confirm from "./components/Confirm"

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/plants" component={PlantPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/detail" component={DetailPage} />
          <Route exact path="/plants/:id" component={Detail} />
          <Route exact path="/error" component={NoPlantFoundPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/confirm" component={Confirm} />
          <Route  path="*" component={NotAvailablePage}/>
        </Switch>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
