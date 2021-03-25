const Post = require("../src/models/Post");
const Tweet = require("../src/models/Tweet");
const User = require("../src/models/User");

User.hasMany( Tweet, { as: "Tweets", foreignKey: "userId" });
Tweet.belongsTo( User, { as: "Users", foreignKey: "userId" });

const errorHandler = (error)=>{
    console.error("ERROR::::", error);
};

exports.getAllTweets = async( req, res )=>{
    const tweets = await Tweet.findAll().catch( errorHandler );
    // console.log(tweets);
    return res.status(200).json( tweets );
};

exports.getTweetById = async( req, res )=>{
    const tweetId = req.params.tweetId;
    const tweet = await Tweet.findOne({
        where: {
            id: tweetId
        },
        include: [{
            model: User,
            as: "Users"
        }]
    }).catch( errorHandler );

    if( tweet ){
        return res.status(200).json( tweet );
    } else{
        return res.status(402).json({
            error: "No data found !!!"
        });
    }
};

exports.getTweetByUserId = async( req, res )=>{
    const userId = req.params.userId;

    const tweets = await Tweet.findAll({
        where: {
            userId: userId
        },
        include: [{
            model: User,
            as: "Users"
        }]
    }).catch( errorHandler );

    if( !tweets ){
        return res.status(403).json({
            error: "No Tweets found !!!"
        });
    } else{
        return res.status(200).json( tweets );
    }
};

exports.addTweet = async( req, res )=>{
    const tweet = new Tweet( req.body );

    const insert = Tweet.create( tweet ).catch(errorHandler);

    if( insert ){
        return res.status(200).json( insert );
    } else{
        return res.status(403).json({
            error: "Error while inserting data !!!"
        });
    }

};