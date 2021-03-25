const { Sequelize, Model } = require("sequelize");
const sequelize = require("../config/DBConnection");

class City extends Model{
    constructor({
        cityId,
        cityName,
        stateId,
        createdAt,
        updatedAt
    }){
        this.cityId = cityId;
        this.cityName = cityName;
        this.stateId = stateId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

City.init({
    cityId: {
        type: Sequelize.STRING(20),
        primaryKey: true,
    },
    cityName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    stateId: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{
    sequelize,
    modelName: "City"
});

module.exports = City;