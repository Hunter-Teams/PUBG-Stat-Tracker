import React, { Component } from "react";
import "../App.css";
import NavBarClass from "./NavBar";
import Content from "./content";

class TopTen extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <a
            href={"https://developer.playbattlegrounds.com/?locale=en"}
            style={{ color: "#691b1c" }}
          >
            Get PUBG API info!
          </a>
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
