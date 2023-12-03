// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


// Question --> Given an array of string count the overall total number of characters

let arr = ["aman", "riya"]
let sum = 0;
for(i=0; i<arr.length; i++)
  {
    sum = sum + arr[i].length
  }
console.log(sum)