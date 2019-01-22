
const express = require("express");
var app = express();
// const pino = require("express-pino-logger")();
const bodyParser = require("body-parser");
const path = require("path");

// app.use(pino);
// create the path to our static assets
app.use(express.static(path.join(__dirname, "..", "build")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"

  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", require("./api/router"));

// specifying a port so production environment would work
let port = process.env.PORT || 8000;
// if (port == null || port == "") {
//   port = 8000;
// }
app.listen(port, () => {
  console.log(`Server running on ${port}/`);
});


// app.listen(3001, () => `listening on 3001`);
