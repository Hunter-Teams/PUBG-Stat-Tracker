const express = require('express');

var app = express();
const pino = require('express-pino-logger')();

const bodyParser = require('body-parser');
app.use(pino);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./pg'))
app.use('/api', require('./router'))

app.listen(3001, () => `listening on 3001`)