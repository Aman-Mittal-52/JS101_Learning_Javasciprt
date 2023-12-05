
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// PROBLEM 5
// Problem 5: Write a function to replace spaces in a given string with - .

function replaceSpaces(str,replaceItem) {
    let bag = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        bag += replaceItem;
      } 
      else {
        bag += str[i]; 
      }
    }
   return bag;
  }
  
let a="My name is Aman"
console.log(replaceSpaces(a,"-"));

  //My join method
