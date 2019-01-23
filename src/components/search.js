import React, { Component } from "react";
import NavBarClass from "./NavBar";
import Spinner from "./Spinner";
import PlayerInfo from "./PlayerInfo";
import Advertising from "./advertising";
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
    console.log("Entering playerName");
    this.setState({
        playerName: event.target.value
    })
  }

  handleClickSearch = (event) => {
    event.preventDefault();
    this.setState({
      status: "playerEntered",
    }); 
    console.log("before axios");
    const configs = {
      headers: {
          "Accept": "application/vnd.api+json",
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmNjFhM2QwMC1mZDg3LTAxMzYtYWE0MS0wM2RjN2YxZjgyYzkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTQ3ODQwOTEzLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im1jZG9semxuIn0.5aLHkXHd_glPo9RJ02SJARMGjPbEnaz3wWekwMrz4ZE"
      }
    };
    axios.get(`https://api.pubg.com/shards/steam/players?filter[playerNames]=${this.state.playerName}`, configs)
    .then(response => {
      var playerID = response.data.data[0].id;
      this.setState({
        status: "playerEntered",
        playerID: playerID,
      });
      axios.get(`https://api.pubg.com/shards/steam/players/${this.state.playerID}/seasons/lifetime`, configs)
      .then(response => {
        console.log(response.data.data.attributes.gameModeStats);
        var playerData = response.data.data.attributes.gameModeStats;
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
              <p >
              <div>{this.renderContent()}</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="column right">
              <Advertising />
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
