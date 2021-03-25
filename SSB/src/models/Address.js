const { Sequelize, Model } = require("sequelize");
const sequelize = require("../config/dbConnections");

class Address extends Model{
    constructor({
        addressId,
        userId,
        address,
        createdAt
    }){
        super();
        this.addressId = addressId;
        this.userId = userId;
        this.address = address;
        this.createdAt = createdAt;
    }
}

Address.init({
    addressId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{
    sequelize,
    modelName: "Address",
    tableName: "user_address"
});

module.exports = Address;