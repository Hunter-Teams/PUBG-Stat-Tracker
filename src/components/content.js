import React from "react";
import "../index.css";
import Leaderboard from "./leaderboard";
import Spinner from "./Spinner";
import Advertising from "./advertising";
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
      exceedTen: false,
      timeQueue: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setMode= this.setMode.bind(this);
    this.canRequestMore = this.canRequestMore.bind(this);
    this.handleWaitTime= this.handleWaitTime.bind(this);
  }

  canRequestMore(date1){
    var newTimeQueue = this.state.timeQueue;
    if (newTimeQueue.length < 9) {
      return newTimeQueue;
    } else {
      newTimeQueue[8] = date1;
      let difference = newTimeQueue[8]- newTimeQueue[0] ;  //In milliseconds
      difference = difference/(1000*60); //In minutes
      console.log("differecne in time is:");
      console.log(difference);
      if (difference <= 1) {
        return false;
      } else {
        newTimeQueue = newTimeQueue.slice(1);
        return newTimeQueue;
      }
    }
  }

  setMode(mode, newTimeArr){ 
    this.setState({
      dataRecieved: false,
    });   
    axios.get(`http://localhost:3001/api/${mode}`)
    .then(response => {
      console.log(response);
      var newArr = [];
      response.data.forEach(elem => {
        //console.log(elem);
        newArr.push(elem);
      })
      //console.log(newArr);
      let timeArr = newTimeArr;
      timeArr.push(Date.now());
      console.log(timeArr);
      this.setState({
        timeQueue: timeArr,
        table: newArr,
        dataRecieved: true,
        currentMode: mode,
      });
      // console.log("this.state.currentMode content")
      // console.log(this.state.currentMode);
      // this.forceUpdate();
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleWaitTime(mode){
    var dateNow = Date.now();
    var resultTime = this.canRequestMore(dateNow); 
    if (resultTime!==false){
      this.setMode(mode,resultTime);
    } else {
      let waitTimeQueue  = this.state.timeQueue;
      waitTimeQueue[8] = dateNow;
      let difference = waitTimeQueue[8]- waitTimeQueue[0] ;  //In milliseconds
      let waitTime = 60 - difference/(1000);   //Wait in secs
      alert(`Wait! You're allowed to send at most 10 request per minute! Please wait at least ${waitTime} sec`)
    } 
  }
  tryModeSolo = (e) => {
    e.preventDefault();
    this.handleWaitTime("solo");
  }

  tryModeDuo = (e) => {
    e.preventDefault();
    this.handleWaitTime("duo"); 
  }

  tryModeSquad = (e) => {
    e.preventDefault();
    this.handleWaitTime("squad"); 
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
        let timeArr = this.state.timeQueue;
        if (timeArr.length < 9) {
          let d1 = Date.now();
          console.log(d1);
          timeArr.push(d1);
        } 
        console.log(timeArr);
        this.setState({
          timeQueue: timeArr,
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
            <div className="column left" />
  
            <div className="column middle">
              <h1 className="tableTitle">Leaderboard: {this.state.currentMode}</h1>
              <button onClick={this.tryModeSolo}>Solo</button>
              <button onClick={this.tryModeDuo}>Duo</button>
              <button onClick={this.tryModeSquad}>Squad</button>

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
      return <Spinner message={"Please wait.."} />;
    }
  }


  render() {
    console.log("this.state.dataRecieved");
    console.log(this.state.dataRecieved);
    return <div>{this.renderContent()}</div>;
  }

}
