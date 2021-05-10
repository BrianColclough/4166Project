var Connection = require("./connectionModel");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    connectionList: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Connection" }],
        default: [],
    },
});
const users = mongoose.connection.useDb("users");
const User = users.model("user", userSchema);
module.exports = User;
