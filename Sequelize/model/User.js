const { Sequelize, Model } = require("sequelize");

class User extends Model{
}

User.init({
    userId: {
        type: Sequelize.STRING(20),
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    emailId: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    userRole: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    profileImage: {
        type: Sequelize.STRING(50)
    },
    contactNo: {
        type: Sequelize.INTEGER(10),
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{
    sequelize,
    modelName: "User",
    tableName: "user_master"
});

console.log( User === sequelize.models.User );

module.exports = User;

/*

const { Sequelize } = require("sequelize");
const sequelize = require("../config/DBConnection");

class User{
    constructor({
        userId,
        firstName, 
        lastName,
        emailId,
        password,
        userRole, 
        profileImage,
        contactNo,
        createdAt,
        updatedAt
    }){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.password = password;
        this.userRole = userRole;
        this.profileImage = profileImage;
        this.contactNo = contactNo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = sequelize.define( "user_master", {
    userId: {
        type: Sequelize.STRING(20),
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    emailId: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    userRole: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    profileImage: {
        type: Sequelize.STRING(50)
    },
    contactNo: {
        type: Sequelize.INTEGER(10),
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{
    sequelize,
    modelName: "User",
    tableName: "user_master"
});

*/