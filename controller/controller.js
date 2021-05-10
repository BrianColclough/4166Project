var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//body parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const Connections = require("../models/connectionModel");
const db = "mongodb://localhost/connections";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

var connections = require(".././assets/connectionDB");
var savedConnections = [];

router.get("/:id/savedConnections", function (req, res) {
    savedConnections[0] = connectionsModel[parseInt(req.params.id) - 1];
    res.render("savedConnections", { connection: savedConnections[0] });
});

router.get("/savedConnections", function (req, res) {
    res.render("savedConnections");
});

router.get("/", function (req, res) {
    Connections.find({}, (err, connections) => {
        if (err) {
            console.error(err);
        } else {
            res.render("connections", { connections: connections });
        }
    });
});

router.post("/", urlencodedParser, (req, res) => {
    connections.addConnection(
        req.body.name,
        req.body.id,
        req.body.time,
        req.body.topic,
        req.body.details
    );
    res.redirect("/connection");
});

router.get("/:id", function (req, res) {
    Connections.find({ id: req.params.id }, (err, connection) => {
        res.render("connection", { connection: connection[0] });
    });
});

module.exports = router;
