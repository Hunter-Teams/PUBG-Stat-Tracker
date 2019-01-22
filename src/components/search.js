import React, { Component } from "react";
import NavBarClass from "./NavBar";
import Spinner from "./Spinner";
import PlayerInfo from "./PlayerInfo";
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      playerName: "",
      playerID: "",
      playerData: {},
      status: "noPlayer",
    };
    this.toggleActive = this.toggleActive.bind(this);


  }

  handleChangeSearch = (event) => {
    event.preventDefault();
    this.setState({
        playerName: event.target.value
    })
  }

  handleClickSearch = (event) => {
    event.preventDefault();
    this.setState({
      status: "playerEntered",
    }); 
    axios.get(`https://api.pubg.com/shards/steam/players/${this.state.playerName}`)
    .then(response => {
      console.log(response.data);
      var playerID = response.data.id;
      console.log(playerID);
      this.setState({
        status: "playerEntered",
        playerID: playerID,
      });
      axios.get(`https://api.pubg.com/shards/steam/players/${this.state.playerID}/seasons/lifetime`)
      .then(response => {
        console.log(response.data);
        var playerData = response.data;
        this.setState({
          status: "playerReady",
          playerData: playerData,
        });
        this.forceUpdate();
      });  
    })
    .catch(err => {
      console.log(err);
    });
  }

  
  toggleActive() {
    this.setState({
      isActive: !this.state.isActive
    });
  }


  renderContent() {
    if (this.state.status==="playerReady") {
      return (
        <PlayerInfo playerData = {this.state.playerData}/>
      );
    } 
    if (this.state.status==="playerEntered") {
      return <Spinner message={"Waiting for response.."} />;
    } 
    if (this.state.status==="noPlayer") {
      return <Spinner message={"Please enter player's name.."} />;
    }
  }

  
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
          <div className="row">
            <div className="column left" />  
            <div className="column middle">
              <h1 className="tableTitle">Serach fro player name: </h1>
              <button className = "button" onClick={this.handleClickSearch}>Search</button>
              <input type='text' placeholder="Type name of the player" onChange={this.handleChangeSearch}/>
              <p className="tableFoot">
              <div>{this.renderContent()}</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="column right">
              <h2>Side</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
            </div>
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
export default Search;
