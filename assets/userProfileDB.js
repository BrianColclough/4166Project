const mongoose = require("mongoose");
var UserConnection = require("../models/userConnection");

//database connetion
const connections = require("../models/connectionModel");
const User = require("../models/userModel.js");
const { UserDB } = require("../assets/userDB");
const userConnections = require("../models/userConnectionModel");
const db = "mongodb://localhost/users";

class UserProfileDB {
    static async addUserConnection(connection, rsvp) {
        const userConnection = new userConnections({
            connection: connection,
            rsvp: rsvp,
        });
        userConnection.save(function (err) {
            if (err) {
                console.error(err);
            }
        });
        UserDB.addUserConnection(connection.id, userConnection);

        // return userConnections.findOneAndUpdate(
        //     { connection: connection },
        //     { $set: { rsvp: rsvp } },
        //     { upsert: true, useFindAndModify: false },
        //     (err, result) => {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log(result);
        //         }
        //     }
        // );
    }
    static async getUserConnections(userID) {
        return await User.findOne({ id: userID }, "connectionList");
    }

    static async addRSVP(userID, connectionID, rsvp) {
        userConnections.findOneAndUpdate(
            { connection: connection, user: user },
            { $set: { rsvp: rsvp } },
            { upsert: true, useFindAndModify: false }
        );
    }
}

module.exports = { UserProfileDB: UserProfileDB };
