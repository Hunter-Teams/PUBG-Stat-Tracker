import React, { Component } from "react";
import "./App.css";
import NavBarClass from "./components/navbar";
import BackgroundImagePage from "./components/backgroundImage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header" />

        <NavBarClass />
        <div className="background">
          <div>
            <p>stuff happens here</p>
          </div>
        </div>

        <body>
          <BackgroundImagePage />
        </body>
      </div>
    );
  }
}

export default App;
