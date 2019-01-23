const router = require("express").Router();
const client = require('./client');
module.exports = router;


const https = require('https');

function doRequest(mode) {
  return new Promise(function (resolve, reject) {
    var result = [];
    const options = {
      host: 'api.pubg.com',
      path: `/shards/steam/${mode}`,
      method: 'GET',
      headers: {
          "Accept": "application/vnd.api+json",
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmNjFhM2QwMC1mZDg3LTAxMzYtYWE0MS0wM2RjN2YxZjgyYzkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTQ3ODQwOTEzLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im1jZG9semxuIn0.5aLHkXHd_glPo9RJ02SJARMGjPbEnaz3wWekwMrz4ZE"
      }
    };

 https.get(options, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    var newObj = JSON.parse(data).included;
    newObj.map((elem)=>{
      result.push(elem.attributes);
    }); 
    resolve(result)
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
})
  });
}



async function main(mode = "leaderboards/solo") {


    let res = await doRequest(mode);       

    // console.log("RESULT really IS:");
    // console.log(res);

    client.query(
      `DELETE from users WHERE rank>0;`,
      (err, data) => {
        console.log("Data removed from table");
        if (err) return console.error(err);
      }
    );

            
    res.map((elem) => {

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
      })
        client.query("SELECT * from users", (err, data) => {
          console.log("afterInsertion");
          console.log(data.rows.length);
        //     data.rows.forEach(rowObject => {
        //     console.log(rowObject);
        // });
    }); 


}
  










router.get("/:mode", async (req, res) => {
  let { mode } = req.params;
  mode = "leaderboards/"+mode;
  await  main(mode);
  console.log("Mode is");
  console.log(mode);
  client.query("SELECT * from users ORDER BY rank ASC;", (err, data) => {
    if (err) return console.error(err);
    console.log("All objects in Mode in the table");
    console.log(data.rows.length);
    res.send(data.rows);
  });
  return;
});






router.get("/", async (req, res) => {
    // use our client to get all of our hats from our database 
    // by creating raw sql query to be passed to query method
  console.log("HelloWorld");
  await main("leaderboards/solo");
  client.query("SELECT * from users ORDER BY rank ASC;", (err, data) => {
      // log any errors that you encounter
    if (err) return console.error(err);
    // map over the array of returned rows and log them into your console
    console.log("Number of objects in slash in the table");
    console.log(data.rows.length);
    // data.rows.forEach(rowObject => {      
    //   console.log(rowObject);
    // });
    // send back via http response body the data
    res.send(data.rows);
  });
  return;
});



