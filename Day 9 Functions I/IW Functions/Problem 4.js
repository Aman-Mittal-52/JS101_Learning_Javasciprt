
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// PROBLEM 4
// Problem 4: Write a function to check if the char is a small case or not.

function checkChar(char) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lower.includes(char)) {
      console.log((char)," is a small case character");
    } else if (upper.includes(char)) {
      console.log((char)," is an upper case character");
    } else {
      console.log((char)," is not a letter/character");
    }
  }
  
  checkChar("a");
  checkChar("A");
  checkChar("1");