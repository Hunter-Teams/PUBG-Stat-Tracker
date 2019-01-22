import React, { Component } from "react";
import "../index.css";

class PlayerInfo extends Component {
    render(){
        var playerData = this.props.playerData;
        return (
            <div>{playerData}</div>
        );
    }
}

export default PlayerInfo;
