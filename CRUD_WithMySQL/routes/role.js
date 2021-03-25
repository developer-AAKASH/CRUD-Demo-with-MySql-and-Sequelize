const express = require("express");
const routes = express.Router();
const { getAllRoles, getRoleById, AddRole } = require("../controller/role");

//get all roles
routes.get("/roles", getAllRoles);

routes.get("/role/:id", getRoleById)

routes.post("/role", AddRole);


// routes.put("/role/:id", );


routes.delete("/", (req, res) => {
    res.send("Hell0...");

});

module.exports = routes;