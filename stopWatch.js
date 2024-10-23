// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let intervalId;
// let running = false;
// function updateDisplay() {
//     const hrs = hours < 10 ? `0${hours}` : hours;
//     const mins = minutes < 10 ? `0${minutes}` : minutes;
//     const secs = seconds < 10 ? `0${seconds}` : seconds;
//     console.clear(); // Clears the console to show the latest time
//     console.log(`${hrs}:${mins}:${secs}`);
// }
// function startStopwatch() {
//     if (!running) {
//         running = false;
//         intervalId = setInterval(() => {
//             seconds++;
//             if (seconds === 60) {
//                 seconds = 0;
//                 minutes++;
//                 if (minutes === 60) {
//                     minutes = 0;
//                     hours++;
//                 }
//             }
//             updateDisplay();
//         }, 1000);
//     }
// }
// function stopStopwatch1() {
//     clearInterval(intervalId);
//     running = false;
// }
// function resetStopwatch() {
//     clearInterval(intervalId);
//     running = false;
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     updateDisplay();
// }

// // Example of how to use in JavaScript console:
// startStopwatch(); // to start
// stopStopwatch1(); // to stop
// resetStopwatch(); // to reset

const startStopwatch = () => {
    let starttime = new Date().getTime();
    //console.log(starttime);
    
  
    const updateStopwatch = () => {
      new Promise((res) => {
        setTimeout(() => {
          let time = new Date().getTime();
         // console.log(time);
          
          let timeshow = Math.floor((time - starttime) / 1000); 
          console.log(timeshow);
          res(); 
        }, 1000)
      }).then(() => {
        updateStopwatch();
      })
    }
  
    updateStopwatch(); 
  }
  
  const main = () => {
    startStopwatch();
  }
  
  main();
