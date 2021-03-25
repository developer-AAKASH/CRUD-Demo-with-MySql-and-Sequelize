// As we know that we are differentiate the routes based on table or module name,
// THis is routes for employee table...

// Importing required packeges...
const express = require("express");
const router = express.Router();

// Importing actual methods from our controller...
const { 
    getAllEmployees, 
    getEmployeeById, 
    deleteEmployee, 
    addEmployee, 
    updateEmployee,
    getAllEmployeesR
} = require("../controller/employee");

// route for getting all employees
router.get("/employees", getAllEmployees);

// route for getting all employees along with its roles
router.get("/employees/roles", getAllEmployeesR);

// route for getting employee by id
router.get("/employees/:employeeId", getEmployeeById);

// route for deleting employee based on id
router.delete("/employees/:employeeId", deleteEmployee);

// for adding new employee...
router.post("/employees", addEmployee);

// for updating employee based on id
router.put("/employees/:employeeId", updateEmployee);

// At the end, we are exporting all routes and telling the application that,
// if routes are match with these guys, call this mentioned function...
module.exports = router;