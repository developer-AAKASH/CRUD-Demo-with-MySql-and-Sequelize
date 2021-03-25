const Role = require("./Role");

// This is basically kind of our model class and it's field or variables are strictly
// based or related database table and also represents relationship of that table
// with some another table...

// extends Role
class Employee extends Role{
    constructor({
        employeeId = "", 
        employeeName = "", 
        employeeCode = "", 
        employeePhoto = "", 
        employeeSalary = "",
    }, roles){
        super( roles );
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeCode = employeeCode;
        this.employeePhoto = employeePhoto;
        this.employeeSalary = employeeSalary;
    }
}

module.exports = Employee;