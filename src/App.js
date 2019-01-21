import React, { Component } from "react";
import "./App.css";
import NavBarClass from "./components/NavBar";
import Content from "./components/content";

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
        <body>
          <div>
            <Content />
          </div>
          <div className="bg" />
        </body>
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
