import React, { Component } from "react";
import "../index.css";
import ParticularPlayer from "./ParticularPlayer";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: this.props.table
    };
  }

  render() {
    console.log("this.state.table LEaderboard");
    console.log(this.state.table);
    var arr = this.state.table.map(elem => <ParticularPlayer data={elem} />);
    return (
      <div>
        <table>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>K/D</th>
            <th>WR</th>
            <th>Kills</th>
            <th>Wins</th>
            <th>Matches</th>
            <th>Score</th>
          </tr>
          {arr}
        </table>
      </div>
    );
  }
}

export default Leaderboard;
