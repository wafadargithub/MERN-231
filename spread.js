// spread operator
// spread operator used in the function

function add(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  console.log(add(...numbers)); 

  // spread operator Strings into Arrays
  
  const word = "Hello";
const letters = [...word];

console.log(letters); 
// Output: ['H', 'e', 'l', 'l', 'o']


const hello="yessir";
const ltr= [...hello];
console.log(ltr);
