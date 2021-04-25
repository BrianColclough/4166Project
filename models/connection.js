class Connection {
  costructor(id, name, topic, details, time) {
    this.id = id;
    this.name = name;
    this.topic = topic;
    this.details = detials;
    this.time = time;
  }
  setID(id) {
    this.id = id;
  }
  setName(name) {
    this.name = name;
  }
  setTopic(topic) {
    this.topic = topic;
  }
  setDetails(details) {
    this.details = details;
  }
  setTime(time) {
    this.time = time;
  }

  getID() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getTopic() {
    return this.topic;
  }
  getDetails() {
    return this.details;
  }
  getTime() {
    return this.time;
  }

  GetConnectionDetails() {
    return {
      id: this.id,
      name: this.name,
      topic: this.topic,
      details: this.details,
      time: this.time,
    };
  }
}
module.exports = Connection;

// var connection = function(id, name, topic, details, time) {
//   var connectionModel = {id: id, name: name, topic: topic, details: details, time: time};
//   return connectionModel;
// };
//
// var setID = function(id){
//   connection.id=id;
// };
// var setName = function(name){
//   connection.name=name;
// }
// var setTopic = function(topic){
//   connection.topic=topic;
// }
// var setDetails = function(details){
//   connection.deatils=details;
// };
// var setTime = function(time){
//   connection.time=time;
// }
// var getID = function(){
//   return connection.id;
// }
// var getName = function(){
//   return connection.name;
// }
// var getTopic = function(){
//   return connection.topic;
// }
// var getDetails = function(){
//   return connection.deatils;
// }
// var getTime = function(){
//   return connection.time;
// }
//
// module.exports.connection = connection;
// module.exports.setID = setID;
// module.exports.setName = setID;
// module.exports.setTopic = setTopic;
// module.exports.setDetails = setDetails;
// module.exports.setTime = setTime;
// module.exports.getID = getID;
// module.exports.getName = getName;
// module.exports.getTopic = getTopic;
// module.exports.getDetails = getDetails;
// module.exports.getTime = getTime;
