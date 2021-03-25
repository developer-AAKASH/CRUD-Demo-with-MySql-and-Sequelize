const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../config/dbConnections");

// module.exports = sequelize.define("Tweet", {
//     id: {
//         type: Sequelize.INTEGER(11),
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     content: Sequelize.STRING( 300 )

// });

class Tweet extends Model{
    constructor({
        id,
        content,
        userId,
        createdAt, 
        updatedAt
    }){
        super();
        this.id = id;
        this.content = content;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

Tweet.init({
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    content: Sequelize.STRING( 300 ),
    userId: Sequelize.INTEGER(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{
    sequelize,
    modelName: "Tweet"
});

module.exports = Tweet;