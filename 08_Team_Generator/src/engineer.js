const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, userName){
        super(name, id, email);
        this.userName = userName;
    }
    getUserName(){
        return this.userName;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer