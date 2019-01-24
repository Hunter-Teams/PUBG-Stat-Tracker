import React, { Component } from "react";
import "../index.css";

class PlayerInfo extends Component {
    render(){
        console.log(this.props.playerData);
        var {
            duo,
            solo,       
            squad,  
        } = this.props.playerData;
        //account.a05d53bc87624b20a4110508fd24d121  
        var allParams = [];
        var tempArr = [];
        for (var property in duo){
            if (duo.hasOwnProperty(property)){
                tempArr = [property, duo[property], solo[property], squad[property]];
                allParams.push(tempArr);

            }
        }  
        allParams = allParams.map((elem)=>
            <ParticularPlayerInfo title={elem[0]} duoPr={elem[1]} soloPr={elem[2]} squadPr={elem[3]}/>
        )
        return (
            <table>
                <tbody>
                    <th>Mode</th> <th>Duo</th>  <th>Solo</th>  <th>Squad</th> 
                </tbody>
                {allParams}               
            </table>
        );
    }
}


class ParticularPlayerInfo extends Component {
    render(){
      var title = this.props.title;
      title = title.charAt(0).toUpperCase()+title.slice(1);   

      return (
        <tr>
            <th>{title}</th> <th>{this.props.duoPr}</th>  <th>{this.props.soloPr}</th>  <th>{this.props.squadPr}</th> 
        </tr>
      );
    }
  }


export default PlayerInfo;
