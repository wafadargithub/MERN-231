//logical operator  
//and && ma ak bhi false aya to false ho ga or agr dono true hn to true ho ga
// let isActive=true;  //false
// let isPresent=false;
// console.log(isActive && isPresent)

// let is1Active=true;  //true
// let is1Present=true;
// console.log(is1Active && is1Present)

// //or operator ma dono values ya kisi condition ma ak true ho ga to return true ho ga

// let is3Active=true;  //true
// let is3Present=false;
// console.log(is3Active || is3Present)
// // ! agr condition thk na ho to 
// let Active1=true;
// console.log(!Active1)


// let name;
// console.log(name ?? Active1)

// const 
// const var2=2;
// console.log(var2); //2
// {
//     const var2=5;
//     console.log(var2); //5
// }
// console.log(var2); //2

// let a=12;
// console.log(a); //12

// let b;
// b=15;
// console.log(b);

// {
//     let a=14;
//     console.log(a); //14
// }
// console.log(a) //14

// var name="wafadar";
// console.log(name);

// var first_name="khan";
// console.log(first_name);

// Template String ko hum isi lia istamail kirtay hain ka '' single qoute and double qoute dono ke jaga hum as ko istamail r saktay hain
// let first_name="azadar";
// let last_name="hussain";
// console.log(first_name +" " +last_name);
// let fullName=`${first_name} ${last_name}`;
// console.log(fullName);

// let text = `wafadar hussain
// khan buck
// from muzafargarh`;
// console.log(text);

//truthy or falsy ya pay ak bhi condition ya function ma value 1 ho gee to truthy ay ga otherWise 0 ho ga to falsy consider ho ga
// var age=20;
// var disease=false;
// if(age<30 && !disease){
//     console.log("young man")
// }else{
//     console.log("not young man")
// }

// function checkValue(value){
//  if(value){
//     console.log("truthy");
//  }else{
//     console.log("falsy value");
//  }
// }
//  checkValue(1); 

//  function checkValue1(value){
//     if(value){
//        console.log("truthy");
//     }else{
//        console.log("falsy value");
//     }
//    }
//     checkValue1("0");  // ko string consider kr raha hy as lia truthy a raha hy 

//==vs=== variable ke type ko nhi ko check nhi kirta hy and === variable ke type check kirta hy or phir true ya false print kirta hy
// var name="hello sir";
// if(name=="hello sir"){
//     console.log("name Matched")
// }else{
//     console.log("name not Matched")
// }

// var name="hello sirg";
// if(name==="hello sir"){
//     console.log("name Matched")
// }else{
//     console.log("name not Matched")
// }

//Functions  ak block ke tra kam kirta hy agr humay bt saray group ya condition ya variables ko ak jaga lakhna ho to hum function ko use kirtay hain
//or ya humara time bhi bachata hy or hum as ko reuseable bhi kr saktay hain
//  function jok(){
//     console.log("hello")
//  }
// jok(); // simple function hy

// function jok1(d1,d2){
//     console.log(d1);
//     console.log(d2)
// }
// jok1(12,15); // paramaters or argument pass ki Hain
// jok1(12,15);
// jok1(12,15);




// const temp=200;
// if(temp>0){
//     console.log("the weather is good")
// }
// else if(temp<=30){
//     console.log("the weather is good")
// }
// else{
// console.log("the weather is bad");
// }

// let marks_12=[67,90,80,60,34]
// console.log(marks_12)
// console.log(marks_12[0])
// console.log(marks_12[1])
// console.log(marks_12[2])
// console.log(marks_12[3])
// console.log(marks_12[4])


// //used to the function declariction
// // function paramater and argument difference 
// // paramater is the declare the function time and argument value is called the values from main fuction 
// function abc(p1,p2){
//     console.log(p1);
//     console.log(p2)
// }
// abc(1);

// function abc(p1,p2){
//     console.log(p1);
//     console.log(p2)
// }
// abc();
// abc(1);
// abc(1,2);

// function wafa(first_name, last_name){
//     console.log(first_name);
//     console.log(last_name);
// }
// wafa("wafadar");
// wafa("wafadar","hussain")


// // anyonmous function first we create the variable and assign the fucntion and we called the from variables 

// wafdar=function(a1,a2){
//     console.log(a1);
//     console.log(a2)
// }
// wafdar(12);
// wafdar(14);


 
// let w1=function(s1,s2){
//     console.log(s1);
//     console.log(s2);
// }
// w1(11);
// w1(111);


// //default parameter we used to the undefined value 
// // let e1=function(name="wafadar"){
// //     console.log(name)
// // }
// // e1();



// //arrow function by reference as ko pass kirtay arrow ko

// const even=()=>{
//     return "even";
// };

// const value=even();
// console.log(value);

// //iffe
// (function(p1){
//     console.log(p1);
// })(1);


// const even1=(p1)=>{
// return p1
// };
// console.log(even(()=>{
     
// }))


// function modifyPrimitive(value) {
//     //value = value * 2;
//     console.log("Inside function:", value*2); // e.g., 10
//   }
  
//   let num = 5;
//   modifyPrimitive(num);
//   console.log("Outside function:", num); // 5
  


//   function alti(value){
//     value=value+10;
//     console.log("inside Function add values",value)
//   }
//   let number=12;
//   alti(number);
//   console.log("outside of function",number);

 
// //object value pass
//   function btr(r1){
//     r1.newvalue="set";
//     console.log("inside of function call",r1)
//   }
//   let newobj={q:12, e:44};
//   btr(newobj);
//   console.log("outside of function calls from the objective",newobj);


//   function reassign(obj){
//     obj={s:111};
//     console.log("inside the reassign function values",reassign)
//   }
//   let v1={q1:34};
//   reassign(v1);
//   console.log("outside of function",v1)


//   //shallow Copy 

//   let original = { a: 1, b: { c: 2 } };
// let copy = Object.assign({}, original);
 
// console.log(original.b.c,4); // 3


// // if else condition

// let  member=true;
// if(member){
//     console.log("welcome to the member")
// }else{
//     console.log("please sign up the member begin")
// }

// const a=2;
// if(typeof a=="number"){
//     console.log("number")
// }
// else if(a>10){
//     console.log("a>20")
// }else{
//     console.log("a<20");
// }

// //ternary operator
// const p=1;

// if(a%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }
 
// const temperature=200;
// if(temperature>0){
//     console.log("the weather is good")
// }
// else if(temperature<=30){
//     console.log("the weather is good")
// }
// else{
// console.log("the weather is bad");
// }


