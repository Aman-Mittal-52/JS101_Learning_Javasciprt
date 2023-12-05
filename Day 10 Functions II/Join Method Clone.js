
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// PROBLEM 1
// Write a custom function that has the same behavior of inbuilt Array Join Function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

function JoinFunction(arr, join)
{
  let result = "";

  for(let i = 0; i < arr.length; i++)
    {
      result += arr[i]
      if( i !== arr.length - 1)
      {
        result += join
      }
    }
  console.log(result)
}

JoinFunction(['Ayush', 'Riya', 'Aman'],"-")