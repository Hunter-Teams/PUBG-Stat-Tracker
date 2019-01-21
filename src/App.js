import React, { Component } from "react";
import "./App.css";
import NavBarClass from "./components/NavBar";
import Content from "./components/content";
import About from "./components/about";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          {/*<h5>Stats tracker, leaderboards and game information for PUBG</h5>*/}
        </div>

        <ul>
          <NavBarClass />
        </ul>
        <div>
          <div>
            <Content />
          </div>
          <div className="bg" />
        </div>
        <footer>
          <div className="flex-container5">
            <div className="cunyStats" />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
