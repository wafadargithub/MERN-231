const routes =require("express").Router();
const {logout,login}=require("../controlers/authController");
routes.get("/login",login);
routes.get("/logout",logout);

module.exports=routes;