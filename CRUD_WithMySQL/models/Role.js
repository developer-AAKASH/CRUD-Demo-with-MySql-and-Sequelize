// This is basically kind of our model class and it's field or variables are strictly
// based or related database table and also represents relationship of that table
// with some another table...

class Role{
    constructor({
        roleId,
        roleName,
        createdAt,
        updatedAt
    }){
        this.roleId = roleId;
        this.roleName = roleName;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = Role;