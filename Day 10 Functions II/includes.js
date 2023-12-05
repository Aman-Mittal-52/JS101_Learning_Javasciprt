
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// Write a custom function that has the same behavior of inbuilt Array Includes Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function includes(arr , item){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return true;
      }
    }
    return false;
  }
  console.log(includes([7, 4, 63, 54, 15], 5));
  console.log(includes([7, 4, 63, 54, 15], 7));
  console.log(includes([7, 4, 63, 54, 15], 75));
  console.log(includes([7, 4, 63, 54, 15], 54));
  
  