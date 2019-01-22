import React, { Component } from "react";
import NavBarClass from "./NavBar";
import Spinner from "./Spinner";
import PlayerInfo from "./PlayerInfo";
import axios from 'axios';

class Search extends Component {
  // constructor(props) {
  //   super(props);

  //   this.toggleActive = this.toggleActive.bind(this);
  //   this.state = {
  //     isActive: false,
  //     table: [],
  //     dataRecieved: false,
  //     currentPerson: "",
  //   };
  //   this.setMode= this.setMode.bind(this);

  // }

  // setMode(mode){ 
  //   this.setState({
  //     dataRecieved: false,
  //   });   
  //   axios.get(`http://localhost:3001/api/${mode}`)
  //   .then(response => {
  //     //console.log(response.data);
  //     var newArr = [];
  //     response.data.forEach(elem => {
  //       //console.log(elem);
  //       newArr.push(elem);
  //     })
  //     //console.log(newArr);
  //     this.setState({
  //       table: newArr,
  //       dataRecieved: true,
  //       currentMode: mode,
  //     });
  //     console.log("this.state.currenyMode content")
  //     console.log(this.state.currenyMode);
  //     this.forceUpdate();
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  
  // toggleActive() {
  //   this.setState({
  //     isActive: !this.state.isActive
  //   });
  // }

  // componentDidMount() {
    
  // }

  // renderContent() {
  //   if (this.state.dataRecieved) {
  //     return (
  //       <div>
  //         <div className="row">
  //           <div className="column left" />  
  //           <div className="column middle">
  //             <h1 className="tableTitle">Serach fro player name: </h1>
  //             <button className = "button" onClick={this.handleClickSearch}>Search</button>
  //             <input type='text' placeholder="Type name of the player" onChange={this.handleChangeSearch}/>
  //             <p className="tableFoot">
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //             </p>
  //           </div>
  //           <div className="column right">
  //             <h2>Side</h2>
  //             <p>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return <Spinner message={"Please wait.."} />;
  //   }
  // }


  render() {
    // console.log("this.state.dataRecieved");
    // console.log(this.state.dataRecieved);<div>{this.renderContent()}</div>;
    return <div>SEARCH</div>
  }


}

export default Search;
