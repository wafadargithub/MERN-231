// const connection=require("../dbConnection");

// const users=require("./definitions/users");

// const models ={users};

// const db={}

// db.sequelize=connection;
// connection.models;
// module.exports={db,models}





// const sequelize = require("../dbConnection");
const connection = require("../dbConnection");

const users =require("./definitions/users");

const models = {users};

//relations

const db = {};

db.connection = connection; // created a key sequlize and provided it sequelize as a value
connection.models = models;// created a key models in sequelize and passed models as a value

module.exports = {db,models};