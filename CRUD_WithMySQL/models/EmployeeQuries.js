// This file is basically a list of quries related to This table.
// We have created methods with name related to quries and returning them 
// as a string...

const comman = "SELECT * FROM EMPLOYEE";

const qGetAllEmployee = ()=>{
    return comman;
};

const qGetEmployeeById = ()=>{
    return comman + " WHERE employeeId = ?";
};

const qAddEmployee = ()=>{
    return "INSERT into employee (employeeName, employeeCode, employeePhoto, employeeSalary ) values( ?, ?, ?, ? )";
};

const qDeleteEmployee = ()=>{
    return "DELETE FROM employee where employeeId = ?";
};

const qUpdateEmployee = ()=>{
    return "UPDATE employee set employeeName = ?, employeeCode = ?, employeePhoto = ?, employeeSalary = ? where employeeId = ?";
};

const qJoinWithRoles = ()=>{
    return "SELECT * FROM employee as e JOIN role_master as r WHERE e.employeeId = r.employeeId";
};

// At the end, we are returning or exporting all the query methods..

module.exports = {
    qGetAllEmployee,
    qGetEmployeeById,
    qAddEmployee,
    qDeleteEmployee,
    qUpdateEmployee,
    qJoinWithRoles
};