import React, { Component } from "react";
import NavBarClass from "./NavBar";
import Advertising from "./advertising";

export default class pageTemplate extends React.Component {
    state = {
        leftSideContent: "leftDefault",
        centerContent: "centerDefault",
        rightSideContent: "rightDefault"
    };
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
                    <div>
                        <h1>CUNY2X PUBG-Stat-Tracker</h1>
                        <p>
                            Contact stuff happens here....
                        </p>
                    </div>
                </div>
                <div className="bg" />
                <div className="column right">
                    <Advertising />
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

export default pageTemplate;