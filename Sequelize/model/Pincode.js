const { Sequelize, Model } = require("sequelize");
const sequelize = require("../config/DBConnection");

class Pincode extends Model{
    constructor({
        pincodeId,
        pincode,
        cityId,
        createdAt,
        updatedAt
    }){
        this.pincodeId = pincodeId;
        this.pincode = pincode;
        this.cityId = cityId;
        this.createdAt = createdAt;
        this.updatedA = updatedAt;
    }
}

Pincode.init({
    pincodeId: {
        type: Sequelize.STRING(20),
        primaryKey: true,
    },
    pincode: {
        type: Sequelize.INTEGER(8),
        allowNull: false
    },
    cityId: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{
    sequelize,
    modelName: "Pincode"
});

module.exports = Pincode;