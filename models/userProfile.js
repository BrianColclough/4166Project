class UserProfile {
  constructor(userID, connectionList) {
    this.userID = userID;
    this.connectionList = connectionList;
  }

  addConnection(connection, rsvp) {
    var UserConnection = require("../models/userConnection");
    var temp = 0;
    var test;
    var i;
    if (this.connectionList.length != 0) {
      for (i = 0; i < this.connectionList.length; i++) {
        if (this.connectionList[i].Connection == connection) {
          temp = 1;
          if (this.connectionList.rsvp != rsvp) {
            this.updateRsvp(this.connectionList[i], rsvp);
          }
        }
      }
    }

    if (temp == 0) {
      test = new UserConnection(connection, rsvp);
      this.connectionList.push(test);
    }
  }

  removeConnection(connection) {
    console.log("Connection trying to delete" + JSON.stringify(connection));

    const index = this.connectionList.indexOf(connection);
    if (index != -1) {
      //console.log(index);
      this.connectionList.splice(index, 1);
    }
    return this.connectionList;
  }

  updateRsvp(userConnection, rsvp) {
    userConnection.setRsvp(rsvp);
  }
  getResponse(connection) {
    connection.getRsvp();
  }
  getUserConnection() {
    return this.connectionList;
  }
}
module.exports = UserProfile;
