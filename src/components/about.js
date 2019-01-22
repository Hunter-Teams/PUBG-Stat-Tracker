import React, { Component } from "react";
import NavBarClass from "./NavBar";

class About extends Component {
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
            <div>
              <h1>CUNY2X PUBG-Stat-Tracker</h1>
              <p>
                Team: Cordell Hurst, Shani Saar, Liudmila Zyrianova Utilizing
                Node.js,
              </p>
              <p>
                Express, React, PostgreSQL hosted on herorku Project Proposals
                game
              </p>
              <p>
                stats utilizing PUBG API Display top 10 player stats in a
                browser. Users
              </p>
              <p>
                can drill down stats data pulled from PUBG servers stored in our
                database.
              </p>
            </div>
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

export default About;
