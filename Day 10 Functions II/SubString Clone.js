
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// Write a custom function that has the same behavior of inbuilt String Substring Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

function substr(str, start , end){
    let bag = "";
    if(end == undefined){
      for(let i = start; i<start.lenght; i++){
        bag += str[i];
      }
      return bag;
    }
    else{
      for(let i = start; i <end; i++){
        bag += str[i];
      }
      return bag;
    }
  }
  const str = "Aman Is Good Boy"
  console.log(substr(str, 8,12))