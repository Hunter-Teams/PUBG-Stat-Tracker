import React, { Component } from "react";
import "../index.css";

class PlayerInfo extends Component {
    render(){
        var {
            averagedamage,
            averagerank,
            games,
            id,
            killdeathratio,
            kills,
            name,
            rank,
            rankpoints,
            winratio,
            wins,
        } = this.props.data;
        killdeathratio = Math.round(killdeathratio*100)/100;
        winratio = Math.round(winratio*100)/100;
        return (
            <tr>
              <td>{rank}</td>
              <td>{name}</td>
              <td>{killdeathratio}</td>
              <td>{winratio}</td>
              <td>{kills}</td>
              <td>{wins}</td>
              <td>{games}</td>
              <td>{rankpoints}</td>
            </tr>
        );
    }
}

export default PlayerInfo;
