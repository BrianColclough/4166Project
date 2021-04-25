let Connection = require("../models/connection.js");

//milestone 4 database stuff start

//returns an array of Connection objects of all the connections
//objects of all the connections in the connections table from the database
function getConnections() {}

//returns a connection object for the probided connection code
function getConnections(connectionID) {}

//old hard-coded database
let connection1 = new Connection();
let connection2 = new Connection();
let connection3 = new Connection();
let connection4 = new Connection();
let connection5 = new Connection();
let connection6 = new Connection();

connection1.setTime("August 5, 2021");
connection1.setName("Learn how to build your own keyboard");
connection1.setID(1);
connection1.setDetails("Learn how to build your own keyboard");
connection1.setTopic("events");

connection2.setTime("September 21, 2021");
connection2.setName("Keycon 2021");
connection2.setID(2);
connection2.setDetails("Meet up with others who share the same hobby");
connection2.setTopic("events");

connection3.setTime("July 13, 2021");
connection3.setName("UNCC Meetup");
connection3.setID(3);
connection3.setDetails("Meet others that attend UNCC and share the same hobby as you.");
connection3.setTopic("events");

connection4.setTime("November 22, 2021");
connection4.setName("How to make your keyboard better");
connection4.setID(4);
connection4.setDetails(
    "Want to know how you can learn to make your current keyboard sound and feel better? Well this is the place"
);
connection4.setTopic("learn");

connection5.setTime("June 14, 2021");
connection5.setName("How to solder");
connection5.setID(5);
connection5.setDetails(
    "Knowing how to solder is a trick that could come in handy in many other aspects of life so if you want to learn this is the time!"
);
connection5.setTopic("learn");

connection6.setTime("August 26, 2021");
connection6.setName("How to lube switches");
connection6.setID(6);
connection6.setDetails("Learn how to make your keyboard smoother and sound better");
connection6.setTopic("learn");

var connections = [connection1, connection2, connection3, connection4, connection5, connection6];
var connect = function getConnections() {
    return connections;
};

var conID = function getConnections(connectionID) {
    return connections[connectionID - 1];
};

module.exports = {
    connect: connect,
    conID: conID,
};
