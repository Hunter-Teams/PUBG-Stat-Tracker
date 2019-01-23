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
                    <th>Boosts</th> <th>{duo.boosts}</th>  <th>{solo.boosts}</th>  <th>{squad.boosts}</th>
                </tr>                
                <tr>
                    <th>DBNOs</th> <th>{duo.dBNOs}</th>  <th>{solo.dBNOs}</th>  <th>{squad.dBNOs}</th>
                </tr>
                <tr>
                    <th>DailyKills</th> <th>{duo.dailyKills}</th>  <th>{solo.dailyKills}</th>  <th>{squad.dailyKills}</th>
                </tr>
                <tr>
                    <th>DamageDealt</th> <th>{duo.damageDealt}</th>  <th>{solo.damageDealt}</th>  <th>{squad.damageDealt}</th>
                </tr>
                <tr>
                    <th>Days</th> <th>{duo.days}</th>  <th>{solo.days}</th>  <th>{squad.days}</th>
                </tr>
                <tr>
                    <th>Boosts</th> <th>{duo.boosts}</th>  <th>{solo.boosts}</th>  <th>{squad.boosts}</th>
                </tr>
                <tr>
                    <th>Kills</th> <th>{duo.kills}</th>  <th>{solo.kills}</th>  <th>{squad.kills}</th>
                </tr>               
                
            </table>
        );
    }
}



export default PlayerInfo;


// "assists": 0,
// "bestRankPoint": 0,
// "boosts": 0,
// "": 0,
// "dailyKills": 0,
// "": 0,
// "": 0,
// "dailyWins": 0,
// "headshotKills": 0,
// "heals": 0,
// "killPoints": 0,
// "kills": 0,
// "longestKill": 0,
// "longestTimeSurvived": 0,
// "losses": 0,
// "maxKillStreaks": 0,
// "mostSurvivalTime": 0,
// "rankPoints": 0,
// "rankPointsTitle": "string",
// "revives": 0,
// "rideDistance": 0,
// "roadKills": 0,
// "roundMostKills": 0,
// "roundsPlayed": 0,
// "suicides": 0,
// "swimDistance": 0,
// "teamKills": 0,
// "timeSurvived": 0,
// "top10s": 0,
// "vehicleDestroys": 0,
// "walkDistance": 0,
// "weaponsAcquired": 0,
// "weeklyKills": 0,
// "weeklyWins": 0,
// "winPoints": 0,
// "wins": 0
