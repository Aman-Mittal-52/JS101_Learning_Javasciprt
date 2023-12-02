
//Wrote by Aman Mittal

//Question --> 
//Print the sum of all the multiples of 3 from 0 to the given limit

let sum = 0
let i = 0;
let end_num = 30;
while(i <= end_num)
  {
    sum += i;
    i+=3;
  }

  console.log(sum);