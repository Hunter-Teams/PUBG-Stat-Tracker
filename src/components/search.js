import React, { Component } from "react";
import NavBarClass from "./NavBar";

class Search extends Component {
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
        <h1>SEARCH</h1>
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

export default Search;
