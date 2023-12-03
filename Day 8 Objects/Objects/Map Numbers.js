
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

function mapNumbers(N,K){
    //write code here
    let obj= {};
    for(i=1; i<=N; i++){
        obj[i]=K;
        K++
    }
    for(j in obj){
        console.log(j + "-" + obj[j])
    }
}

mapNumbers(5,10)