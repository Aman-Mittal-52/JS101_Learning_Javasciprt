
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

//Question
// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value
// https://en.wikipedia.org/wiki/Absolute_value

function print(a,b)
{
  let str = a - b;
  let result = mainDiff(str);
  console.log(result);
}

function mainDiff(diff)
{
  if(diff < 0)
{
  return -diff;
}
else
{
 return diff;
}
}

print(6,9)