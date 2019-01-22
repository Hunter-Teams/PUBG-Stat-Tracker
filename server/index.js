// load all env variables from .env file into process.env object.
require(‘dotenv’).config();
const express = require("express");
var app = express();
const pino = require("express-pino-logger")();
const bodyParser = require("body-parser");

app.use(pino);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", require("./router"));

// specifying a port so production environment would work
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => {
  console.log(`Server running on ${port}/`);
});


// app.listen(3001, () => `listening on 3001`);
