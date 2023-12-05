
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

//Question
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd (){
    for(i = 0 ; i<20; i++){
      if (i%2 != 0){
       console.log(i ,"is" ,true); 
      }
      else {
        console.log (i ,"is" ,false);
      }
    }
  }
  console.log(isOdd())