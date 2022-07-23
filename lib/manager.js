const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        this.office = office;
    }
};

const manager = new Manager(response.name, response.id, response.email, response.office);


module.exports = Employee;
