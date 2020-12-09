import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home.js";
import Cart from "./Cart.js";
import IterativeDesign from "./Iterative-Design";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer.js";
import Music from "./Music.js";
import Zumix from "./Zumix.js";
import Personas from "./Personas.js";
import Research from "./Research.js";
import Resume from "./Resume.js";

class App extends React.Component {
  componentDidMount() {
    document.title = "Michael Tu - Website";
  }

  render() {
    return (
      <div>
        <MyNavbar></MyNavbar>
        <Router>
          <div>
            <Switch>
              <Route path="/Cart">
                <Cart />
              </Route>
              <Route path="/Iterative-Design">
                <IterativeDesign />
              </Route>
              <Route path="/Music">
                <Music />
              </Route>
              <Route path="/Zumix-Redesign">
                <Zumix />
              </Route>
              <Route path="/Personas">
                <Personas />
              </Route>
              <Route path="/ReSearch">
                <Research />
              </Route>
              <Route path="/Resume">
                <Resume />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
