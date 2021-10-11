const {Sequelize}=require('sequelize');
const { sequelize_database } = require('../config');
const sequelize =new Sequelize(
    sequelize_database,
    "postgress",
    "123456789",
    {
        host:"localhost",
        dialect:"postgres"
    }
);
sequelize.sync();
(async()=>{
    try{
        await sequelize.authenticate();
        console.log("connected with db");
    }
    catch(err){
        console.log("unable to connect to db");
    }
})();
module.exports=sequelize