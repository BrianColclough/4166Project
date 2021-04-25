var express = require("express");
var router = express.Router();

var connections = require(".././assets/connectionDB");
var connectionsModel = connections.connect();
var savedConnections = [];

router.get("/:id/savedConnections", function (req, res) {
  savedConnections[0] = connectionsModel[parseInt(req.params.id) - 1];
  res.render("savedConnections", { connection: savedConnections[0] });
});
router.get("/savedConnections", function (req, res) {
  res.render("savedConnections");
});

router.get("/", function (req, res) {
  res.render("connections", { connections: connectionsModel });
});

router.get("/:id", function (req, res) {
  if (parseInt(req.params.id) === 1 || 2 || 3 || 4 || 5 || 6) {
    //var con = connections.conID(parseInt(req.params.id));
    var id = parseInt(req.params.id);
    res.render("connection", {
      connection: connectionsModel[parseInt(req.params.id) - 1],
    });
  } else {
    res.render("connections");
  }
});

module.exports = router;
