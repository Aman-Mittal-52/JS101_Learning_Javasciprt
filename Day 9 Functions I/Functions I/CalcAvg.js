
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

//Question
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function CalcAvg(){
    let count = 0;
    let sum = 0
    let arr = [23,56,75,45,67];
    for(i=0; i<arr.length; i++){
      sum += arr[i];
      count++
    }
    console.log(sum / count)
  }
  CalcAvg()