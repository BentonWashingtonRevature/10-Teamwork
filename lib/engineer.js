const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.github = github;
    }
}

const engineer = new Engineer(response.name, response.id, response.email, response.github)

module.exports = Engineer;
