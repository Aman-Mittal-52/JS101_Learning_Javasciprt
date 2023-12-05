
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// PROBLEM 1
// Problem 1: Create a function to check if a number is Prime or Not

function isprime(Num){

    count=0;
    for(let i = 1; i <=Num; i++)
     {
      if(Num%i==0){
    count++;}
        }
    if(count==2){
    console.log(">>>>",Num,"<<<<is prime number")}
    else{
    console.log(">>>>", Num, "<<<< is not a prime number")}
    }
    
    isprime(4)