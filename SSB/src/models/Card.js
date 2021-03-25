const { Sequelize, Model } = require("sequelize");
const sequelize = require("../config/dbConnections");

class Card extends Model{
    constructor({
        cardId,
        userId, 
        cardNo,
        createdAt,
    }){
        super();
        this.cardId=cardId;
        this.userId=userId; 
        this.cardNo=cardNo;
        this.createdAt=createdAt;
    }
}

Card.init({
    cardId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
    },
    userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    cardNo: {
        type: Sequelize.INTEGER(16),
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{
    sequelize,
    modelName: "Card",
    tableName: "card_master"
});

module.exports = Card;