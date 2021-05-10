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
