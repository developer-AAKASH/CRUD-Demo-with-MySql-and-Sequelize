const dbConnection = require("../DBConnection");
const Role = require("../models/Role");

exports.getAllRoles = (req, res)=>{
    dbConnection.query("select * from role_master", (err, rows, field) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    });
    
    
}

exports.getRoleById = (req, res) =>{
    const userId = req.params.id;
    dbConnection.query("select * from role_master where roleId = ?", 
    [userId], 
    (err, rows, field) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
}

exports.AddRole = (req, res) => {
    // console.log(req.body);
    // console.log(req.file);
    console.log(req.body.roleName);
   const role = new Role(req.body);
   const {roleId, roleName, createdAt, updatedAt} = role;
   console.log("Role name: ", roleName);
   dbConnection.query("insert into role_master (roleName, employeeId) values (?, 1)", [roleName], (err, rows, fields) => {
    if(err)
        console.log(err)
    else
        res.json(rows);
   });

// exports.updateRole = (req, res) => {
//     const role = new Role(req.body);
//    const {roleId, roleName, createdAt, updatedAt} = role;
//    dbConnection.query("update into role_master (roleName) values (?)", [roleName], (err, rows, fields) => {
//     if(err)
//         console.log(err)
//     else
//         res.json(rows);
//    });
// }



}