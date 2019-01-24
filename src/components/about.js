import React, { Component } from "react";
import NavBarClass from "./NavBar";
import Advertising from "./advertising";
import "./columns.css";

class About extends Component {
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
          <div className="row">
            <div className="column left" />
            <div className="column middle">
              <div className="flex-containerAbout">
                <div>
                  <h1>CUNY2X PUBG-Stat-Tracker</h1>
                  <p>
                    Created by: Cordell Hurst, Shani Saar, Liudmila Zyrianova
                  </p>
                  <p>
                    Utilizing Node.js, Express, React, PostgreSQL hosted on
                    Herorku Project{" "}
                  </p>
                  <p>
                    Proposal: game stats utilizing PUBG API Display top 10 solo
                    player stats in a browser. Users can drill down stats data
                    pulled from PUBG servers stored in our database.
                  </p>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="flex-containerAds">
                <div className="flex-container">
                  <Advertising
                    adLink={"https://www.playstation.com/en-us/"}
                    adClassName={"advert1"}
                  />
                </div>
              </div>
            </div>
          </div>
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

export default About;
