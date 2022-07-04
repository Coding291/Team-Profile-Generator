const Employee = require('../lib/Employee')
class Engineer extends Employee {
    constructor(name, id, email, officeNumber, github) {
        super(name, id, email, officeNumber);
        this.github = github
     }

     getGithub() {

        return this.github
     }

     getRole() {

        return 'Engineer'
     }
}

module.exports = Engineer;