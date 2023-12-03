
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

function mapCharAndSum(N,K,str) {
    // Write code here
    let char = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    for(let i =0;i<char.length;i++){
        obj[char[i]]=N+i;
    }
    let sum =0; 
    for(key in obj){
        for(let i =0; i<K;i++){
           if(str[i]==key){
               sum += obj[key]
           }
        }
    }
    console.log(sum)
}    

mapCharAndSum(30,3,"abc")