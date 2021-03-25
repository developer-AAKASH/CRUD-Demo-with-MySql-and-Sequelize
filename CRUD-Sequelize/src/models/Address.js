const { Sequelize, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Address extends Model{
    constructor({
        addressId,
        userId,
        line1,
        line2,
        line3,
        pincodeId,
        addressType,
        createdAt,
        updatedAt
    }){
        super();
        this.addressId = addressId;
        this.userId = userId;
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
        this.pincodeId = pincodeId;
        this.addressType = addressType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

Address.init({
    addressId: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    line1: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    line2: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    line3: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    pincodeId: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    addressType: {
        type: Sequelize.STRING(10),
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