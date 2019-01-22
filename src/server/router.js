const router = require("express").Router();
const client = require("./client");
module.exports = router;

router.get("/", (req, res) => {
  // use our client to get all of our hats from our database
  // by creating raw sql query to be passed to query method
  //router.use((require('./pg')));
  client.query("SELECT * from users ORDER BY rank ASC;", (err, data) => {
    // log any errors that you encounter
    if (err) return console.error(err);
    // map over the array of returned rows and log them into your console
    console.log("All objects in the table");
    data.rows.forEach(rowObject => {
      console.log(rowObject);
    });
    // send back via http response body the data
    res.send(data.rows);
  });
  return;
});

router.get("/:userName", (req, res) => {
  let { userName } = req.params;
  client.query(
    `SELECT * from users WHERE name = '${userName}'`,
    (err, data) => {
      console.log(data.rows);
      res.send(data.rows);
    }
  );
  return;
});
