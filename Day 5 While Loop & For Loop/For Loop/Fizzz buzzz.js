
// Wrote by Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

function fizzBuzz(num) {
    // Write code here
    for(i=1; i<=num; i++)
    {
      if(i%3===0 && i%5===0)
      {
          console.log("FizzBuzz");
      }
      else if(i%3===0)
      {
          console.log("Fizz");
      }
      else if(i%5===0)
      {
          console.log("Buzz");
      }
      else
      {
          console.log(i);
      }
    }
}

fizzBuzz(5)