const mongoose = require("mongoose");
const Users = require("../models/userModel");

// const db = "mongodb://localhost/users";
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.Promise = global.Promise;

//returns a User object for the provided user identifier
class UserDB {
    static async getUser(userID) {
        return Users.findOne({ id: userID });
    }
    static async addUserConnection(userID, userConnection) {
        return Users.findOne({ id: userID }, (err, user) => {
            if (err) {
                console.error(err);
            } else {
                user.connectionList.push(userConnection);
            }
        });
    }
}
// var getUser = (userID) => {
//     Users.find({ id: userID }, (err, user) => {
//         if (err) {
//             console.log("error finding a user from their email/userID");
//         } else {
//             console.log(user);
//             return user;
//         }
//     });
// };
module.exports = { UserDB: UserDB };
