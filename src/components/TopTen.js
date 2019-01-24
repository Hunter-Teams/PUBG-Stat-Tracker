import React, { Component } from "react";
import "../App.css";
import NavBarClass from "./NavBar";
import Content from "./content";

class TopTen extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          {/*<h5>Stats tracker, leaderboards and game information for PUBG</h5>*/}
        </div>
        <ul className="primary1">
          <NavBarClass />
        </ul>
          <div>
            <Content />
          </div>
          <div className="bg" />
        <footer>
          <div className="flex-container5">
            <div className="cunyStats" />
          </div>
        </footer>
      </div>
    );
  }
}

export default TopTen;
