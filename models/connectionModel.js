const mongoose = require("mongoose");

const connectionSchema = mongoose.Schema({
    id: {
        type: Number,
        required: [true, "you must have an id number for your event"],
    },
    topic: {
        type: String,
        required: [true, "Your event must have a topic"],
    },
    name: {
        type: String,
        required: [true, "Your event must have a name"],
    },
    details: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: [true, "Your event must have a time"],
    },
});

const connection = mongoose.connection.useDb("connections");
const Connection = connection.model("connection", connectionSchema);
module.exports = Connection;
