const {hash}=require("bcrypt");
const { response } = require("express");


module.exports={
    createUser:async(req,res)=>{
        try{
       req.body.password=await hash(req.body.password,10)
       return res.send({
        status:"ok",
        code:200,
        response:req.body,
       });
        }catch(error){
            return res.send({
                status:"error",
                code:"400",
                error:"request not found"
            });
        }
        console.log(req); 
        return res.send("create user request")
    },
    getAllUser:(req,res)=>{
        return res.send("get all users")
    },
    updateUser:(req,res)=>{
        return res.send("update user");
    },
};

// const {hash}=require("bcrypt")
// module.exports={
    

//     getAllUsers:(req,res)=>{

//         console.log(req.query);
        
//         return res.send("get user");
//     },

//     createUser:async(req,res)=>{
//         try {
//         req.body.password= await hash(req.body.password,10);
            
        
//         return res.send({
//             status:"ok",
//             code:200,
//             response: req.body,
//         });
            
//         } catch (error) {
//             return res.send({
//                 status:"error",
//                 code:400,
//                 error:error.message,
//             });
            
//         };
        
//     },
//     updateUser:(req,res)=>{
//         return res.send("update user");
//     },

// };