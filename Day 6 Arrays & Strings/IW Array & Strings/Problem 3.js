// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


// Question --> Given an array of numbers find the average of all the even numbers.

let arr = [1, 4, 7, 6, 2, 3];
let count = 0;
let sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
    count++
  }
}
console.log(sum / count)