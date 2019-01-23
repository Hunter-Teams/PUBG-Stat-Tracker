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
        return (
            <table>
                <tr>
                    <th>Mode</th> <th>Duo</th>  <th>Solo</th>  <th>Squad</th> 
                </tr>
                <tr>
                    <th>Assists</th> <th>{duo.assists}</th>  <th>{solo.assists}</th>  <th>{squad.assists}</th>
                </tr>
                <tr>
                    <th>BestRankPoint</th> <th>{duo.bestRankPoint}</th>  <th>{solo.bestRankPoint}</th>  <th>{squad.bestRankPoint}</th>
                </tr>
                <tr>
                    <th>Kills</th> <th>{duo.kills}</th>  <th>{solo.kills}</th>  <th>{squad.kills}</th>
                </tr>

                
                
            </table>
        );
    }
}

export default PlayerInfo;
