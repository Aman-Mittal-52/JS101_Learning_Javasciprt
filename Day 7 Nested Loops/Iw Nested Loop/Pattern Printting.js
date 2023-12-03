
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

//question
// *
// * * 
// * * *
// * * * *

function patternPrinting(N) {
    // Write code here
   
    for(i=1; i<=N; i++){
         let bag ="";
        for(j=0; j<i; j++){
            bag += "*";
        }
        console.log(bag);
    }
}

patternPrinting(4)