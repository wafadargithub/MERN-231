const user=require("./user");
 let header;
 const setHeader=(newValue)=>{
    header=newValue;
 }
 
user( setHeader);


header == "home" && console.log("home");
header == "Task" && console.log("task");
header == "Profile" && console.log("profile");

 