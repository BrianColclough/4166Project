var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();

//"database" of connections
var connections = require(".././assets/connectionDB");
var connectionsModel = connections.connect();

var UserProfile = require("../models/userProfile");
var UserConnection = require("../models/userConnection");
var Connection = require("../models/connection");
const { post } = require(".");

router.use(session({ secret: "User" }));

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var sessionUser;
var sessionConnction;

router.get("/", function (req, res) {
    console.log(typeof req.session.user);
    if (req.session.user) {
        res.render("savedconnections", { user: req.session.user });
    } else {
        res.render("savedconnections");
    }
});

router.post("/", urlencodedParser, function (req, res) {
    console.log(req.body);

    //UserProfile = new UserProfile(req.body.username, []);

    //session
    req.session.user = new UserProfile(req.body.username, []);
    sessionUser = req.session.user;
    //req.session.user.addConnection("hello");
    console.log(req.session);

    if (req.session.user.userID) {
        console.log(req.body.username);
        res.render("savedConnections", { user: req.session.user });
    } else {
        res.redirect("/");
    }
});

router.get("/rsvp", function (req, res) {
    res.render("savedconnections");
});

router.post("/rsvp", function (req, res) {});

router.get("/rsvp/:id/:rsvp", function (req, res) {
    res.render("savedconnections");
});

router.post("/rsvp/:id/:rsvp", function (req, res) {
    console.log(req.session.user);
    if (req.session.user === undefined) {
        res.redirect("/login");
    } else {
        sessionUser.addConnection(connectionsModel[req.params.id - 1], req.params.rsvp);
        //sessionUser.updateRsvp(connectionsModel[req.params.id-1], "Yes");
        req.session.user = sessionUser;
        res.redirect("/savedconnections");
    }
});

router.get("/delete/:id", function (req, res) {
    res.render("savedconnections");
});

router.post("/delete/:id", function (req, res) {
    var index;
    for (let i = 0; i < sessionUser.connectionList.length; i++) {
        if (sessionUser.connectionList[i].Connection.id == req.params.id) {
            index = i;
        }
    }
    sessionUser.connectionList = sessionUser.removeConnection(sessionUser.connectionList[index]);
    req.session.user = sessionUser;
    res.redirect("/savedconnections");
});
router.get("/logout", function (req, res) {
    req.session.destroy();
    res.redirect("/savedConnections");
});

module.exports = router;
