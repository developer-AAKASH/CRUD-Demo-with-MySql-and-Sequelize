module.exports = async()=>{
    const Tweet = require("./models/Tweet");
    const User = require("./models/User");

    User.hasMany( Tweet, { as: "Tweets", foreignKey: "userId" });
    Tweet.belongsTo( User, { as: "User", foreignKey: "userId" });

    const errorHandler = (error)=>{
        console.error("ERROR::::", error);
    };

    const user = await User.create({ userName: "Aakash", password: "12345"})
    .catch( errorHandler );

    const tweet = await Tweet.create({ 
        content: "f vsjjgte gtkg g ar garhgahghg v sfkv r gr gh g", 
        userId: 1 
    }).catch( errorHandler );

    const users = await User.findAll({ where: { userName: "Aakash" }, include: [{ model: Tweet, as: "Tweets" }] })
    .catch( errorHandler );

    console.log("Aakash's tweets : ", JSON.stringify(users) );
    // console.log("Aakash's tweets : ", users.Tweets[Tweet] );
};