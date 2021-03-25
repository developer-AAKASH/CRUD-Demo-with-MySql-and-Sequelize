const User = require("../models/User");
const Post = require("../models/Post");
const Tweet = require("../models/Tweet");
const Address = require("../models/Address");
const Card = require("../models/Card");

User.hasMany( Address, { as: "user_address", foreignKey: "userId" });
Address.belongsTo( User, { as: "user_master", foreignKey: "userId" });

User.hasMany( Card, { as: "card_master", foreignKey: "userId" });
Card.belongsTo( User, { as: "user_master", foreignKey: "userId" });

exports.getAllPosts = async( req, res )=>{
    const users = await User.findAll({ 
        include: [
            { 
                model: Address, as: "user_address" 
            },
            {
                model: Card, as: "card_master"
            }
        ] 
    }).catch((error)=>{
        console.log(error);
    });

    if( users ){
        return res.status(200).json( users );
    } else{
        return res.status(402).json({
            error: "No data found !!"
        });
    }
};