const Post = require("../src/models/Post");
const User = require("../src/models/User");
const Tweet = require("../src/models/Tweet");

User.hasMany( Post, { as: "Posts", foreignKey: "userId" });
Post.belongsTo( User, { as: "User", foreignKey: "userId" });

User.hasMany( Tweet, { as: "Tweet", foreignKey: "userId" });
Tweet.belongsTo( User, { as: "User", foreignKey: "userId" });

const errorHandler = (error)=>{
    console.error("ERROR::::", error);
};

exports.getAllPosts = async( req, res )=>{
    const posts = await User.findAll({ 
        include: [
            { 
                model: Post, as: "Posts" 
            },
            {
                model: Tweet, as: "Tweet"
            }
        ] 
    }).catch( errorHandler );
    console.log("From method");
    console.log(JSON.stringify(posts));
    if( posts ){
        console.log("From method's if");
        return res.status(200).json( posts );
    } else{
        console.log("From method's else");
        return res.status(402).json({
            error: "No Posts found..."
        });
    }
};