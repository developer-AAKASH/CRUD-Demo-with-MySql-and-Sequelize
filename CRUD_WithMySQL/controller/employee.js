// This is the most important file, a heart of the application...
// first of all we import required packages which is nothing but model class
// and crypto is just for generating randome number...
const { randomInt } = require("crypto");
const Employee = require("../models/Employee");
const Role = require("../models/Role");
// we are importing quries from respected file...
const { 
    qGetAllEmployee, 
    qGetEmployeeById, 
    qUpdateEmployee, 
    qDeleteEmployee, 
    qAddEmployee,
    qJoinWithRoles
} = require('../models/EmployeeQuries');
// also requiring database connection file....
const { dbConnection } = require("../DBConnection");

// Below method is code of getting all the employees...
exports.getAllEmployees = ( req, res )=>{
    console.log("Query",qGetAllEmployee());
    // we are firing the query method which take db-query in parameter and return 
    // the result according to our query....
    dbConnection.query( qGetAllEmployee(), ( error, rows, fields )=>{
        // If we messed up in query, it gives us error and we pring the error in
        // order to know the error...
        if( error ){
            console.log(error);
        } else{
            // And if everyone goes well, we get our expected result...
            console.log(rows[0].employeeName);
            console.log(rows[0]);
            // Here we are passing employee data to Employee model class...
            // Because model class object is very good and decent way to maintain our data...
            let emp1 = new Employee(rows[0]);
            
            console.log("From Employee Obj: ",emp1.employeeName);
            console.log(randomInt(100000));
            // Here we are returning the whole data but insted of this, we can 
            // fill all objects of the employee and return the array of employee.
            res.send(rows);
        }
    });
};

exports.getAllEmployeesR = ( req, res )=>{

    console.log("Query","SELECT * FROM employee as e JOIN role_master as r WHERE e.employeeId = r.employeeId");
    // Here, we are doing JOIN with role_master data so we get all the fields 
    // of employees as well as roles

    // everyother thing is same ....
    dbConnection.query( "SELECT * FROM employee as e JOIN role_master as r WHERE e.employeeId = r.employeeId", ( error, rows, fields )=>{
        if( error ){
            console.log("Error: ",error);
        } else{
            console.log("Else-----");
            // Difference id Here, 
            // Here, first of all we are filling thr role object from the rows 
            // data, then passing the role object to employee, as it is parent of
            // Employee, we pass this role array to employee and it will be added to 
            // employee object...
            const roles = new Role( rows[0] );
            const emp = new Employee( rows[0], roles );
            console.log(emp);
            res.send(rows);
        }
    });
};

exports.getEmployeeById = ( req, res )=>{
    // THis method is same as getAllEmployee but here, we getting employee which 
    // matches some id and we just get only one employee data.
    const eid = req.params.employeeId;

    console.log(eid);

    dbConnection.query( qGetEmployeeById(),[ eid ], ( error, rows, fields )=>{
        if( error ){
            console.log(error);
        } else{
            res.send(rows);
        }
    });
};

exports.addEmployee = ( req, res )=>{
    // Getting all the Employee data from the request body and creating object 
    // of it..
    const emp = new Employee( req.body );
    // Destructuring the object to use properties of it betterly..
    let { employeeName, employeeCode, employeePhoto, employeeSalary } = emp;

    // getting image from request object...
    // const image = req.files.profileImage;
    // seting the name of the image using some randome number and time as 
    // there may be a dublicate name of images so to redundency...
    // employeePhoto = "public/photos/" + new Date().getMilliseconds() + randomInt(100000) + image.name;

    // Same goes for video, getting the video from the request object..
    // const video = req.files.mvideo;
    // setting the name...
    // const videoName = "public/videos/" + new Date().getMilliseconds() + randomInt(100000) + video.name;

    // moving the video to our project's assets...
    // We can also validate for extention to avoid non-video files...
    // video.mv( videoName, ( error )=>{
    //     if( error ){
    //         console.log(error);
    //     } else{
    //         console.log("done");
    //     }
    // });

    // First we are validating the file and allowing the only images file...
    // if( image.mimetype == "image/jpg" || image.mimetype == "image/jpeg" || image.mimetype == "image/png" || image.mimetype == "image/gif" ){
    //     // moving the image to our project's assets iff it is an image file...
    //     image.mv( employeePhoto , ( error )=>{
    //         if( error ){
    //             console.log("ERROR" + error );
    //         } else{
    //             console.log("DOne !!");
    //         }
    //     });        
    // }

    console.log(qAddEmployee());

    // And at last inserting the data to db.
    dbConnection.query( qAddEmployee(),
    [ employeeName, employeeCode, "employeePhoto", employeeSalary ], ( error, rows, fields )=>{
        if( error ){
            console.log(error);
        } else{
            res.send(rows);
        }
    });
};

exports.updateEmployee = ( req, res )=>{
    
    // Here, everything is similar to addEmployee, we just updating the data 
    // rather than adding them...

    const emp = new Employee( req.body );
    let { employeeId, employeeName, employeeCode, employeePhoto, employeeSalary } = emp;

    employeeId = req.params.employeeId;

    console.log(employeeId);

    const image = req.files.profileImage;
    employeePhoto = "public/photos/" + new Date().getMilliseconds() + randomInt(100000) + image.name;

    if( image.mimetype == "image/jpg" || image.mimetype == "image/jpeg" || image.mimetype == "image/png" || image.mimetype == "image/gif" ){
        image.mv( employeePhoto , ( error )=>{
            if( error ){
                console.log("ERROR" + error );
            } else{
                console.log("DOne !!");
            }
        });        
    }

    dbConnection.query( qUpdateEmployee(),
    [ employeeName, employeeCode, employeePhoto, employeeSalary, employeeId ], ( error, rows, fields )=>{
        if( error ){
            console.log(error);
        } else{
            res.send(rows);
        }
    });
};

exports.deleteEmployee = ( req, res )=>{
    // Getting the employeeId from params....
    const eid = req.params.employeeId;

    console.log(eid);
    // ANd using them in query for deleteing the given employee...
    dbConnection.query( qDeleteEmployee(),[ eid ], ( error, rows, fields )=>{
        if( error ){
            console.log(error);
        } else{
            res.send(rows);
        }
    });
};