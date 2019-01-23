import React, { Component } from "react";
import "../index.css";
import ParticularPlayer from "./ParticularPlayer";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: this.props.table,
    };
  }

  sortBy = (field, order)=>{
    var reverse = 0;
    if (order === "DESC") {
      reverse = 1
    }
    if (order === "ASC") {
      reverse = -1
    }
    return function (a, b) {
      if (a[field] < b[field]){
        return reverse;
      } else {
        return -reverse;
      }
        
    } 
  
   }  
   
  sortForAll = (column, dir) => {
    let newArr = this.state.table;
    newArr=newArr.sort(this.sortBy(column, dir));
    this.setState({
      table: newArr,
    });
    this.forceUpdate();
  }


  SortRankDesc = (e) => {
    e.preventDefault();
    this.sortForAll("rank", "DESC");
  }

  SortRankAsc = (e) => {
    e.preventDefault();
    this.sortForAll("rank", "ASC");
  }

  SortNameDesc = (e) => {
    e.preventDefault();
    this.sortForAll("name", "DESC");
  }

  SortNameAsc = (e) => {
    e.preventDefault();
    this.sortForAll("name", "ASC");
  }

  SortKDDesc = (e) => {
    e.preventDefault();
    this.sortForAll("killdeathratio", "DESC");
  }

  SortKDAsc = (e) => {
    e.preventDefault();
    this.sortForAll("killdeathratio", "ASC");
  }

  SortWRDesc = (e) => {
    e.preventDefault();
    this.sortForAll("winratio", "DESC");
  }

  SortWRAsc = (e) => {
    e.preventDefault();
    this.sortForAll("winratio", "ASC");
  }
  SortKillDesc = (e) => {
    e.preventDefault();
    this.sortForAll("kills", "DESC");
  }

  SortKillAsc = (e) => {
    e.preventDefault();
    this.sortForAll("kills", "ASC");
  }

  SortWinDesc = (e) => {
    e.preventDefault();
    this.sortForAll("wins", "DESC");
  }

  SortWinAsc = (e) => {
    e.preventDefault();
    this.sortForAll("wins", "ASC");
  }
  SortMatchDesc = (e) => {
    e.preventDefault();
    this.sortForAll("games", "DESC");
  }

  SortMatchAsc = (e) => {
    e.preventDefault();
    this.sortForAll("games", "ASC");
  }
  SortScoreDesc = (e) => {
    e.preventDefault();
    this.sortForAll("rankpoints", "DESC");
  }

  SortScoreAsc = (e) => {
    e.preventDefault();
    this.sortForAll("rankpoints", "ASC");
  }


  render() {
    console.log("this.state.table Leaderboard");
    console.log(this.state.table);
    var arr = this.state.table.map((elem)=>
    <ParticularPlayer data={elem}/>
    );
      return (
        <div>
              
              
          <table>
            <tr>
              <th>Rank
                <button className="descButton" onClick={this.SortRankDesc}></button>
                <button className="ascButton"onClick={this.SortRankAsc}></button>
              </th>
              <th>Name
                <button className="descButton" onClick={this.SortNameDesc}></button>
                <button className="ascButton"onClick={this.SortNameAsc}></button>
              </th>
              <th>K/D
                <button className="descButton" onClick={this.SortKDDesc}></button>
                <button className="ascButton"onClick={this.SortKDAsc}></button>
              </th>
              <th>WR
                <button className="descButton" onClick={this.SortWRDesc}></button>
                <button className="ascButton"onClick={this.SortWRAsc}></button>
              </th>
              <th>Kills
                <button className="descButton" onClick={this.SortKillDesc}></button>
                <button className="ascButton"onClick={this.SortKillAsc}></button>
              </th>
              <th>Wins
                <button className="descButton" onClick={this.SortWinDesc}></button>
                <button className="ascButton"onClick={this.SortWinAsc}></button>
              </th>
              <th>Matches
                <button className="descButton" onClick={this.SortMatchDesc}></button>
                <button className="ascButton"onClick={this.SortMatchAsc}></button>
              </th>
              <th>Score
                <button className="descButton" onClick={this.SortScoreDesc}></button>
                <button className="ascButton"onClick={this.SortScoreAsc}></button>
              </th>
            </tr>
            {arr}
          </table>
        </div>
      );
    }
}

export default Leaderboard;
