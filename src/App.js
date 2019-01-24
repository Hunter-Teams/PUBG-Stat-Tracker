import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/search";
import TopTen from "./components/TopTen";
import About from "./components/about";
import Contact from "./components/contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const TopTenComponent = () => <TopTen />;
    const SearchComponent = () => <Search />;
    const AboutComponent = () => <About />;
    const ContactComponent = () => <Contact />;

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={TopTenComponent} />
          <Route exact path="/about" render={AboutComponent} />
          <Route exact path="/search" render={SearchComponent} />
          <Route exact path="/contact" render={ContactComponent} />

          <Route
            path="/pubgOfficial"
            component={() => {
              window.location = "https://www.pubg.com/";
              return null;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
