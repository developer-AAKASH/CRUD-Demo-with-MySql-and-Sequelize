const { Sequelize, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Post extends Model{
    constructor({
        postId, 
        postContent,
        likes,
        disLikes,
        userId,
        createdAt,
        updatedAt
    }){
        super();
        this.postId = postId;
        this.postContent = postContent;
        this.likes = likes;
        this.disLikes = disLikes;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

Post.init({
    postId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    postContent: Sequelize.STRING( 300 ),
    userId: Sequelize.INTEGER(11),
    likes: Sequelize.INTEGER(11),
    disLikes: Sequelize.INTEGER(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {
    sequelize,
    modelName: "Post"
});

module.exports = Post;