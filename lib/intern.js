const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
    }
}

const intern = new Intern(response.name, response.id, response.email, response.school)


module.exports = Intern;