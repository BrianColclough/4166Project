let OldConnection = require("../models/connection.js");

//milestone 4 database stuff start
const mongoose = require("mongoose");
const Connection = require("../models/connectionModel");
const db = "mongodb://localhost/connections";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

//this function returns an array of Connection objects
//of all the connections in the connections table from the database

class ConnectionDB {
    static async getConnection(connectionID) {
        Connection.findOne({ id: connectionID }, "_id", (err, connection) => {
            if (err) {
                console.error(err);
            } else {
                return connection;
            }
        });
    }

    static async getConnections() {
        return await Connection.find({});
    }
}

//add a connection to the list of connections
var addConnection = function addConnection(name, id, time, topic, details) {
    Connection.create({
        name: name,
        id: id,
        time: time,
        details: details,
        topic: topic,
    });
};

//old hard-coded database
let connection1 = new OldConnection();
let connection2 = new OldConnection();
let connection3 = new OldConnection();
let connection4 = new OldConnection();
let connection5 = new OldConnection();
let connection6 = new OldConnection();

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
    addConnection: addConnection,
    ConnectionDB: ConnectionDB,
};
