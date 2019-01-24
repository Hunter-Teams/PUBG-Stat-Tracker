import React, { Component } from "react";
import NavBarClass from "./NavBar";
import Advertising from "./advertising";
import "./columns.css";
import Leaderboard from "./content";

class Contact extends Component {
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
                        <div className="column left"/>
                        <div className="column middle">
                            <div className="flex-containerAbout">
                                <div><h1>CUNY2X PUBG-Stat-Tracker</h1>
                                    <p>
                                        Contact stuff
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="column right">
                            <div className="flex-containerAds">
                                <div className="flex-container">
                                    <Advertising adLink={"https://www.adobe.com/creativecloud/plans.html?plan=edu&locale=en&sdid=LCDWTQF3&mv=display&gclid=EAIaIQobChMI4_S59JiG4AIVr6GzCh2GHARkEAEYASAAEgJoWvD_BwE\n"} adClassName={"advert3"}/>
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

export default Contact;