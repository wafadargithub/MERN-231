// const express=require("express")
// //imported express package her
// const userRouter=require("./routes/userRouter")
// const port=3000;
// //add port
// const app =express();
// //create the server

// app.use("/user/userRouter")


// app.get("/user",(req,res)=>{
//     return res.send("my first api ")
// })//  // get the path pc accept the api in localhost:3000/user
// //first api using get method

// app.get("/",(req,res)=>{
//     return res.send("my second api ")
// })//  // get the path pc accept the api in localhost:3000/user


//started server



// const express =require("express")

// const app=express();
// const url=5000;
// app.get("api",(req,res)=>{
//     return res.send("you can send me the url")
// })
// app.listen(url)


// const express=require("express")
// const app =express();
// const server=3000;

// app.get("/user",(req,res)=>{
//     return res.send("my first api ")
// })//  // get the path pc accept the api in localhost:3000/user

// app.listen(port,()=>{
//     console.log(`app listening on port ${port}`)
// });



 

// const express=require("express");
// const port=3000;
// const app=express();
// app.get("/user",(req,res)=>{
//     return res.send({data:"this the first app create"})
// });
// app.post("/user",(req,res)=>{
//     return res.send({data:"create app data"})
// })
// app.put("/user",(req,res)=>{
//     return res.send({data:"updata data"})
// });
// app.delete("/user",(req,res)=>{
//     return res.send("delete the app")
// })
// app.listen(port,()=>{
//     console.log("server running time")
// })



// const express=require("express");
// const port=7000;
// const app=express();

// const userRouters=require("./routes/user");
// const commentRouter=require("./routes/comments");
// app.use("/user",userRouters);
// app.use("/comments",CommentRo);
// app.listen(port,()=>{
//     console.log("server running")
// })





// const express=require("express");

// const userRouter=require("./routes/userRouter")
// const port=3000;
// const app=express();

// app.use("user",userRouter);

//  app.listen(port,()=>{
//     console.log("this is the router")
//  })


// const express=require("express");
// const port =3000;

// const userRouter= require("./routes/userRouter");
// const authRouter= require("./routes/authRouter");


// const app=express();

// app.use("/user",userRouter);
// app.use("/auth",authRouter);

// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`);
    
// }) 


const express=require("express");
const bodyParser=require('body-parser')
const userRouter=require("./routes/userRouter");
const authRouter=require("./routes/authRouter");
const setRouter=require("./routes/setRouter")

const port=4000;
const server=express();

// create application/x-www-form-urlencoded parser
server.use(bodyParser.urlencoded({ extended: true }));

server.use(bodyParser.json());

server.use("/user",userRouter);
server.use("/auth",authRouter);
server.use("/users",setRouter)

server.listen(port,()=>{
    console.log(`server listing on port ${port}`)
})