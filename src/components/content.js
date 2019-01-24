import React from "react";
//import "./content.css";
import Leaderboard from "./leaderboard";
import Spinner from "./Spinner";
import Advertising from "./advertising";
import "./vertNavbar.css";
import "./columns.css";
import axios from 'axios';

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.toggleActive = this.toggleActive.bind(this);
    this.state = {
      isActive: false,
      table: [],
      dataRecieved: false,
      currentMode: "solo",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setMode= this.setMode.bind(this);
  }

  setMode(mode){ 
    this.setState({
      dataRecieved: false,
    });   
    axios.get(`http://localhost:3001/api/${mode}`)
    .then(response => {
      //console.log(response.data);
      var newArr = [];
      response.data.forEach(elem => {
        //console.log(elem);
        newArr.push(elem);
      })
      //console.log(newArr);
      this.setState({
        table: newArr,
        dataRecieved: true,
        currentMode: mode,
      });
      console.log("this.state.currentMode content")
      console.log(this.state.currentMode);
      this.forceUpdate();
    })
    .catch(err => {
      console.log(err);
    });
  }

  tryModeSolo = (e) => {
    e.preventDefault();
    this.setMode("solo");
  }

  tryModeDuo = (e) => {
    e.preventDefault();
    this.setMode("duo");
  }

  tryModeSquad = (e) => {
    e.preventDefault();
    this.setMode("squad");
  }
  
  handleSubmit() {
    axios.get(`http://localhost:3001/api`)
      .then(response => {
        //console.log(response.data);
        var newArr = [];
        response.data.forEach(elem => {
          //console.log(elem);
          newArr.push(elem);
        })
        //console.log(newArr);
        this.setState({
          table: newArr,
          dataRecieved: true,
        });
        console.log("this.state.table content")
        console.log(this.state.table);
        this.forceUpdate();
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

  componentDidMount() {
    this.handleSubmit();
    
  }

  renderContent() {
    if (this.state.dataRecieved) {
      return (
        <div>
          <div className="row">
            <div className="column left">
              <div className="flex-containerSearch2">
                <div className="flex-container">

              <ul className="ulVertNav">
                <li className="label">Mode</li>
                <li className="liVertNav"><button onClick={this.tryModeSolo}>Solo</button></li>
                <li className="liVertNav"><button onClick={this.tryModeDuo}>Duo</button></li>
                <li className="liVertNav"><button onClick={this.tryModeSquad}>Squad</button></li>
              </ul>
                </div>
              </div>
            {/*<button onClick={this.tryModeSolo}>Solo</button>
            <button onClick={this.tryModeDuo}>Duo</button>
            <button onClick={this.tryModeSquad}>Squad</button>*/}
            </div>
            <div className="column middle">
              <h1 className="tableTitle">Leaderboard: {this.state.currentMode}</h1>

              {/*<Spinner message={"Loading..."} />*/}
              <Leaderboard table = {this.state.table}  />
              <p className="tableFoot">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="column right">
              <Advertising />
            </div>
          </div>
        </div>
      );
    } else {
      return (
          <div>
            <div className="row">
                <div className="column left">
                  <div className="flex-containerSearch2">
                    <div className="flex-container">

                      <ul className="ulVertNav">
                        <li className="label">Mode</li>
                        <li className="liVertNav"><button onClick={this.tryModeSolo}>Solo</button></li>
                        <li className="liVertNav"><button onClick={this.tryModeDuo}>Duo</button></li>
                        <li className="liVertNav"><button onClick={this.tryModeSquad}>Squad</button></li>
                      </ul>
                    </div>
                  </div>
                  {/*<button onClick={this.tryModeSolo}>Solo</button>
            <button onClick={this.tryModeDuo}>Duo</button>
            <button onClick={this.tryModeSquad}>Squad</button>*/}
                </div>
              <div className="column middle">
                <h1 className="tableTitle">Leaderboard: {this.state.currentMode}</h1>


                <Spinner message={"Loading..."} />
                <p className="tableFoot">
                </p>
              </div>
              <div className="column right">
                <Advertising />
              </div>
            </div>
          </div>
          );
    }
  }


  render() {
    console.log("this.state.dataRecieved");
    console.log(this.state.dataRecieved);
    return <div>{this.renderContent()}</div>;
  }

}
