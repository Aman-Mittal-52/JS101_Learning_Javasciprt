
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

//Question
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

lower = "abcdefghijklmnopqrstuvwxyz";
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function lowertoupper(str) {
  let bag = "";
  for (let i = 0; i < str.length; i++) {
    let active = false;
    for (let j = 0; j < lower.length; j++) {
      if (str[i] == lower[j]) {
        bag = bag + upper[j];
        active = true;
      }
    }
    if (!active) {
      bag += str[i];
    }
  }
  return bag;
}

function uppertolower(str) {
  let bag = "";
  for (let i = 0; i < str.length; i++) {
    let active = false;
    for (let j = 0; j < upper.length; j++) {
      if (str[i] == upper[j]) {
        bag = bag + lower[j];
        active = true;
        break;
      }
    }
    if (!active) {
      bag += lowertoupper(str[i]);
    }
  }
  return bag;
}

console.log(uppertolower("Aman"));
// Output - aMAN