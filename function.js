// function  resue able hota hy or multiple  value ka lia kam kirta hy

function name(){
    console.log("this is the simple function")
}
name();

// parameter and argument function
function name1(a,b){
    console.log(a+b)
}
name1(12,14);

function name2(a,b){
    console.log(a,b)
}
name2(12,14);

//higher order function
function add(s1,s2,ac){
    let reuslt=s1+s2;
ac(reuslt);
}
add(43,54, function(value){
    console.log(value)
})

function ass(d1,d2,ed){
    let res=d1*d2;
    ed(res);
}
ass(44,33, function(val){
    console.log(val)
})

//arrow function 

function aa(c1,v1,cb){
    var x=c1+v1;
    cb(x)
}
aa(55,66, (val)=>{
    console.log(val)
})

