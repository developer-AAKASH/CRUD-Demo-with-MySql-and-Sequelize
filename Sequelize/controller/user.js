const User = require("../model/User");
const Address = require("../model/Address");
const Card = require("../model/Card");

User.hasMany( Address, { as: "user_address", foreignKey: "userId" });
Address.belongsTo( User, { as: "user_master", foreignKey: "userId" });

User.hasMany( Card, { as: "Card", foreignKey: "userId" });
Card.belongsTo( User, { as: "User", foreignKey: "userId" });

const errorHandler = (error)=>{
    console.error("ERROR::::", error);
};

exports.getAllUsers = async( req, res )=>{
    const users = await User.findAll({ 
        include: [
            {
                model: Address, as: "user_address"
            },
            {
                model: Card, as: "Card"
            }
        ] 
    })
    .then()
    .catch( errorHandler );

    if( users ){
        console.log("From method's if", JSON.stringify(users));
        return res.status(200).json( users );
    } else{
        console.log("From method's else");
        return res.status(402).json({
            error: "No User found..."
        });
    }
};