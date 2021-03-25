const { Sequelize, Model } = require("sequelize");
const sequelize = require("../config/DBConnection");

class State extends Model{
    constructor({
        stateId,
        stateName,
        createdAt,
        updatedAt
    }){
        this.stateId = stateId;
        this.stateName = stateName;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

State.init({
    stateId: {
        type: Sequelize.STRING(20),
        primaryKey: true,
    },
    stateName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{
    sequelize,
    modelName: "State"
});

module.exports = State;