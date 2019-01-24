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
              <th className="tableColor">Rank
                <div className="flex-containerButtons">
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonAscending" onClick={this.SortRankAsc}>XXXX</button>
                    </div>
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonDescending" onClick={this.SortRankDesc}>XXXX</button>
                  </div>
                </div>
              </th>
              <th className="tableColor">Name
                <div className="flex-containerButtons">
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonAscending" onClick={this.SortNameAsc}>XXXX</button>
                    </div>
                  <div className="flex-containerButtons">
                  <button type="button" className="link-buttonDescending" onClick={this.SortNameDesc}>XXXX</button>
                  </div>
                </div>{/*
                <button className="descButton" onClick={this.SortNameDesc}></button>
                <button className="ascButton"onClick={this.SortNameAsc}></button>*/}
              </th>
              <th className="tableColor">K/D
                <div className="flex-containerButtons">
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonAscending" onClick={this.SortKDAsc}>XXXX</button>
                    </div>
                  <div className="flex-containerButtons">
                  <button type="button" className="link-buttonDescending" onClick={this.SortKDDesc}>XXXX</button>
                  </div>
                </div>
              </th>
              <th className="tableColor">WR
                <div className="flex-containerButtons">
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonAscending" onClick={this.SortWRAsc}>XXXX</button>
                    </div>
                  <div className="flex-containerButtons">
                  <button type="button" className="link-buttonDescending" onClick={this.SortWRDesc}>XXXX</button>
                  </div>
                </div>
              </th>
              <th className="tableColor">Kills
                <div className="flex-containerButtons">
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonAscending" onClick={this.SortKillAsc}>XXXX</button>
                  </div>
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonDescending" onClick={this.SortKillDesc}>XXXX</button>
                </div>
                </div>
              </th>
              <th className="tableColor">Wins
                <div className="flex-containerButtons">
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonAscending" onClick={this.SortWinAsc}>XXXX</button>
                  </div>
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonDescending" onClick={this.SortWinDesc}>XXXX</button>
                  </div>
                </div>
              </th>
              <th className="tableColor">Matches
                <div className="flex-containerButtons">
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonAscending" onClick={this.SortMatchAsc}>XXXX</button>
                  </div>
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonDescending" onClick={this.SortMatchDesc}>XXXX</button>
                  </div>
                </div>
              </th>
              <th className="tableColor">Score
                <div className="flex-containerButtons">
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonAscending" onClick={this.SortScoreAsc}>XXXX</button>
                  </div>
                  <div className="flex-containerButtons">
                    <button type="button" className="link-buttonDescending" onClick={this.SortScoreDesc}>XXXX</button>
                  </div>
                </div>
              </th>
            </tr>
            {arr}
          </table>
        </div>
      );
    }
}

export default Leaderboard;
