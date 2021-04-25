class UserConnection {
  constructor(Connection, rsvp) {
    this.Connection = Connection;
    this.rsvp = rsvp;
  }
  getConnection() {
    return this.Connection;
  }
  getRsvp() {
    return this.rsvp;
  }

  setConnection(connection) {
    this.Connection = connection;
  }
  setRsvp(rsvp) {
    this.rsvp = rsvp;
  }

  getUserConnectionDetails() {
    return {
      Connection: this.Connection,
      rsvp: this.rsvp,
    };
  }
}
module.exports = UserConnection;
