
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

function mapChar(N) {
    // Write code here
    let str = "abcdefghijklmnopqrstuvwxyz";
    let a = 1;
    let obj ={};
    for(i=0; i<N; i++){
        obj[str[i]]= i+1;
    }
    for(let j in obj){
       console.log(j + "-" + a);
       a++
    }
}

mapChar(5)
// Creating a Objects