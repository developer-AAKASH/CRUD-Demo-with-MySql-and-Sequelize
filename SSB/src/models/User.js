const Sequelize = require("sequelize");
const sequelize = require("../config/dbConnections");

class User{
    constructor({
        userId,
        userName,
        password,
        createdAt,
        updatedAt
    }){
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = sequelize.define( "user_master", {
    userId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
    },
    userName: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{
    sequelize,
    modelName: "User",
    tableName: "user_master"
});