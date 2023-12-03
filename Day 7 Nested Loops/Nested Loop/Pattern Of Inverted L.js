
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

//question
// * * * * *
// *
// *
// *
// *

function invertedL(N) {
    // Write code here
    for(i=1; i <= N; i++){
        let bag = "";
        for(j=1;j<=N;j++){
            if(i ==1 || j == 1){
                bag += "*" + " "
            }
            else{
                bag += ""
            }
        }
        console.log(bag)
    }
}

invertedL(4)