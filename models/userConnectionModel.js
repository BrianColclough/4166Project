var Connection = require("./connectionModel");
const Users = require("../models/userModel");

const mongoose = require("mongoose");

const userConnectionModelSchema = mongoose.Schema({
    //user: { type: mongoose.Schema.Types.ObjectID, ref: Users, required: true },
    connection: { type: mongoose.Schema.Types.ObjectId, ref: "Connection" },
    rsvp: { type: String, required: true },
});
const userConnections = mongoose.connection.useDb("userConnections");
const UserConnections = userConnections.model("userConnections", userConnectionModelSchema);
module.exports = UserConnections;
