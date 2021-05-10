var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//"database" of connections that is from Milestone 3
var connections = require(".././assets/connectionDB");
var connectionsModel = connections.connect();
var user = require("../assets/userDB");

//real database connections for milestone 4
const Users = require("../models/userModel");
const Connections = require("../models/connectionModel");
const UserConnections = require("../models/userConnectionModel");
var UserProfile = require("../models/userProfile");
var UserConnection = require("../models/userConnection");
const { post } = require(".");
const User = require("../models/userModel");
const { UserDB } = require("../assets/userDB");
const { UserProfileDB } = require("../assets/userProfileDB");
var { ConnectionDB } = require(".././assets/connectionDB");
router.use(session({ secret: "User" }));

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var sessionUser;

router.get("/", function (req, res) {
    console.log(typeof req.session.user);

    if (req.session.user) {
        res.render("savedconnections", { user: req.session.user });
    } else {
        res.render("savedconnections");
    }
});

router.post("/", urlencodedParser, function (req, res) {
    req.session.user = new UserProfile(req.body.username, []);
    sessionUser = req.session.user;

    //get user from database but we will not use this further because I could not figure it out.
    UserDB.getUser("Norm")
        .then((user) => {
            // req.session.user = user;
            res.render("savedconnections", { user: user });
            // res.send(user);
        })
        .catch((err) => {
            console.error(err);
        });

    console.log(req.session.user);
});

router.get("/rsvp", function (req, res) {
    res.render("savedconnections");
});

router.post("/rsvp", function (req, res) {});

router.get("/rsvp/:id/:rsvp", function (req, res) {
    res.render("savedconnections");
});

//function to add a new connetion to a users list of saved connetions
router.post("/rsvp/:id/:rsvp", function (req, res) {
    console.log(req.session.user);

    if (req.session.user === undefined) {
        res.redirect("/login");
    } else {
        sessionUser.addConnection(connectionsModel[req.params.id - 1], req.params.rsvp);
        req.session.user = sessionUser;
        res.redirect("/savedconnections");
    }
});

router.get("/delete/:id", function (req, res) {
    res.render("savedconnections");
});

//function to delete a connection from a users list of connetions
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

//Destroy the session that is on going when the user clicks on logout
router.get("/logout", function (req, res) {
    req.session.destroy();
    res.redirect("/savedConnections");
});

module.exports = router;
