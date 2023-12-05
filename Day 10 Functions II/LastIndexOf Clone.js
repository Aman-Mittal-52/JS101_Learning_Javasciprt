
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

function lastIndexOf(arr,elementName) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === elementName) {
        return i;
      }
    }
    return -1;
  }
  
  const test = ['Aman', 'Aryan', 'Tinku', 'Aman', 'ritik', 'Rohan'];
  
  console.log(lastIndexOf(test, 'Aman'));
  
  console.log(lastIndexOf(test, 'Aryan'));
  
  console.log(test.lastIndexOf('Rohan'));
  
  console.log(lastIndexOf(test, 'ritik'));