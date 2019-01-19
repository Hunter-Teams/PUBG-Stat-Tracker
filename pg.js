const router = require("express").Router();
const client = require('./client');
module.exports = router;

const result = require('./index');

console.log("RESULT IS:");
console.log(result);

result.map((elem)=> {

    var name = elem.name;

    var rank = elem.ran;
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
        console.log(`After adding input = , length = `);
        client.query("SELECT * from users", (err, data) => {
          data.rows.forEach(rowObject => {
            console.log(rowObject);
          });
          res.status(201).send(data.rows);
        });
      }
    );
})




// client.query("SELECT * from users", (err, data) => {
//     if (err) return console.error(err);
//     console.log("All objects in the table");
//     data.rows.forEach(rowObject => {      
//       console.log(rowObject);
//     });
// });


// router.post("/", (req, res) => {
 
//   const { input, length } = req.body;
//   lenght = parseFloat(length);

//   client.query(
//     `INSERT INTO input  VALUES ('${input}',  '${lenght}')`,
//     (err, data) => {
//       if (err) return console.error(err);
//       console.log(`After adding input = ${input}, length = ${lenght}`);
//       client.query("SELECT * from input", (err, data) => {
//         data.rows.forEach(rowObject => {
//           console.log(rowObject);
//         });
//         res.status(201).send(data.rows);
//       });
//     }
//   );
//   return;
// });