const router = require("express").Router();
const client = require("./client");
module.exports = router;

const https = require("https");

function doRequest() {
  return new Promise(function(resolve, reject) {
    var result = [];
    const options = {
      host: "api.pubg.com",
      path: `/shards/steam/leaderboards/duo`,
      method: "GET",
      headers: {
        Accept: "application/vnd.api+json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmNjFhM2QwMC1mZDg3LTAxMzYtYWE0MS0wM2RjN2YxZjgyYzkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTQ3ODQwOTEzLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im1jZG9semxuIn0.5aLHkXHd_glPo9RJ02SJARMGjPbEnaz3wWekwMrz4ZE"
      }
    };
    https
      .get(options, resp => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          var newObj = JSON.parse(data).included;
          newObj.map(elem => {
            result.push(elem.attributes);
          });
          resolve(result);
        });
      })
      .on("error", err => {
        console.log("Error: " + err.message);
      });
  });
}

async function main() {
  let res = await doRequest(); //From first page
  //let res1 = await doRequest(1);  //From second page
  //res = res.concat(res1);         //Concat both data
  //res = res.filter(function(elem){    //Remove last 4 so that top ten left
  //return ( parseFloat(elem.rank)< 11)
  //})

  console.log("RESULT really IS:");
  console.log(res);

  client.query(`SELECT COUNT(*) FROM users;`, (err, data) => {
    if (parseFloat(data.rows[0].count) == 0) {
      res.map(elem => {
        var name = elem.name;

        var rank = elem.rank;
        rank = parseFloat(rank);

        var rankPoints = elem.stats.rankPoints;
        rankPoints = parseFloat(rankPoints);

        var wins = elem.stats.wins;
        wins = parseFloat(wins);

        var games = elem.stats.games;
        games = parseFloat(games);

        var winRatio = elem.stats.winRatio;
        winRatio = parseFloat(winRatio);

        var averageDamage = elem.stats.averageDamage;
        averageDamage = parseFloat(averageDamage);

        var kills = elem.stats.kills;
        kills = parseFloat(kills);

        var killDeathRatio = elem.stats.killDeathRatio;
        killDeathRatio = parseFloat(killDeathRatio);

        var averageRank = elem.stats.averageRank;
        averageRank = parseFloat(averageRank);

        client.query(
          `INSERT INTO users (name ,  rank , rankPoints , wins , games, winRatio, averageDamage, kills , killDeathRatio , averageRank) VALUES ('${name}' ,  '${rank}' , '${rankPoints}' , '${wins}' , '${games}', '${winRatio}', '${averageDamage}', '${kills}' , '${killDeathRatio}' , '${averageRank}');`,
          (err, data) => {
            if (err) return console.error(err);
          }
        );
      });
      client.query("SELECT * from users", (err, data) => {
        data.rows.forEach(rowObject => {
          console.log(rowObject);
        });
      });
    } else {
      console.log("Filled Table");
    }
  });
}

main();
