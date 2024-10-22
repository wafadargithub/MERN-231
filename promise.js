// const promise1=new  promise((resolve, reject)=>{
// const a=2;
// if(a%2==0){
//     resolve("even");
// }
// reject("odd");
// })
// promise1.then((resolve)=>{
//  console.log(resolve)
// }).catch((reject)=>{
//   console.log(reject);
// })


async function wafadar() {
  let LahoreWeather =new Promise((resolve, reject)=>{
          setTimeout(()=>{
              resolve("30")
          },1000)
      })
  
      let MultanWeather=new Promise((resolve,reject)=>{
          setTimeout(()=>{
          resolve("35 deg")
      },6000)
  })
  let lahorw=await LahoreWeather;
  let MultanW=await MultanWeather
  return [lahorw,MultanW]
   }
   console.log("welcome to the control; room")
   wafadar();




   async function  all() {
    let muzaffargarhWeather=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("20 deg")
      },4000)
    })
    let DgkWeather=new Promise((resolve,reject)=>{
      resolve("15 deg")
    })
    let muzaffargarhw=await muzaffargarhWeather;
    let DgkW =await DgkWeather;
    return [muzaffargarhw,DgkW]
   }
   console.log("welcome to the weather ");
   all();