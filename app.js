var express = require("express");

var bodyParser = require("body-parser");
var expressValidator = require('express-validator');
var session = require("express-session");
var app = express();
// view engine setup

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

// loading routes
var index = require("./routes/index.js");
var login = require("./routes/login.js");
var register = require("./routes/register.js");
var account = require("./routes/account.js");
var user = require("./routes/user.js");

// attaching routes to the application
app.use(index);
app.use(login);
app.use(register);
app.use(account);
app.use(user);

app.use(
  session({
    secret: "madhu",
    saveUninitialized: true,
    resave: false
  })
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
//server address
app.listen(3000);
module.exports = app;