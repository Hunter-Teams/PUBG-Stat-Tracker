import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Search from "./components/search";
import TopTen from "./components/TopTen";
import About from "./components/about";

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const TopTenComponent = () => (<TopTen />);
    const SearchComponent = () => (<Search />);
    const AboutComponent = () => (<About />);

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={TopTenComponent}/>
          <Route exact path="/about" render={AboutComponent}/>
          <Route exact path="/search" render={SearchComponent}/>          
        </Switch>
      </Router>
    );
  }
}

export default App;

