
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// PROBLEM 3
// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function isprime(start){
    count=0;
    for(let i = 0; i <=start; i++){
        if(start%i==0){
          count++;
        }
     }
     if(count==2){
       return true
     }
     else{
       return false
     }
 }
 for(let i = 2; i <=36; i++){
 
   if(!isprime(i))
   {
     console.log(i)
   }
 
 }
 