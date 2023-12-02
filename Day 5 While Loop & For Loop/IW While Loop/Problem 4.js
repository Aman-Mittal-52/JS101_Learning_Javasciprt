
//Wrote by Aman Mittal

//Question --> 
//Print the average of even numbers from 1 to 100 (both included)

let i = 1;
let sum = 0;
let count = 0;
let max = 100;

while(i <= max)
  {
    if(i % 2 ==0)
    {
      sum = sum + i;
      count++
    }
    i++
    
  }
console.log(sum/count)