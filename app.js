var express = require("express");
var app = express();
var router = require("./router");

// config halløj
app.use(router);

module.exports = app;
