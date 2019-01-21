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
          <div className="bg">
            <div>
              <Content />
            </div>
          </div>
          <footer>
            <a className="active" href="/public/index.html">
              <div className="flex-container">
                <div className="cunyStats" />
              </div>
            </a>
          </footer>
        </body>
      </div>
    );
  }
}

export default App;
