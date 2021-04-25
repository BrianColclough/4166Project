var express = require("express");
var app = express();

var connections = require("./assets/connectionDB");
var connectionsModel = connections.connect();

app.set("view engine", "ejs");
//static resources
app.use("/assets", express.static("assets"));

var index = require("./controller/index");
app.use("/", index);

var library = require("./controller/controller");
app.use("/connection", library);

var connection = require("./controller/UserController");
app.use("/savedConnections", connection);

app.listen(8080, function () {
  console.log("app started");
  console.log("listening on port 8080");
});
